import "./OtherPool.scss";
function OtherPool({ info }) {
  return (
    <div className="other-pool">
      <div className="top">
        <div className="league">
          <img src={info.league} alt="" />
          <p>{info.leagueName}</p>
          <div className="dot"></div>
        </div>
        <button className="view-btn">View</button>
      </div>
      <div className="body">
        <div className="match-info">
          <div className="match-time">
            <p> {info.time} PM </p>
            <p> {info.date} </p>
          </div>
          <div className="match-result">
            <div className="team">
              <p> {info.scoreTeam1} </p>
              <img src={info.team1Img} alt="" />
            </div>
            <div className="team">
              <p> {info.scoreTeam2}</p>
              <img src={info.team2Img} alt="" />
            </div>
          </div>
        </div>
        <ul className="bet-info">
          <li>
            <p>Max Cap</p>
            <span>{info.maxCap} USDT</span>
          </li>
          <li>
            <p>Pool Size</p>
            <span> {info.poolSize} USDT</span>
          </li>
          <li>
            <p>Max Pool Size</p>
            <span> {info.maxPoolSize} USDT</span>
          </li>
          <li>
            <p>Pool fee</p>
            <span> {info.poolFee} %</span>
          </li>
          <li>
            <p>Min bet</p>
            <span> {info.minBetSize} USDT</span>
          </li>
          <li>
            <p>Split</p>
            <span> {info.split} </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OtherPool;
