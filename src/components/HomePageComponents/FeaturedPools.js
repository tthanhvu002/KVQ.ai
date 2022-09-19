import team1 from "../../img/fb1.svg";
import team2 from "../../img/fb2.svg";
import FeaturedPool from "./FeaturedPool";
import "./FeaturedPools.scss";
function FeaturedPools() {
  const data = [
    {
      date: "22 Aug 2022",
      time: "21:00",
      team1: team1,
      team2: team2,
      teamName1: "Wolves",
      teamName2: "Tottenham",
      maxCap: "180 USDT",
      poolSize: "100 USDT",
    },
    {
      date: "22 Aug 2022",
      time: "21:00",
      team1: team1,
      team2: team2,
      teamName1: "Wolves",
      teamName2: "Tottenham",
      maxCap: "180 USDT",
      poolSize: "100 USDT",
    },
    {
      date: "22 Aug 2022",
      time: "21:00",
      team1: team1,
      team2: team2,
      teamName1: "Wolves",
      teamName2: "Tottenham",
      maxCap: "180 USDT",
      poolSize: "100 USDT",
    },
  ];
  return (
    <div className="featured-pools">
      {data.map((item, index) => {
        return <FeaturedPool info={item} key={index}></FeaturedPool>;
      })}
    </div>
  );
}

export default FeaturedPools;
