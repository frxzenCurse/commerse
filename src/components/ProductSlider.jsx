import { Swiper, SwiperSlide } from 'swiper/react';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productsActionCreators } from '../redux/reducers/products/actionCreators';
import ProductCard from './ProductCard';
import Loader from './Loader';

const ProductSlider = () => {

  const { fetchProducts } = useActions(productsActionCreators)
  const { products, loading } = useSelector(state => state.products)

  useEffect(() => {
    if (!products.length) {
      fetchProducts()
    }
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
          slidesPerView={3}
        >
          {products.map(item => 
            <SwiperSlide key={item.id}>
              <ProductCard card={item} />
            </SwiperSlide>
          )}
          
        </Swiper>
      } 
      
    </div>
  )
}

export default ProductSlider