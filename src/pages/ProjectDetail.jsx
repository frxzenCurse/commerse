import { Button } from "antd";
import { useHistory, useParams } from "react-router";
import { PRODUCTS } from "../data/pages";
import { useEffect, useState } from 'react'
import { useActions } from "../hooks/useActions";
import { productsActionCreators } from "../redux/reducers/products/actionCreators";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import SingleProjectCard from "../components/SingleProjectCard";

const ProjectDetail = () => {

  const history = useHistory()
  const [project, setProject] = useState(null)
  const { products, isLoading, error } = useSelector(state => state.products)
  const { fetchProducts } = useActions(productsActionCreators)
  const { id } = useParams()

  useEffect(() => {
    if (!products.length) {
      fetchProducts()
    }
    setProject(products.find(item => item.code === id))
  }, [products])

  return (
    <div className='container'>
      <Button onClick={() => history.push(PRODUCTS)}>Вернуться назад</Button>
      {error && <h1 style={{ color: 'red' }}>{error}</h1>}
      {isLoading
        ?
        <Loader />
        :
        <SingleProjectCard project={project} />
      }
    </div>
  )
}

export default ProjectDetail