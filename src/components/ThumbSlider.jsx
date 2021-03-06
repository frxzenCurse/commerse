import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import cl from '../styles/ThumbSlider.module.css'
import SwiperCore, { Thumbs } from 'swiper';
import Fade from 'react-reveal/Fade';

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
      {project.images.length > 1
        ?
        <>
          <Fade bottom distance='100px'>
            <Swiper {...params}>
              {project.images.map((item, index) =>
                <SwiperSlide key={index}>
                  <img className={cl.img} src={'https://api.d4u.dev.dterra.eu/public' + item.img} alt="" />
                </SwiperSlide>
              )}
            </Swiper>
          </Fade>
          <Fade bottom >
            <Swiper {...thumbsParams} className={cl.thumbs}>
              {project.images.map((item, index) =>
                <SwiperSlide key={index} className='thumb-slide'>
                  <img className={cl.img} src={'https://api.d4u.dev.dterra.eu/public' + item.img} alt="" />
                </SwiperSlide>
              )}
            </Swiper>
          </Fade>
        </>
        :
        <img src={'https://api.d4u.dev.dterra.eu/public' + project.images[0].img} alt="" />
      }
    </div>
  )
}



export default ThumbSlider