import "./Tutorial.scss";
import Header from "../../components/Header";
import eth from "../../img/eth.svg";
import usdt from "../../img/usdt.svg";
import wbtc from "../../img/wbtc.svg";
import kvq from "../../img/kvq-mini.svg";
import metamask from "../../img/metamask.png";
import appstore from "../../img/appstore.png";
import ggplay from "../../img/googleplay.png";
import chrome from "../../img/chrome.png";
import usdc from "../../img/usdc.svg";
function Tutorial() {
  return (
    <div className="tutorial wrapper">
      <Header></Header>
      <div className="content">
        <h1>How to play</h1>
        <p>
          Creating your own sports prediction pools couldn’t be easier. All you
          need is a Metamask wallet, whether on browser or mobile and you’re on
          your way! For detailed instructions on how to play, just head down to
          our Gitbook.
        </p>
        <div className="tutorial-list">
          <div className="tutorial-item d-flex flex-column gap-3">
            <h2>At least one of the three supported digital tokens:</h2>
            <ul>
              <li>
                <img src={eth} alt="" />
                ETH
              </li>
              <li>
                <img src={kvq} alt="" /> KVQ
              </li>
              <li>
                <img src={usdt} alt="" /> USDT
              </li>
              <li>
                <img src={usdc} alt="" /> USDC
              </li>
              <li>
                <img src={wbtc} alt="" /> WBTC
              </li>
            </ul>
          </div>
          <div className="tutorial-item-wrap">
            <div className="tutorial-item d-flex flex-column gap-3  align-items-center">
              <img src={metamask} style={{ width: "66px" }} alt="" />
              <h2>
                A metamask wallet extension
                <span>
                  installed on the Chrome browser on your desktop, or on mobile.
                </span>
              </h2>
              <div className="btn-wrap">
                <img src={appstore} alt="" />
                <img src={ggplay} alt="" />
              </div>
            </div>
            <div className="mt-3">
              <p>How to Install Metamask on Chrome Go to </p>
              <a href="http://www.metamask.io">www.metamask.io</a>
            </div>
          </div>

          <div className="tutorial-item-wrap">
            <div className="tutorial-item d-flex flex-column gap-3 align-items-center justify-content-center">
              <img style={{ width: "82px" }} src={chrome} alt="" />
              <h2>Chrome browser</h2>
            </div>
            <div className="mt-3">
              <p>How to Install Chrome Go to </p>
              <a href="www.google.com/chrome">www.google.com/chrome</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
