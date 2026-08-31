import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroImg from "../img/banner_Hero1.jpg";
import HeroImg2 from "../img/banner_Hero2.jpg";
import HeroImg3 from "../img/banner_Hero3.jpg";
import "./heroSlider.css";
import { color } from "framer-motion";

function HeroSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            style={{ "border-radius": "20px" }}
          >
            <SwiperSlide>
              <div className="content">
                <h4 style={{color : "white"}}>Men’s fashion</h4>
                <h3>
                 Fresh fits for the season
                </h3>
                <p>Clean lines and staples you’ll wear on repeat.</p>
                <Link to="/" className="btn">
                  View collection
                </Link>
              </div>
              <img src={HeroImg} alt="slider hero 1" />
            </SwiperSlide>

            <SwiperSlide>
           <div className="content">
                <h4 style={{color : "white"}}>Fragrance</h4>
                <h3>
                  Scents that stay with you
                </h3>
                <p>Signature bottles and everyday favorites.</p>
                <Link to="/" className="btn">
                  Discover scents
                </Link>
              </div>
              <img src={HeroImg2} alt="slider hero 2" />
            </SwiperSlide>

            <SwiperSlide>
              <div className="content">
                <h4 style={{color : "white"}}>Fragrance</h4>
                <h3>
                  Scents that stay with you
                </h3>
                <p>Signature bottles and everyday favorites.</p>
                <Link to="/" className="btn">
                  Discover scents
                </Link>
              </div>
              <img src={HeroImg3} alt="slider hero 3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
