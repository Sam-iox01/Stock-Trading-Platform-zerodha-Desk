import React from 'react';

function Education() {
    return (
        <div className='container  '>
            <div className='row  '>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width:"70%"}}>
                    </img>
                </div>
                <div className='col-6 mb-5'>
                    <h1 className='fs-2' >Free and open market education</h1>
                    <p className = 'mt-4'>Varsity, the largest online stock market education book in the world 
                        <br></br>covering everythiing from the basics to advanced trading.
                    </p>
                    <a href='#' style = {{textDecoration:"none"}}>Verasity{" "}
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                    </a>
                    
                    <p className = 'mt-5'>TradingQ&A, the most active trading and investment community in 
                        <br></br>India for all your market related queries.
                    </p>
                    <a href='#' style = {{textDecoration:"none"}}>TradingQ&A{" "}
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                    </a>
                </div>
                
            </div>
        </div>
    ); 
}

export default Education;