import "./MatchInfo.scss";
function MatchInfo({ info }) {
  return (
    <div className="match-info">
      <div className="team team-1">
        <p> {info.team1Name} </p>
        <img src={info.team1Img} alt="" />
      </div>
      <div className="time">
        <p> {info.date} </p>
        <p> {info.time} </p>
      </div>
      <div className="team team-2">
        <img src={info.team2Img} alt="" />
        <p> {info.team2Name} </p>
      </div>
    </div>
  );
}

export default MatchInfo;
