import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from './ProjectCard';

const ProductSlider = ({data}) => {

  return (
    <Swiper
      style={{marginTop: 60}}
      spaceBetween={40}
      slidesPerView={4}
    >
      {data.map(item => 
        <SwiperSlide key={item.id}>
          <ProjectCard project={item} />
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default ProductSlider