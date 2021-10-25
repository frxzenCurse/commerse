import ProductCard from "./ProductCard"
import { useActions } from '../hooks/useActions';
import { Empty } from 'antd';
import cartActionCreators from '../redux/reducers/cart/actionCreator';

const ProductList = ({ cards, onClick }) => {

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
              modalHandler={onClick}
            />
          )
        :
        <div className='empty-container'>
          <Empty />
        </div>
      }
    </div>
  )
}

export default ProductList