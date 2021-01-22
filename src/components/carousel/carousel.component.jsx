import React from "react";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/carousel/slide1.jpg";
import Slide2 from "../../assets/carousel/slide2.jpg";
import Slide3 from "../../assets/carousel/slide3.jpg";
import Slide4 from "../../assets/carousel/slide4.jpg";
import TitleMessage from "../title/title.component";
import "./carousel.style.css";

const MyCarousel = () => {
    return (
        <div className='slider-container'>
             <TitleMessage />
            <Carousel className="carousel"
                controls={false}
                indicators
                interval={3000}
                pauseOnHover={false}
            >
                {/* <TitleMessage className="title"/> */}
                <Carousel.Item >
                    <img
                        className="d-block custom-img "
                        src={Slide1}
                        alt="first slide"
                    />
                </Carousel.Item>

                <Carousel.Item >
                    <img
                        className="d-block custom-img"
                        src={Slide2}
                        alt="second slide"
                    />
                </Carousel.Item>

                <Carousel.Item >
                    <img
                        className="d-block custom-img"
                        src={Slide3}
                        alt="third slide"
                    />
                </Carousel.Item>

            </Carousel>
            </div>
    );
}

export default MyCarousel;