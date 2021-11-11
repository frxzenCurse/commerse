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
import { useFetching } from "../hooks/useFetching";
import { Projects } from "../API/PostService";

const ProjectDetail = () => {

  const [project, setProject] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const history = useHistory()
  const { id } = useParams()

  const { isAuth } = useSelector(state => state.login)
  
  const [fetchProject, isLoading, error] = useFetching(async () => {
    const code = id.slice(-3)
    const response = await Projects.getProjects({ projectId: [+code] })

    setProject(response.data.data.data[0])
  })

  useEffect(() => {
    fetchProject()
  }, [])  

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
        <SingleProjectCard project={project} onClick={modalHandler} />
      }
      {!isAuth && <MyModal isModalVisible={isVisible} onClick={modalHandler} />}
    </div>
  )
}

export default ProjectDetail