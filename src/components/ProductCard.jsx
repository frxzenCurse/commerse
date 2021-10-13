import { Card, Button } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { PRODUCT } from '../data/pages';

const ProductCard = ({ card, onClick, push }) => {

  const [isAdd, setIsAdd] = useState(false)
  const { items } = useSelector(state => state.cart)
  const history = useHistory()

  function setItem() {
    onClick(card)
    setIsAdd(!isAdd)
  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items))
  }, [isAdd])

  useEffect(() => {
    items.forEach(item => {
      if (item.id === card.id) {
        setIsAdd(!isAdd)
      }
    })
  }, [])

  return (
    <Card title={card.title} style={{ width: 300, margin: 10, }}>
      <p>{card.text}</p>
      <p>{card.price}</p>
      <Button
        type="primary"
        onClick={setItem}
        disabled={isAdd}
      >
        Добавить в корзину
      </Button>
      <Button onClick={() => history.push(PRODUCT + '/' + card.id)} style={{marginTop: 10,}}>
        Подробнее
      </Button> 
    </Card>
  )
}

export default ProductCard