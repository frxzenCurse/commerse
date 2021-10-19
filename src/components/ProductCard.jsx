import { Card, Button } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProductCard = ({ card, onClick }) => {

  const [isAdd, setIsAdd] = useState(false)
  const { items } = useSelector(state => state.cart)

  function setItem() {
    onClick(card)
    setIsAdd(!isAdd)
  }


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items))
    // eslint-disable-next-line
  }, [isAdd])

  useEffect(() => {
    items.forEach(item => {
      if (item.id === card.id) {
        setIsAdd(!isAdd)
      }
    })
    // eslint-disable-next-line
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
    </Card>
  )
}

export default ProductCard