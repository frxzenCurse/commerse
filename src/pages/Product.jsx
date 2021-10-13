import { Button } from "antd"
import { useHistory } from "react-router"
import { PRODUCTS } from "../data/pages"

const Product = () => {

  const history = useHistory()

  return (
    <div>
      <Button style={{marginTop: 20, marginLeft: 20}} onClick={() => history.push(PRODUCTS)}>Вернуться назад</Button>
    </div>
  )
}

export default Product