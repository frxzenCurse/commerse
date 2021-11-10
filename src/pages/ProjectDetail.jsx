import { Button } from "antd";
import { useHistory, useParams } from "react-router";
import { PRODUCTS } from "../data/pages";
import { useEffect, useState } from 'react'
import { useActions } from "../hooks/useActions";
import { productsActionCreators } from "../redux/reducers/products/actionCreators";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import SingleProjectCard from "../components/SingleProjectCard";
import MyModal from "../components/MyModal";

const ProjectDetail = () => {

  const [project, setProject] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  const { products, isLoading, error } = useSelector(state => state.products)
  const { isAuth } = useSelector(state => state.login)
  const { fetchProducts } = useActions(productsActionCreators)

  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    if (!products.length) {
      fetchProducts()
    }
    setProject(products.find(item => item.code === id))
  }, [products])

  function modalHandler() {
    if (!isAuth) {
      setIsVisible(!isVisible)
    }
  }

  return (
    <div className='container'>
      <Button onClick={() => history.push(PRODUCTS)}>Вернуться назад</Button>
      {error && <h1 style={{ color: 'red' }}>{error}</h1>}
      {isLoading
        ?
        <Loader />
        :
        <SingleProjectCard project={project} data={products} onClick={modalHandler} />
      }
      {!isAuth && <MyModal isModalVisible={isVisible} onClick={modalHandler} />}
    </div>
  )
}

export default ProjectDetail