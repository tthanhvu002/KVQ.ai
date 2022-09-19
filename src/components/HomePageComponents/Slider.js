import Carousel from "react-bootstrap/Carousel";
import Banner from "./Banner";
import "./Slider.scss";

function Slider() {
  return (
    <div className="slider">
      <Carousel controls={false}>
        <Carousel.Item>
          <Banner></Banner>
        </Carousel.Item>
        <Carousel.Item>
          <Banner></Banner>
        </Carousel.Item>
        <Carousel.Item>
          <Banner></Banner>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
