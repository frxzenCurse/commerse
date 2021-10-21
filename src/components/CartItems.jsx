import { Card, Button } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Fade from 'react-reveal/Fade';

const CartItems = ({ card, onClick }) => {

  const context = useContext(ThemeContext)

  function removeItem() {
    onClick(card.id)
  }

  return (
    <div className={context === 'dark' ? 'card-dark' : ''}>
      <Fade bottom>
        <Card
          style={{ marginTop: 10, }}
          type="inner"
          title={card.title}
          extra={<Button type={context === 'dark' ? 'primary' : 'light'} onClick={removeItem}>Убрать из корзины</Button>}
        >
          <p>{card.text}</p>
          <p>{card.price}</p>
        </Card>
      </Fade>
    </div>
  )
}

export default CartItems