import { Layout, Row, Col, } from 'antd';
import Search from '../components/Search'
import { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import { useSearch } from '../hooks/useSearch';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { productsActionCreators } from '../redux/reducers/products/actionCreators';

const { Content } = Layout;

const Products = () => {

  const [value, setValue] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
  const { products, loading } = useSelector(state => state.products)
  const { fetchProducts } = useActions(productsActionCreators)

  useEffect(() => {
    fetchProducts()
  }, [])

  const searchedAndSortedCards = useSearch(products, selectedSort, value)

  function sortCards(value) {
    setSelectedSort(value)
  }

  return (
    <Layout style={{ margin: 40, }}>
      <Content>
        <Row>
          <Col span={6}>
            <Filters
              placeholder='Сортировка'
              options={[
                { value: 'title', name: 'По названию' },
                { value: 'text', name: 'По описанию' },
              ]}
              onChange={sortCards}
            />
          </Col>
          <Col span={18}>
            <Search value={value} onChange={(e) => setValue(e.target.value)} />
          </Col>
        </Row>
        {!loading
          ?
            <ProductList cards={searchedAndSortedCards} />
          :
            <h1>Идет загрузка</h1>
        }
      </Content>
    </Layout>
  )
}

export default Products