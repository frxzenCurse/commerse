import { Result, Button } from 'antd';
import { FrownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { PRODUCTS } from '../data/pages';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const EmptyCart = () => {

  const context = useContext(ThemeContext)
  const history = useHistory()
  
  return (
    <div className={context === 'dark' ? 'empty-dark' : ''}>
      <Result
        icon={<FrownOutlined />}
        title="Ваш список избранного пуст"
        extra={<Button type={context === 'dark' ? 'primary' : 'light'} onClick={() => history.push(PRODUCTS)}>Выбрать товар</Button>}
      />
    </div>
  )
}

export default EmptyCart