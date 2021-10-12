import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Header from './components/Header'
import { useActions } from './hooks/useActions';
import cartActionCreators from './redux/reducers/cart/actionCreator';
import { AuthActionCreators } from './redux/reducers/login/actionCreators';

function App() {

  const { setUser, setAuth } = useActions(AuthActionCreators)
  const { addItem, getSum } = useActions(cartActionCreators)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username') })
      setAuth(true)
    }

    if (localStorage.getItem('cartItems')) {
      const array = JSON.parse(localStorage.getItem('cartItems'))
      
      array.forEach(item => {
        addItem(item)
      })
      getSum()
    }
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
