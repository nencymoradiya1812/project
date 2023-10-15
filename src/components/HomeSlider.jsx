import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '../style/home.css';
import 'swiper/css';
import 'swiper/css/navigation'; 


function HomeSlider() {
   
  return (
    <div>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide >
          <div className='swiperone'>
            <h3>STYLE & GRACE</h3>
            <p>
              make your beautiful website with fleur 
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wow swipertwo">
          <h3 className="wow animate__backInUp">SIMPLY CHARMING</h3>
            <p>
              make your beautiful website with fleur 
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiperthree">
        <h3>
              THIS IS BEAUTY
            </h3>
            <p>
               Designed with love & care, Fleuris all you ever wanted
            </p>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSlider
