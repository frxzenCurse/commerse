import { Result, Button } from 'antd';
import { FrownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { PRODUCTS } from '../data/pages';

const EmptyCart = () => {

  const history = useHistory()
  
  return (
    <Result
      icon={<FrownOutlined />}
      title="В вашей корзине пока пусто"
      extra={<Button type="primary" onClick={() => history.push(PRODUCTS)}>Выбрать товар</Button>}
    />
  )
}

export default EmptyCart