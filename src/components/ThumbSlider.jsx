import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import cl from '../styles/ThumbSlider.module.css'
import SwiperCore, { Thumbs } from 'swiper';

SwiperCore.use([Thumbs])

const ThumbSlider = ({ project }) => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  let params = {
    modules: [Thumbs],
    slidesPerView: 1,
    thumbs: {
      swiper: thumbsSwiper
    }
  }

  let thumbsParams = {
    slideToClickedSlide: true,
    spaceBetween: 10,
    slidesPerView: 5,
    onSwiper: (thumbs) => { setThumbsSwiper(thumbs) },
  }

  return (
    <div>
      <Swiper {...params}>
        {project.images.map((item, index) =>
          <SwiperSlide key={index}>
            <img className={cl.img} src={'https://api.d4u.dev.dterra.eu/public' + item.img} alt="" />
          </SwiperSlide>
        )}
      </Swiper>
      <Swiper {...thumbsParams} className={cl.thumbs}>
        {project.images.map((item, index) =>
          <SwiperSlide key={index} className='thumb-slide'>
            <img className={cl.img} src={'https://api.d4u.dev.dterra.eu/public' + item.img} alt="" />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default ThumbSlider