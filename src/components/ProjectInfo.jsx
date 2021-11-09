import { Button } from 'antd'
import { useEffect, useState } from 'react'
import cl from '../styles/ProjectInfo.module.css'
import DesignerInfo from './DesignerInfo'
import cartActionCreators from '../redux/reducers/cart/actionCreator'
import { useActions } from '../hooks/useActions'
import { useSelector } from 'react-redux'

const ProjectInfo = ({ project, onClick }) => {

  const [rooms, setRooms] = useState([])
  const [isAdded, setIsAdded] = useState(false)

  const { login, cart } = useSelector(state => state)
  const { addItem, removeItem } = useActions(cartActionCreators)

  useEffect(() => {
    project.rooms.forEach(item => {
      setRooms([...rooms, item.room.title])
    })

    const item = cart.items.find(item => item.id === project.id)

    if (item) {
      setIsAdded(true)
    }
  }, [])

  useEffect(() => {
    if (isAdded) {
      addItem(project)
    } else {
      removeItem(project.id)
    }
  }, [isAdded])

  return (
    <div>
      <div className={cl.item}>
        <div className={cl.text}>Помещение</div>
        <div className={cl.label}>{rooms.join(', ')}</div>
      </div>
      <div className={cl.item}>
        <div className={cl.text}>Площадь</div>
        <div className={cl.label}>{project.square} кв.м</div>
      </div>
      <div className={cl.item}>
        <div className={cl.text}>Тип здания</div>
        <div className={cl.label}>{project.building_type.title}</div>
      </div>
      <div className={cl.item}>
        <div className={cl.text}>Бюджет</div>
        <div className={cl.label}>{project.price_segment.title}</div>
      </div>
      <div className={cl.button}>
        <Button onClick={() => login.isAuth ? setIsAdded(!isAdded) : onClick()}>
          {isAdded ? 'Удалить из избранного' : 'Добавить в избранное'}
        </Button>
      </div>
      <DesignerInfo info={project.designer} />
    </div>
  )
}


export default ProjectInfo