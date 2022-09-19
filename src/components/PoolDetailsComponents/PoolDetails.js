import "./PoolDetail.scss";
import MatchInfo from "../MatchInfo";
function PoolDetail({ info }) {
  return (
    <div className="pool-detail">
      
      <MatchInfo info={info}></MatchInfo>
      <div className="body">
        <h2>Pool details</h2>
        <p>
          The pool is not active yet. For the pool to go live, the minimum pool
          size must be met. (0/undefined)
        </p>
        <div className="info-row">
          <span>Title:</span>
          <p>Starting your Gaming Pool</p>
        </div>
        <div className="info-row">
          <span>Address:</span>
          <p>0x774B716ee5176f7f4eE429F62F688e0AC2e6d504</p>
        </div>
        <div className="info-row">
          <span>Description:</span>
        </div>
        <h2>Starting your Gaming Pool</h2>
        <table>
          <thead>
            <tr>
              <th>Invalid Date</th>
              <th>Max Cap</th>
              <th>Pool Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Invalid date invalid date</td>
              <td>NaN</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Play Currency</th>
              <th>Pool fee</th>
              <th>Number of Players</th>
              <th>Minimum bet size</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default PoolDetail;
