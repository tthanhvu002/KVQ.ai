import './BetForm.scss'
function BetForm({info}) {
    return ( 
        <div className="bet-form">
            <div className="top d-flex align-items-center justify-content-center" >
                <div className="team d-flex align-items-center">
                    <p> {info.team1Name} </p>
                    <img src={info.team1Img} alt="" />
                </div>
                VS
                <div className="team d-flex align-items-center">
                    <img src={info.team2Img} alt="" />
                    <p> {info.team2Name} </p>
                </div>
            </div>
            <div className="bet-options">
                <div>
                    <p> {info.team1Name} </p>
                    <p> {info.team1Bet} </p>
                </div>
                <div className='active'>
                    <p> Draw </p>
                    <p> {info.draw} </p>
                </div>
                <div>
                    <p> {info.team2Name} </p>
                    <p> {info.team2Bet} </p>
                </div>
            </div>
            <p>Input number. Minimum bet is: </p>
            <input type="number" placeholder='4'/>
            <button className="approve-btn">Approve Token</button>
        </div>
     );
}

export default BetForm;