import { Card, Button } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../context/ThemeContext';

const ProductCard = ({ card, onClick }) => {

  const [isAdd, setIsAdd] = useState(false)
  const { items } = useSelector(state => state.cart)
  const { isAuth } = useSelector(state => state.login)
  const context = useContext(ThemeContext)

  function setItem() {
    if (isAuth) {
      onClick(card)
      setIsAdd(!isAdd)
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
    <div className={context === 'dark' ? 'card-dark' : ''} style={{ margin: 10 }}>
      <Card title={card.title} style={{ width: 300, height: '100%'}}>
        <p>{card.text}</p>
        <p>{card.price} ₽</p>
        <Button
          type={context === 'light' ? 'light' : 'primary'}
          onClick={setItem}
          disabled={isAdd}
        >
          Добавить в корзину
        </Button>
      </Card>
    </div>
  )
}

export default ProductCard