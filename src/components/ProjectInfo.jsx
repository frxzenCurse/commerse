import { Button } from 'antd'
import { useEffect, useState } from 'react'
import cl from '../styles/ProjectInfo.module.css'
import DesignerInfo from './DesignerInfo'
import cartActionCreators from '../redux/reducers/cart/actionCreator'
import { useActions } from '../hooks/useActions'
import { useSelector } from 'react-redux'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

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
    <>
      <Bounce right cascade>
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
            <SwitchTransition mode='out-in'>
              <CSSTransition
                key={isAdded}
                addEndListener={(node, done) => {
                  node.addEventListener("transitionend", done, false);
                }}
                classNames="fade"
              >
                <div>
                  <Button
                    type={isAdded ? 'primary' : 'default'}
                    className='btn'
                    onClick={() => login.isAuth ? setIsAdded(!isAdded) : onClick()}
                  >
                    {isAdded ? 'Удалить из избранного' : 'Добавить в избранное'}
                  </Button>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </Bounce>
      <Fade bottom>
        <DesignerInfo info={project.designer} />
      </Fade>
    </>
  )
}


export default ProjectInfo