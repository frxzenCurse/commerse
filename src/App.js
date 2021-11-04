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
import {ThemeContext} from './context/ThemeContext';

function App() {

  const { setUsername, setAuth } = useActions(AuthActionCreators)
  const { addItem, getSum } = useActions(cartActionCreators)
  const { isAuth } = useSelector(state => state.login)
  const [isVisible, setIsVisible] = useState(false)
  const [theme, setTheme] = useState('')

  function onClick() {
    setIsVisible(!isVisible)
  }

  function themeChange(event) {
    setTheme(event)
  }

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUsername(localStorage.getItem('username'))
      setAuth(true)
    }

    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'))
    } else {
      setTheme('light')
    }

    if (localStorage.getItem('cartItems')) {
      const array = JSON.parse(localStorage.getItem('cartItems'))

      array.forEach(item => {
        addItem(item)
      })
      getSum()
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Header onClick={onClick} themeChange={themeChange} theme={theme} />
            <AppRouter />
        {!isAuth &&
          <MyModal isModalVisible={isVisible} onClick={onClick} />}
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
