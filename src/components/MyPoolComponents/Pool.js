import "./Pool.scss";
import { BiLinkExternal } from "react-icons/bi";
function Pool({ info }) {
  return (
    <div className="pool">
      <div className="top d-flex justify-content-between align-items-center">
        <div className="btn ">
          Starting your Gaming Pool
          <BiLinkExternal></BiLinkExternal>
        </div>
        <div className={`status ${info.status === 'win' ? 'win' : 'lose'}`}>
            {info.status == 'win' ? 'Win' : 'Lose'}
        </div>
      </div>
      <div className="d-flex pt-3 pool-body">
        <div className="match-info d-flex align-items-center gap-3">
            <div className="team">
                <img src={info.team1Img} alt="" />
                <p> {info.team1Name} </p>
            </div>
            2  -  3
            <div className="team">
                <img src={info.team2Img} alt="" />
                <p> {info.team2Name} </p>
            </div>
        </div>

        <div className="bet-info">
          <label>You have made the bet in this pool</label>
          <table>
            <thead>
              <tr>
                <th>Result</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {info.win} </td>
                <td> {info.address} </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th> {info.date} </th>
                <th>Max cap</th>
                <th>Pool size</th>
                <th>Pool fee</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td style={{color: '#F6BE4B', fontWeight:'600'}}> {info.time} </td>
                <td style={{color: '#F6BE4B', fontWeight:'600'}}> {info.maxCap} KVQ</td>
                <td style={{color: '#F6BE4B', fontWeight:'600'}}> {info.poolSize} CAL</td>
                <td style={{color: '#F6BE4B', fontWeight:'600'}}> {info.poolFee}% </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Pool;
