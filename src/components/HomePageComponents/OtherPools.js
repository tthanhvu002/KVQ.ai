import team1 from "../../img/fb1.svg";
import team2 from "../../img/fb2.svg";
import league from "../../img/england.svg";
import OtherPool from "./OtherPool";

function OtherPools() {
  const data = [
    {
      team1Img: team1,
      team2Img: team2,
      league: league,
      leagueName: "Premier League",
      team1Name: "Wolves",
      team2Name: "Tottenham",
      scoreTeam1: 1,
      scoreTeam2: 2,
      maxCap: 180,
      poolSize: 100,
      maxPoolSize: 180,
      poolFee: 2,
      minBetSize: 80,
      time: "21:00 PM",
      date: "22 Aug 2022",
      split: "100:0",
    },
    {
      team1Img: team1,
      team2Img: team2,
      league: league,
      leagueName: "Premier League",
      time: "21:00 PM",
      date: "22 Aug 2022",
      team1Name: "Wolves",
      team2Name: "Tottenham",
      scoreTeam1: 1,
      scoreTeam2: 2,
      maxCap: 180,
      poolSize: 100,
      maxPoolSize: 180,
      poolFee: 2,
      minBetSize: 80,
      split: "100:0",
    },
    {
      team1Img: team1,
      team2Img: team2,
      league: league,
      team1Name: "Wolves",
      leagueName: "Premier League",
      time: "21:00 PM",
      date: "22 Aug 2022",
      team2Name: "Tottenham",
      scoreTeam1: 1,
      scoreTeam2: 2,
      maxCap: 180,
      poolSize: 100,
      maxPoolSize: 180,
      poolFee: 2,
      minBetSize: 80,
      split: "100:0",
    },
    {
      team1Img: team1,
      team2Img: team2,
      league: league,
      leagueName: "Premier League",

      team1Name: "Wolves",
      team2Name: "Tottenham",
      scoreTeam1: 1,
      scoreTeam2: 2,
      maxCap: 180,
      poolSize: 100,
      maxPoolSize: 180,
      poolFee: 2,
      minBetSize: 80,
      split: "100:0",
    },
    {
      team1Img: team1,
      team2Img: team2,
      leagueName: "Premier League",

      league: league,
      team1Name: "Wolves",
      team2Name: "Tottenham",
      scoreTeam1: 1,
      scoreTeam2: 2,
      maxCap: 180,
      poolSize: 100,
      maxPoolSize: 180,
      poolFee: 2,
      minBetSize: 80,
      split: "100:0",
    },
  ];
  return (
    <div className="other-pools d-flex flex-column gap-3">
      {data.map((item, index) => {
        return <OtherPool key={index} info={item}></OtherPool>;
      })}
    </div>
  );
}

export default OtherPools;
