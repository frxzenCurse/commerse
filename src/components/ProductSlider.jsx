import { Swiper, SwiperSlide } from 'swiper/react';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productsActionCreators } from '../redux/reducers/products/actionCreators';
import ProductCard from './ProductCard';
import Loader from './Loader';
import cartActionCreators from '../redux/reducers/cart/actionCreator';


const ProductSlider = () => {

  const { fetchProducts } = useActions(productsActionCreators)
  const { products, loading } = useSelector(state => state.products)

  const { addItem, getSum } = useActions(cartActionCreators)

  function setItem(item) {
    addItem(item)
    getSum()
  }

  useEffect(() => {
    if (!products.length) {
      fetchProducts()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {loading
        ?
          <Loader />
        :
        <Swiper
          style={{marginTop: 30}}
          spaceBetween={40}
          slidesPerView={4}
        >
          {products.map(item => 
            <SwiperSlide key={item.id}>
              <ProductCard className='card' card={item} onClick={setItem} />
            </SwiperSlide>
          )}
          
        </Swiper>
      } 
      
    </div>
  )
}

export default ProductSlider