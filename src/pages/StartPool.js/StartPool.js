import StartPoolForm from "../../components/StartPoolComponents/StartPoolForm";
import Header from "../../components/Header";
import Back from "../../components/Back";
import Sidebar from "../../components/Sidebar";
import team1 from "../../img/fb1.svg";
import team2 from "../../img/fb2.svg";
function StartPool() {
  const betInfo = {
    team1Img: team1,
    team2Img: team2,
    team1Name: "Wolves",
    team2Name: "Tottenham",
    date: "27 Thg 8",
    time: "21:00",
    team1Bet: "2.75",
    draw: "3.4",
    team2Bet: "2.45",
  };

  return (
    <div className="start-pool wrapper">
      <Header></Header>
      <div>
        <div className="d-flex content-container">
          <Sidebar></Sidebar>
          <div className="content">
            <Back info={betInfo}></Back>
            <StartPoolForm info={betInfo}></StartPoolForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPool;
