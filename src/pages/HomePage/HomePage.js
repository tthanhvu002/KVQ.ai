import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Filter from "../../components//Filter";
import Title from "../../components/Title";
import Banner from "../../components/HomePageComponents/Banner";
import Slider from "../../components/HomePageComponents/Slider";
import FeaturedPools from "../../components/HomePageComponents/FeaturedPools";
import OtherPools from "../../components/HomePageComponents/OtherPools";
import "./HomePage.scss";
function HomePage() {
  return (
    <div className="homepage wrapper">
      <Header></Header>
      <div>
        <div className="d-flex content-container">
          <Sidebar></Sidebar>
          <Filter></Filter>
          <div className="content">
          <Banner></Banner>
            <Title>Featured Pools</Title>
            <FeaturedPools></FeaturedPools>
            <Title>Other Pools</Title>
            <OtherPools></OtherPools>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
