import './Banner.scss'
import Slider from './Slider';
function Banner() {
    return ( 
        <div className="banner">
            <Slider></Slider>
            <div className="banner-content">
                <h1>KVQ.AI</h1>
                <p>The world’s first smart contract-based, sports betting pool creator.</p>
                <button>Let's get started</button>
            </div>
        </div>
    );
}

export default Banner;