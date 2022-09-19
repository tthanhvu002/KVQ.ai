import './Title.scss'
function Title({children}) {
    return ( 
        <div className="title">
            <div className="line"></div>
            <p> {children} </p>
        </div>
     );
}

export default Title;