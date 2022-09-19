import Header from "../../components/Header";
import LotteryBanner from "../../components/LotteryComponents/LotteryBanner";
import Draw from "../../components/LotteryComponents/Draw";
import HowToPlay from "../../components/LotteryComponents/HowToPlay";
import { Row, Col } from "react-bootstrap";
import ticket from "../../img/Frame.png";
import prize from "../../img/prize.png";
import lBorder from '../../img/l-border.png'
import mBorder from '../../img/m-border.png'

import { AiOutlineInfoCircle } from "react-icons/ai";

import "./Lottery.scss";
function Lottery() {
  return (
    <div className="lottery wrapper">
      <Header></Header>
      <LotteryBanner></LotteryBanner>
      <div className="content">
        <Draw></Draw>
        <HowToPlay></HowToPlay>
        <div className="lottery-intro">
          <Row className="">
            <Col lg={6} className="lottery-col">
              <h2>How to win</h2>
              <p>
                The numbers on your ticket must match in the correct order to
                win.
              </p>
              <p>
                There are a total of seven winning numbers, from 0 to 9, on each
                ticket. To win, your numbers need to match the drawn numbers in
                the same order as the 7 winning numbers, starting from the left
                of the ticket.
              </p>
              <p>
                Ticket A : The first 4 digits match but the last 3 digits do not
                match so this ticket is entitled to the Match 4 Prize Category.
              </p>
              <p>
                Ticket B : The first digit does not match but the last 6 digits
                match so this ticket is entitled to the Match 2 Prize Category
                since the last 2 digits match the winning ticket number.
              </p>
              <p>Prize brackets do not stack.</p>
              <p>
                If you win 2nd Prize , you are not entitled to prizes in the
                lower prize category, the highest prize category will be the
                only category that qualifies for payout.
              </p>
            </Col>
            <Col lg={6} className="lottery-col">
              <img src={ticket} alt="" />
            </Col>
          </Row>
          <Row className="">
            <Col lg={6} className="lottery-col">
              <div className="adr-wrap">
                <img src={lBorder} alt="" className="l-border" />
                <img src={mBorder} alt="" className='m-border' />

                <span>
                  Average Daily Return{" "}
                  <AiOutlineInfoCircle></AiOutlineInfoCircle>
                </span>
                <h2>0.00%</h2>
              </div>
            </Col>
            <Col lg={6} className="lottery-col">
              <h2>Fund the Lottery</h2>
              <p>
                Stake KVQ in the KVQ Lucky 7 Lottery pool to earn lottery
                profits by receiving a share in the ticket sales!{" "}
              </p>
              <p>
                Stakes and profits are automatically migrated to the latest
                lottery pool daily. Staking is flexible, you may withdraw your
                whole or partial stake at any time.
              </p>
            </Col>
          </Row>
          <Row
            className="align-items-center "
            style={{ paddingBottom: "76px" }}
          >
            <Col lg={6} className="lottery-col">
              <h2>Prize Struture</h2>
              <ul>
                <li>
                  <p>
                    The prize pool is fixed at 2 million KVQ for each draw and
                    distributed as follows:
                  </p>
                </li>
                <li>
                  <span>1st prize - 40% (800K KVQ) </span>
                  <p>
                    {" "}
                    is divided equally among all tickets that match all 7 digits
                    in the exact order
                  </p>
                </li>
                <li>
                  <span>2nd prize - 25% (500K KVQ) </span>
                  <p>
                    {" "}
                    is divided equally among all tickets that match the first 6
                    digits of the winning number, in the exact order.
                  </p>
                </li>
                <li>
                  <span>3rd Prize - 15% (300K KVQ)</span>
                  <p>
                    is divided equally among all tickets that match the first 5
                    digits of the winning number, in the exact order.
                  </p>
                </li>
                <li>
                  <span>Match4 - 10% (200K KVQ)</span>
                  <p>
                    is divided equally among all tickets that match the first 4
                    digits of the winning number, in the exact order.
                  </p>
                </li>
                <li>
                  <span>Matcspan - 5% (100K KVQ)</span>
                  <p>
                    {" "}
                    is divided equally among all tickets that match the first 3
                    digits of the winning number, in the exact order.
                  </p>
                </li>
                <li>
                  <span>Match2 - 3% (60K KVQ)</span>
                  <p>
                    {" "}
                    is divded equally among all tickets that match the first 2
                    digits, or the last 2 digits of the winning number, in the
                    exact order. If your ticket matches both first and last 2
                    digits in the right order, you win 2 shares.
                  </p>
                </li>
                <li>
                  <span>Match1 - 2% (40K KVQ)</span>
                  <p>
                    {" "}
                    is divided equally among all tickets that match the first or
                    last digit of of the winning number. If your ticket matches
                    both the first and last digit, you win 2 shares.
                  </p>
                </li>
                <li>
                  <p>
                    * Matching order of lottery numbers has to follow Left to
                    Right order except for Match 2 and Match 1 Prize category.
                  </p>
                </li>
              </ul>
            </Col>
            <Col lg={6} className="d-flex justify-content-center">
              <img src={prize} alt="" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Lottery;
