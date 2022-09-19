import './HowToPlay.scss'

function HowToPlayStep({info}) {
    return ( 
        <div className="step d-flex flex-column gap-4">
            <div className="step-number">
                {info.number}
            </div>
        <h2> {info.title} </h2>
        <p> {info.text} </p>
        </div>
     );
}

export default HowToPlayStep;