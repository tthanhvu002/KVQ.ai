import Carousel from "react-bootstrap/Carousel";
import "./Slider.scss";
import banner from '../../img/banner.png'
function Slider() {
  return (
    <div className="slider">
      <Carousel controls={false}>
        <Carousel.Item>
            <img src={banner} alt="" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={banner} alt="" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={banner} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
