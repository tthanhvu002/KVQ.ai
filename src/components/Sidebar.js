import "./Sidebar.scss";
import hot from "../img/hot.svg";
import trophy from "../img/trophy.svg";
import soccer from "../img/soccer.svg";
import game from "../img/game.svg";
import bb from "../img/bb.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="active">
          <a href="#">
            <img src={hot} alt="" />
          </a>
          <p>Hottest Pool</p>
        </li>
        <li>
          <a href="#">
            <img src={trophy} alt="" />
            <p>All matches</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={soccer} alt="" />
            <p>Soccer</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={game} alt="" />
            <p>Esports</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={bb} alt="" />
            <p>NBA</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
