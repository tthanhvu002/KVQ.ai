import { BsTwitter } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import logo from "../img/kvq-logo.svg";
import { Outlet, Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import "./Header.scss";

function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (open == true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <header className="header">
      <div className="header-top">
        <div className="cal">
          <input type="text" placeholder="0.00" />
          <select name="" id="">
            <option value="cal">CAL</option>
          </select>
        </div>
        <div className="buy-btn">buy kvq</div>
        <div className="connect-btn">Connect Metamask</div>
        <div className="social-wrap">
          <BsTwitter className="tw"></BsTwitter>
          <FaRedditAlien className="rd"></FaRedditAlien>
        </div>
      </div>
      <nav>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <ul>
          <li>
            <a onClick={handleOpen} href="#">
              Sports <FiChevronDown></FiChevronDown>
            </a>
            <ul className={`dropdown ${open === true ? "active" : ""}`}>
              <li> lorem ipsum </li>
              <li> lorem ipsum </li>
              <li> lorem ipsum </li>
              <li> lorem ipsum </li>
            </ul>
          </li>
          <li>
            <Link to="/lottery"> Lottery</Link>
          </li>
          <li>
            <Link to="/tutorial">Tutorials</Link>
          </li>
          <li>
            <Link to="/earnreward">Earn Rewards</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/mypool">My Pools</Link>{" "}
          </li>
          <li>
            <Link to="/mypage">My Page</Link>
          </li>
        </ul>
        <div className="btns-wrap">
          <button>
            <Link to="/startpool">Start Pool</Link>
          </button>
          <button>Earn Rewards</button>
          <button>Buy KVQ Token</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
