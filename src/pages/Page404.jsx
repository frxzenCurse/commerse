import { Result, Button } from 'antd';
import { useHistory } from 'react-router';
import { PRODUCTS } from '../data/pages';

const Page404 = () => {

  const history = useHistory()

  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Упс, такой страницы не существует"
        extra={<Button type="primary" onClick={() => history.push(PRODUCTS)}>Вернуться на страницу товаров</Button>}
      />
    </div>
  )
}

export default Page404