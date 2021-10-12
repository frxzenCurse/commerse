import { Layout } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartItems from '../components/CartItems';
import { useActions } from '../hooks/useActions';
import cartActionCreators from '../redux/reducers/cart/actionCreator';

const { Content } = Layout;

const Cart = () => {

  const { items, totalPrice } = useSelector(state => state.cart)
  const { removeItem, getSum } = useActions(cartActionCreators)

  function removeCartItem(id) {
    removeItem(id)
    getSum()
  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items))
  }, [items])

  return (
    <Layout>
      <Content style={{ margin: 30, }}>
        {items.length
          ?
          <>
            <div>
              {items.map(item =>
                <CartItems card={item} key={item.id} onClick={removeCartItem} />
              )}
            </div>
            <h1>{totalPrice}</h1>
          </>
          :
          <h1>Корзина пока пуста</h1>
        }
      </Content>
    </Layout>
  )
}

export default Cart