import React, { useEffect } from "react";
import "../style/home1.css";
import WOW from "wowjs";
import HomeSlider from "./HomeSlider";
import { BiGlobeAlt } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/home.css";
import 'animate.css';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function Home() {
  return (
    <div>
      <HomeSlider className="section-1" />
      <div className="section-2 container">
        <div className="main-2">
          <div className="d-1">
            <BiGlobeAlt className="BiGlobeAlt" />
            <h3>DISCOVER WHAT’S POSSIBLE</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              sollicitudin, lorem quis bibendum auci elit consequat <br />{" "}
              ipsutis.
            </p>
          </div>
          <div className="d-2">
            <AiOutlineSend className="BsSend" />
            <h3>PEOPLE REALLY MATTER</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              sollicitudin, lorem quis bibendum auci elit consequat <br />{" "}
              ipsutis.
            </p>
          </div>
        </div>
        <div className="main-3">
          <div className="d-3">
            <AiOutlineHeart className="BsSend" />
            <h3>HAVING A PLAN FEELS GOOD</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              <br /> Aenean sollicitudin, lorem quis bibendum auci elit
              consequat <br /> ipsutis.
            </p>
          </div>
        </div>
      </div>
      <div className="section-3 ">
        <div className="container ">
          <h2>WE'RE SHARING EVERYTHING</h2>
          <div></div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer a gravida nibhumus vel
            velit auctor aliquet aenean sollicitudin lorem.
          </p>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="slider-2">
              <img
                src="https://fleur.qodeinteractive.com/wp-content/uploads/2016/01/blog-post-img-9-600x720.jpg"
                alt=""
              />
             <div className="content">
             <h4>CONNECT YOUR WORD</h4>
              <p> Proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum auctor, nisi elit  bibendum auctor, nisi elit</p>
             <div className="d-flex mn">
             <div className="sq"></div>
              <h6 className="style">Fashion</h6>
              <h6 className="month">January 24 2016</h6>
             </div>
             </div>
            </SwiperSlide>
            <SwiperSlide className="slider-2">
              <img
                src="https://fleur.qodeinteractive.com/wp-content/uploads/2016/02/blog-post-img-10-600x720.jpg"
                alt=""
              />
             <div className="content">
             <h4>CHOOSE YOUR STYLE</h4>
              <p> Proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum auctor, nisi elit  bibendum auctor, nisi elit</p>
              <div className="d-flex mn">
             <div className="sq"></div>
              <h6 className="style">Decoration</h6>
              <h6 className="month">February 24 2016</h6>
             </div>
             </div>
            </SwiperSlide>
            <SwiperSlide className="slider-2">
              <img
                src="https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/blog-post-img-11-600x720.jpg"
                alt=""
              />
             <div className="content">
             <h4>WEDDING LIST</h4>
              <p> Proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum auctor, nisi elit  bibendum auctor, nisi elit</p>
              <div className="d-flex mn">
             <div className="sq"></div>
              <h6 className="style">Planning</h6>
              <h6 className="month">April 24 2016</h6>
             </div>
             </div>
            </SwiperSlide>
            <SwiperSlide className="slider-2">
              <img
                src="https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/blog-post-img-12-600x720.jpg"
                alt=""
              />
              <div className="content">
              <h4>SOMETHING SPECIAL</h4>
              <p> Proin gravida nibh vel veliauctor aliquenean sollicitudiem quis bibendum auctor, nisi elit  bibendum auctor, nisi elit</p>
              <div className="d-flex mn">
             <div className="sq"></div>
              <h6 className="style">Design</h6>
              <h6 className="month">March 24 2016</h6>
             </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home;
