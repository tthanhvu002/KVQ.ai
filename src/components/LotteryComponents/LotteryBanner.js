import "./LotteryBanner.scss";
import seven from "../../img/7.png";
import ticket from "../../img/ticket.png";
import { Row, Col } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
function LotteryBanner() {
  return (
    <div className="lottery-banner">
      <Row>
        <Col lg={6}>
          <div className="lottery-banner-content">
            <div className="d-flex flex-column gap-3">
              <h3>KVQ Lucky Seven Lottery</h3>
              <h2>2,000,000 KVQ</h2>
              <p>to be won!</p>
            </div>
            <div className="mt-5 d-flex flex-column gap-3">
              <p>Two ways to profit</p>
              <ul>
                <li className="d-flex align-items-center gap-3">
                  <img src={ticket} alt="" />
                  <p>Fund the lottery and share in the ticket sales</p>
                  <BsChevronRight></BsChevronRight>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <img  src={ticket} alt="" />
                  <p>Buy tickets and stand to win 2 million KVQ </p>
                  <BsChevronRight></BsChevronRight>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col lg={6}>
            <img className='img-res' src={seven} alt="" />
        </Col>
      </Row>
    </div>
  );
}

export default LotteryBanner;
