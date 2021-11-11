import { Card, Button } from 'antd';
import Fade from 'react-reveal/Fade';

const CartItems = ({ card, onClick }) => {

  function removeItem() {
    onClick(card.id)
  }

  return (
    <Fade bottom>
      <Card
        style={{ marginTop: 10, }}
        type="inner"
        title={card.title}
        extra={<Button onClick={removeItem}>Убрать из корзины</Button>}
      >
        <p>{card.text}</p>
        <p>{card.price}</p>
      </Card>
    </Fade>
  )
}

export default CartItems