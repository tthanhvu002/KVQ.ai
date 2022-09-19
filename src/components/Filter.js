import './Filter.scss'
function Filter() {
    return ( 
        <div className="filter">
            <div className="checkbox-group">
                <input type="checkbox" />
                <span>English Premier League</span>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" />
                <span>Laliga</span>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" />
                <span>Bundesliga</span>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" />
                <span>Italia Seria A</span>
            </div>
        </div>
     );
}

export default Filter;