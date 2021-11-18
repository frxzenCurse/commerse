import { Layout, Row, Col, Button } from 'antd';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { productsActionCreators } from '../redux/reducers/products/actionCreators';
import Loader from "../components/Loader";
import ProjectList from '../components/ProjectList';
import Filters from '../components/Filters';
import { useFetching } from '../hooks/useFetching';
import { Projects } from '../API/PostService';

const { Content } = Layout;

const Products = () => {

  const [page, setPage] = useState(1)
  const [params, setParams] = useState({
    buildingTypeId: [],
    objectTypeId: [],
    priceSegmentId: [],
    roomId: [],
    square: [],
    view: "",
  })

  const { products, isLoading, error, total } = useSelector(state => state.products)
  const { fetchProducts, loadMore } = useActions(productsActionCreators)
  const [loadMoreProducts, loading, typeError] = useFetching(async () => {
    const response = await Projects.getProjects({ ...params, page: page })

    loadMore(response.data.data.data)
  })

  useEffect(() => {
    fetchProducts(params)
    // eslint-disable-next-line
  }, [params])

  useEffect(() => {
    if (page > 1) {
      loadMoreProducts()
    }
    if (typeError) {
      console.log(typeError);
    }
  }, [page])

  function updateParams(item, value) {
    if (value.length > 1) {
      setParams({ ...params, [item]: [...value].map(Number) });
    } else {
      setParams({ ...params, [item]: [value].map(Number) });
    }
  }

  return (
    <div className='container'>
      <Content>
        <Row justify='space-between'>
          <Col span={4}>
            <Filters onChange={updateParams}/>
          </Col>
          <Col span={18}>
            {error && <h1 style={{ color: 'red' }}>{error}</h1>}
            {isLoading
              ?
              <Loader />
              :
              <>
                <ProjectList projects={products} />
                {total > 12 && total > products.length
                  ?
                  <div className='button-show'>
                    <Button onClick={() => setPage(page + 1)} loading={loading}>
                      Показать еще
                    </Button>
                  </div>
                  :
                  null
                }
              </>
            }
          </Col>
        </Row>
        <canvas id='canvas'></canvas>
      </Content>
    </div>
  )
}

export default Products
