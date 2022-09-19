import './Tabs.scss'
import {AiOutlineSearch} from 'react-icons/ai'
function Tabs() {
    return ( 
        <div className="tabs-wrap d-flex justify-content-between">
            <div className="tabs d-flex align-items-center">
                <div className="tab active">
                    Joined Pool
                </div>
                <div className="tab">Created Pools</div>
            </div>
            <div className="search-wrap">
                <div className="icon">
                <AiOutlineSearch></AiOutlineSearch>
                </div>
                <input type="text" placeholder='Search the pool' />
            </div>
        </div>
     );
}

export default Tabs;