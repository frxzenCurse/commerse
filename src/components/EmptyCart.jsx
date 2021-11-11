import { Result, Button } from 'antd';
import { FrownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { PRODUCTS } from '../data/pages';

const EmptyCart = () => {

  const history = useHistory()
  
  return (
    <div>
      <Result
        icon={<FrownOutlined />}
        title="Ваш список избранного пуст"
        extra={<Button onClick={() => history.push(PRODUCTS)}>Выбрать товар</Button>}
      />
    </div>
  )
}

export default EmptyCart