import "./Back.scss";
import { Outlet, Link } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";
function Back({ info }) {
  return (
    <Link to="/">
      <div className="back">
        <AiOutlineArrowLeft></AiOutlineArrowLeft>
        <div className="team">
          {info.team1Name}-{info.team2Name}
        </div>
      </div>
    </Link>
  );
}

export default Back;
