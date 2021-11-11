import { Card, Button } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';

const ProductCard = ({ card, onClick, modalHandler }) => {

  const [isAdd, setIsAdd] = useState(false)
  const { items } = useSelector(state => state.cart)
  const { isAuth } = useSelector(state => state.login)

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
      <Card className='card' title={card.title}>
        <div className='column'>
          <div className='column__item'>
            <p>{card.text}</p>
          </div>
          <div className='column__item'>
            <p>{card.price} ₽</p>
            <Button
              onClick={setItem}
              disabled={isAdd}
            >
              Добавить в корзину
            </Button>
          </div>
        </div>
      </Card>
    </Fade>
  )
}

export default ProductCard