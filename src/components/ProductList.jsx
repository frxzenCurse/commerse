import ProductCard from "./ProductCard"
import { Typography } from 'antd';
import { useActions } from '../hooks/useActions';
import cartActionCreators from '../redux/reducers/cart/actionCreator';

const ProductList = ({ cards }) => {

  const { addItem, getSum } = useActions(cartActionCreators)

  function setItem(item) {
    addItem(item)
    getSum()
  }

  return (
    <div className="container">
      {cards.length
        ?
        cards.map(card =>
          <ProductCard
            key={card.id}
            card={card}
            onClick={setItem}
          />
        )
        :
        <Typography.Title style={{ marginLeft: 10, }}>Таких товаров нет!</Typography.Title>
      }
    </div>
  )
}

export default ProductList