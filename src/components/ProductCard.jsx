import { Card, Button } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../context/ThemeContext';
import Fade from 'react-reveal/Fade';

const ProductCard = ({ card, onClick, modalHandler }) => {

  const [isAdd, setIsAdd] = useState(false)
  const { items } = useSelector(state => state.cart)
  const { isAuth } = useSelector(state => state.login)
  const context = useContext(ThemeContext)

  function setItem() {
    if (isAuth) {
      onClick(card)
      setIsAdd(!isAdd)
    } else {
      modalHandler()
    }
  }

  useEffect(() => {
    items.forEach(item => {
      if (item.id === card.id) {
        setIsAdd(!isAdd)
      }
    })
    // eslint-disable-next-line
  }, [])

  return (
    <Fade bottom>
      <div className={context === 'dark' ? 'card-dark' : ''}>
        <Card className='card' title={card.title}>
          <div className='column'>
            <div className='column__item'>
              <p>{card.text}</p>
            </div>
            <div className='column__item'>
              <p>{card.price} ₽</p>
              <Button
                type={context === 'light' ? 'light' : 'primary'}
                onClick={setItem}
                disabled={isAdd}
              >
                Добавить в корзину
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Fade>
  )
}

export default ProductCard