import { Empty, Col, Row } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { productsActionCreators } from '../redux/reducers/products/actionCreators';
import Trail from '../UI/Trail';
import Loader from './Loader';
import ProductSlider from './ProductSlider';
import ProjectInfo from './ProjectInfo';
import ThumbSlider from './ThumbSlider';
import Fade from 'react-reveal/Fade';

const SingleProjectCard = ({ project, onClick }) => {

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
          <Trail name="single-project__title" container='single-project__wrapper'>
            {project.title}
          </Trail>
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
          <Fade bottom>
            <div className='single-project__description'>
              {project.description}
            </div>
          </Fade>
          {error && <h1 style={{ color: 'red' }}>{error}</h1>}
          {isLoading
            ?
            <Loader />
            :
            <Fade bottom>
              <ProductSlider data={products} />
            </Fade>
          }
        </>
        :
        <Empty />
      }
    </div>
  )
}

export default SingleProjectCard