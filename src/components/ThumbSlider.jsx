import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import cl from '../styles/ThumbSlider.module.css'
import { Controller, Navigation } from 'swiper';

const ThumbSlider = ({project}) => {

  const [swiper, setSwiper] = useState(null)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  let params = {
    modules: [Controller, Navigation],
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "bullets",
    //   clickable: true
    // },
    slidesPerView: 1,
    // getSwiper: setSwiper,
    controller: {
      control: thumbsSwiper
    }
  }

  let thumbsParams = {
    modules: [Controller],
    // slideToClickedSlide: true,
    spaceBetween: 10,
    slidesPerView: 5,
    // getSwiper: setThumbsSwiper,
    onSwiper: setThumbsSwiper,
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
          <SwiperSlide key={index}>
            <img className={cl.img} src={'https://api.d4u.dev.dterra.eu/public' + item.img} alt="" />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default ThumbSlider