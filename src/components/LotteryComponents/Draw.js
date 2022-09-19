import './Draw.scss'
function Draw() {
    return ( 
        <div className="draw">
            <p className='text-center mb-5'>Until the draw</p>
            <div className="board">
                <div className="top d-flex justify-content-between ">
                    <p>LAST DRAW</p>
                    <p>#0 | Draw:</p>
                </div>

                <h1 className='mt-5' style={{marginBottom: '72px'}}>0</h1>
                <p className='text-center'> <a href="#">Detail</a> </p>
            </div>
        </div>
     );
}

export default Draw;