import PoolDetail from "../../components/PoolDetailsComponents/PoolDetails";
import YourPlays from "../../components/PoolDetailsComponents/YourPlays";
import BetForm from "../../components/PoolDetailsComponents/BetForm";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import team1 from "../../img/fb1.svg";
import team2 from "../../img/fb2.svg";
import {Row, Col, Container} from 'react-bootstrap'
function MyPool() {
  const poolDetailData = {
    team1Img: team1,
    team2Img: team2,
    team1Name: "Wolves",
    team2Name: "Tottenham",
    date: "27 Thg 8",
    time: "21:00",
  };
  const betInfo = {
    team1Img: team1,
    team2Img: team2,
    team1Name: "Wolves",
    team2Name: "Tottenham",
    date: "27 Thg 8",
    time: "21:00",
    team1Bet: '2.75',
    draw:'3.4',
    team2Bet: '2.45'
  }
  return (
    <div className="my-pool wrapper">
      <Header></Header>
      <div>
        <div className="d-flex content-container">
          <Sidebar></Sidebar>
          <div className="content">
            <Container>
                <Row>
                    <Col lg={7} sm={12}>
                        <PoolDetail info={poolDetailData}></PoolDetail>
                    </Col>
                    <Col lg={5} sm={12}>
                        <BetForm info={betInfo}></BetForm>
                    </Col>
                </Row>
                <Row>
                  <Col lg={7} sm={12}>
                  <YourPlays > </YourPlays></Col>
                </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPool;
