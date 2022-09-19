import './FeaturedPool.scss'

function FeaturedPool({info}) {
    return ( 
        <div className="featured-pool">
            <div className="top">
                <div className="time">
                   {info.date} - {info.time}
                </div>
                <p>Pool Details</p>
            </div>
            <div className="body">
                <div className="team-info">
                    <img src={info.team1} alt="" />
                    <p> {info.teamName1} </p>
                </div>
                vs
                <div className="team-info">
                    <img src={info.team2} alt="" />
                    <p> {info.teamName2} </p>
                </div>
            </div>
        </div>
     );
}

export default FeaturedPool;