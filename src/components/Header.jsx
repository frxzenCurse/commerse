import { Layout, Menu, Row } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { CART, LOGIN, PRODUCTS } from '../data/pages';
import { useActions } from '../hooks/useActions';
import { AuthActionCreators } from '../redux/reducers/login/actionCreators';

const Header = () => {

  const history = useHistory()
  const { isAuth, user } = useSelector(state => state.login)
  const { logout } = useActions(AuthActionCreators)

  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth
          ?
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key='1' onClick={() => history.push(PRODUCTS)}>Товары</Menu.Item>
            <Menu.Item key='2' onClick={() => history.push(LOGIN)}>{user.username}</Menu.Item>
            <Menu.Item key='3' onClick={() => logout()}>Выйти</Menu.Item>
            <Menu.Item key='4' onClick={() => history.push(CART)}>Корзина</Menu.Item>
          </Menu>
          :
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key='1' onClick={() => history.push(PRODUCTS)}>Товары</Menu.Item>
            <Menu.Item key='2' onClick={() => history.push(LOGIN)}>Логин</Menu.Item>
            <Menu.Item key='3' onClick={() => alert("Пожалуйста войдите")}>Корзина</Menu.Item>
          </Menu>
        }
      </Row>
    </Layout.Header>
  )
}

export default Header