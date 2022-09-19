import "./YourPlay.scss";
import team1 from "../../img/fb1.svg";
import team2 from "../../img/fb2.svg";
import { Row, Col } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";
function YourPlays() {
  const yourPlaysData = [
    {
      time: "13:35 +07:00",
      date: "19 Aug 2022",
      teamName: "Tottenham",
      teamImg: team1,
      amount: "1 ETH",
      url: "#",
    },
    {
      time: "13:35 +07:00",
      date: "19 Aug 2022",
      teamName: "Tottenham",
      teamImg: team1,
      amount: "1 ETH",
      url: "#",
    },
  ];
  return (
    <div className="your-plays">
      <h2>Your Plays</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Team</th>
            <th>Amount</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {yourPlaysData.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="time">
                    <p> {item.date} </p>
                    <span> {item.time} </span>
                  </div>
                </td>
                <td>
                  <div className="team">
                    <p>Tottenham</p>
                    <img src={item.teamImg} alt="" />
                  </div>
                </td>
                <td> {item.amount}</td>
                <td>
                  <BiLinkExternal color="#939292"></BiLinkExternal>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default YourPlays;
