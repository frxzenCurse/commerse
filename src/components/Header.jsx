import { Col, Layout, Menu, Row } from 'antd';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { ThemeContext } from '../context/ThemeContext';
import { CART, LOGIN, POSTS, PRODUCTS } from '../data/pages';
import { useActions } from '../hooks/useActions';
import { AuthActionCreators } from '../redux/reducers/login/actionCreators';
import ThemeChanger from './ThemeChanger';

const Header = ({onClick, themeChange, theme}) => {

  const location = useLocation()
  const history = useHistory()
  const state = useSelector(state => state)
  const { logout } = useActions(AuthActionCreators)
  const context = useContext(ThemeContext)

  return (  
    <Layout.Header style={{height: 65, transition: '.3s'}} className={context === 'light' ? 'header-light' : 'header-dark'}>
      <Row justify='space-between'>
        <Col>
          <ThemeChanger onChange={e => themeChange(e.target.value)} theme={theme} />
        </Col>
        <Col>
          {state.login.isAuth
            ?
            <Menu selectedKeys={location.pathname} disabledOverflow={true} theme={context === 'light' ? 'light' : 'dark'} mode="horizontal">
              <Menu.Item key={POSTS} onClick={() => history.push(POSTS)}>Посты</Menu.Item>
              <Menu.Item key={PRODUCTS} onClick={() => history.push(PRODUCTS)}>Интерьеры</Menu.Item>
              <Menu.Item key='username' style={{pointerEvents: 'none'}}>{state.login.username}</Menu.Item>
              <Menu.Item key='4' onClick={() => logout()}>Выйти</Menu.Item>
              <Menu.Item key={CART} onClick={() => history.push(CART)}>Избранное</Menu.Item>
            </Menu>
            :
            <Menu selectedKeys={location.pathname} disabledOverflow={true} theme={context === 'light' ? 'light' : 'dark'} mode="horizontal">
              <Menu.Item key={POSTS} onClick={() => history.push(POSTS)}>Посты</Menu.Item>
              <Menu.Item key={PRODUCTS} onClick={() => history.push(PRODUCTS)}>Товары</Menu.Item>
              <Menu.Item key={LOGIN} onClick={() => history.push(LOGIN)}>Логин</Menu.Item>
              <Menu.Item key='3' onClick={onClick}>Избранное</Menu.Item>
            </Menu>
          }
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header