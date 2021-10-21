import { Layout, Row, Typography } from 'antd';
import { useSelector } from 'react-redux';
import CartItems from '../components/CartItems';
import EmptyCart from '../components/EmptyCart';
import { useActions } from '../hooks/useActions';
import cartActionCreators from '../redux/reducers/cart/actionCreator';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const { Content } = Layout;

const Cart = () => {

  const { items, totalPrice } = useSelector(state => state.cart)
  const { removeItem, getSum } = useActions(cartActionCreators)
  const context = useContext(ThemeContext)

  function removeCartItem(id) {
    removeItem(id)
    getSum()
  }

  return (
    <div style={{ padding: 60, overflow: 'hidden', transition: '.3s' }}>
      <Content style={{ margin: 30, }}>
        {items.length
          ?
          <>
            <TransitionGroup className="post-list">
              {items.map(item =>
                <CSSTransition 
                  key={item.id}
                  timeout={1500}
                  classNames="item"
                >
                <CartItems card={item} onClick={removeCartItem} />
                </CSSTransition>
              )}
            </TransitionGroup>
            <Row justify='end' style={{marginTop: 30}}>
              <Typography.Title style={context === 'dark' ? {color: 'rgba(255,255,255,0.85)'} : ''}>Общая сумма: {totalPrice} ₽</Typography.Title>
            </Row>
          </>
          :
          <EmptyCart />
        }
      </Content>
    </div>
  )
}

export default Cart