import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Filter from "../../components/Filter";
import Pool from "../../components/MyPoolComponents/Pool";
import Tabs from "../../components/MyPoolComponents/Tabs";
import team1 from "../../img/fb1.svg";
import team2 from "../../img/fb2.svg";
import './MyPool.scss'
function MyPool() {
    const poolInfo = {
        team1Img: team1,
        team2Img: team2,
        team1Name: "Wolves",
        team2Name: "Tottenham",
        date: "20 Aug 2022",
        time: "18:30 +07:00",
        status: 'win',
        address: '0x9D72d03F8994392dAa5CB1602920cA94909Ea49E',
        win: 'Tottenham'
      };
    
    return ( 
        <div className="my-pool wrapper">
            <Header></Header>
            <div>
                <div className="d-flex content-container">
                    <Sidebar></Sidebar>
                    <div className="content">
                        <Tabs></Tabs>
                        <div className="title-wrap d-flex justify-content-between mt-3">
                            <h2>New Pools</h2>
                            <div className="d-flex align-items-center gap-3">
                                <div className="d-flex align-items-center gap-2">
                                    <input type="checkbox" />
                                    <p>Only Claimable</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <span>Sort by:</span>
                                    <select name="" id="">
                                        <option value="">Newest</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                        <Pool info={poolInfo}></Pool>
                        <h2>Ongoing</h2>
                        <Pool info={poolInfo}></Pool>

                        <Pool info={poolInfo}></Pool>
                        <h2>Ended</h2>
                        <Pool info={poolInfo}></Pool>

                        <Pool info={poolInfo}></Pool>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MyPool;