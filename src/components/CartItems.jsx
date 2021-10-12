import { Card, Button } from 'antd';

const CartItems = ({ card, onClick }) => {

  function removeItem() {
    onClick(card.id)
  }

  return (
    <div>
      <Card
        style={{ marginTop: 10, }}
        type="inner"
        title={card.title}
        extra={<Button onClick={removeItem}>Убрать из корзины</Button>}
      >
        <p>{card.text}</p>
        <p>{card.price}</p>
      </Card>
    </div>
  )
}

export default CartItems