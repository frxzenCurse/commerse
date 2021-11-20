import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Header from './components/Header'
import MyModal from './components/MyModal';
import { useActions } from './hooks/useActions';
import cartActionCreators from './redux/reducers/cart/actionCreator';
import { AuthActionCreators } from './redux/reducers/login/actionCreators';
import { userActionCreators } from './redux/reducers/user/actionCreators';

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const { setAuth } = useActions(AuthActionCreators)
  const { fetchUser } = useActions(userActionCreators)
  const { addItem } = useActions(cartActionCreators)
  const { isAuth } = useSelector(state => state.login)
  const [isVisible, setIsVisible] = useState(false)

  function onClick() {
    setIsVisible(!isVisible)
  }

  useEffect(() => {

    if (localStorage.getItem('auth')) {
      setAuth(true)
    } 
    setIsLoading(false)

    if (localStorage.getItem('cartItems')) {
      const array = JSON.parse(localStorage.getItem('cartItems'))

      array.forEach(item => {
        addItem(item)
      })
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (isAuth) {
      fetchUser(localStorage.getItem('auth'))
    }
  }, [isAuth])
  
  return (
    <BrowserRouter>
      <Header onClick={onClick} />
      <AppRouter isLoading={isLoading} />
      {!isAuth &&
        <MyModal isModalVisible={isVisible} onClick={onClick} />}
    </BrowserRouter>
  );
}

export default App;
