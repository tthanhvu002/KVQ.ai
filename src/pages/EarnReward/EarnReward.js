import Header from "../../components/Header";
import './EarnReward.scss'
import { Row, Col } from "react-bootstrap";
function EarnReward() {
  return (
    <div className="earn-reward wrapper">
      <Header></Header>
      <div className="content">
        <Row>
          <Col lg={6}>
            <div className="approve">
              <div className="approve-info">
                <h2>Earn Rewards</h2>
                <p>
                  Stake KVQ to earn a 0.5% share of all prediction pools in the
                  tokens being used for play. From USDT to ETH, staking can be
                  your biggest win yet!
                  <br />
                  <br />
                  0.5% of all pools are distributed to KVQ stakers and are
                  received based on the various tokens in play.
                </p>
              </div>
              <div className="approve-info">
                <h2>Stake Now</h2>
                <p>
                  Input Amount of KVQ to stake and start earning instantly!{" "}
                </p>
                <div className="input-wrap">
                  <input type="number" placeholder="0" />
                  KVQ
                </div>
              </div>
              <div className="approve-btn">Approve KVQ</div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="earn-info">
              <ul>
                <li>
                  <p>Total Staked:</p>
                  <span>0 KVQ</span>
                </li>
                <li>
                  <p>Your Current KVQ:</p>
                  <span>0 KVQ (0.00%)</span>
                </li>
                <li>
                  <p>Your Earned KVQ:</p>
                  <span>0 KVQ</span>
                </li>
                <li>
                  <p>Your Earn ETH:</p>
                  <span>0 ETH</span>
                </li>
                <li>
                  <p>Your Earned USDT:</p>
                  <span>0 USDT</span>
                </li>
                <li>
                  <p>Your Earned USDC</p>
                  <span>USDC</span>
                </li>
                <li>
                  <p>Your Earned wBTC</p>
                  <span>0 wBTC</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default EarnReward;
