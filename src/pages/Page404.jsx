import { Result, Button } from 'antd';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { ThemeContext } from '../context/ThemeContext';
import { PRODUCTS } from '../data/pages';

const Page404 = () => {

  const history = useHistory()
  const context = useContext(ThemeContext)

  return (
    <div className={context === 'dark' ? 'page404-dark' : ''}>
      <Result
        status="404"
        title="404"
        subTitle="Упс, такой страницы не существует"
        extra={
          <Button type={context === 'light' ? 'light' : 'primary'} onClick={() => history.push(PRODUCTS)}>
            Вернуться на страницу товаров
          </Button>
        }
      />
    </div>
  )
}

export default Page404