import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import EmptyCart from '../components/EmptyCart';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ProjectList from '../components/ProjectList';

const { Content } = Layout;

const Cart = () => {

  const { items } = useSelector(state => state.cart)
  const context = useContext(ThemeContext)

  return (
    <div style={{ padding: 60, overflow: 'hidden', transition: '.3s' }}>
      <Content style={{ margin: 30, }}>
        {items.length
          ?
          <ProjectList projects={items} />
          :
          <EmptyCart />
        }
      </Content>
    </div>
  )
}

export default Cart