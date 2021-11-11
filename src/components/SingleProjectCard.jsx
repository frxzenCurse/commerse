import { Empty, Col, Row } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { productsActionCreators } from '../redux/reducers/products/actionCreators';
import Loader from './Loader';
import ProductSlider from './ProductSlider';
import ProjectInfo from './ProjectInfo';
import ThumbSlider from './ThumbSlider';

const SingleProjectCard = ({ project, data, onClick }) => {

  const { products, isLoading, error } = useSelector(state => state.products)
  const { fetchProducts } = useActions(productsActionCreators)

  useEffect(() => {

    if (!products.length) {
      fetchProducts()
    }
  }, [])

  return (
    <div className='single-project'>
      {project
        ?
        <>
          <div className='single-project__label'>{project.object_type.title}</div>
          <h1 className='single-project__title'>
            {project.title}
          </h1>
          <Row justify='space-between'>
            <Col span={12}>
              {project.images.length
                ?
                <ThumbSlider project={project} />
                :
                <img src="https://via.placeholder.com/1000/771796" alt="" />
              }
            </Col>
            <Col span={8}>
              <ProjectInfo project={project} onClick={onClick} />
            </Col>
          </Row>
          <div className='single-project__description'>
            {project.description}
          </div>
          {error && <h1 style={{ color: 'red' }}>{error}</h1>}
          {isLoading
            ?
            <Loader />
            :
            <ProductSlider data={products} />
          }
        </>
        :
        <Empty />
      }
    </div>
  )
}

export default SingleProjectCard