import "./HowToPlay.scss";
import HowToPlayStep from "./HowToPlayStep";
function HowToPlay() {
    const steps = [
        {
            number: 1,
            title: 'Buy Tickets',
            text:'Each ticket costs only 1 KVQ, the more you buy, the more you stand to win'
        },
        {
            number: 2,
            title: 'Wait for the Draw',
            text:'The draw takes place daily at 00:00 UTC +8'
        },
        {
            number: 3,
            title: 'Check for Prizes',
            text:'Once the draw is over, click on Claim Winnings to see if you’ve won!'
        },
    ]
  return (
    <div className="how-to-play">
      <div className="title">
        <h2>how to play</h2>
        <p className='mt-2'>
          If the digits on your tickets match the winning numbers in the correct
          order, you win a portion of the prize pool. Simple!
        </p>
      </div>
        <div className="step-wrap d-flex" style={{marginTop: '68px'}}>
            {steps.map((item, index) => {
                return (
                    <HowToPlayStep info={item}></HowToPlayStep>
                )
            })}
        </div>
    </div>
  );
}

export default HowToPlay;
