import { Col, Layout, Menu, Row } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { CART, LOGIN, POSTS, PRODUCTS } from '../data/pages';
import { useActions } from '../hooks/useActions';
import { AuthActionCreators } from '../redux/reducers/login/actionCreators';
import ThemeChanger from './ThemeChanger';

const Header = ({onClick, themeChange}) => {

  const history = useHistory()
  const state = useSelector(state => state)
  const { logout } = useActions(AuthActionCreators)

  return (  
    <Layout.Header>
      <Row justify='space-between'>
        <Col>
          <ThemeChanger onChange={e => themeChange(e.target.value)} />
        </Col>
        <Col>
          {state.login.isAuth
            ?
            <Menu disabledOverflow={true} theme="dark" mode="horizontal">
              <Menu.Item key='1' onClick={() => history.push(POSTS)}>Посты</Menu.Item>
              <Menu.Item key='2' onClick={() => history.push(PRODUCTS)}>Товары</Menu.Item>
              <Menu.Item key='3' style={{pointerEvents: 'none'}}>{state.login.user.username}</Menu.Item>
              <Menu.Item key='4' onClick={() => logout()}>Выйти</Menu.Item>
              <Menu.Item key='5' onClick={() => history.push(CART)}>{state.cart.items.length} Корзина</Menu.Item>
            </Menu>
            :
            <Menu disabledOverflow={true} theme="dark" mode="horizontal">
              <Menu.Item key='1' onClick={() => history.push(PRODUCTS)}>Товары</Menu.Item>
              <Menu.Item key='2' onClick={() => history.push(LOGIN)}>Логин</Menu.Item>
              <Menu.Item key='3' onClick={onClick}>Корзина</Menu.Item>
            </Menu>
          }
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header