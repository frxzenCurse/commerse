import { Button } from 'antd'
import { useEffect, useState } from 'react'
import cl from '../styles/ProjectInfo.module.css'
import DesignerInfo from './DesignerInfo'

const ProjectInfo = ({ project }) => {

  const [rooms, setRooms] = useState([])

  useEffect(() => {
    project.rooms.forEach(item => {
      setRooms([...rooms, item.room.title])
    })
  }, [])

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
        <Button>
          Добавить в избранное
        </Button>
      </div>
      <DesignerInfo info={project.designer} />
    </div>
  )
}


export default ProjectInfo