import React from 'react';

function Hero() {
    return (
    <div className="container p-5 text-center">
        <div className = "row">
            <img src="media/images/homehero.png" alt = "Hero image" className='mb-5'></img>
            <h1 className = "mt-5">Invest in everything</h1>
            <p>Start your investment journey today with our easy-to-use platform.</p>
            <button className="p-2 btn btn-primary fs-5 mb-5"style = {{width: '20%', margin: '0 auto'}}>Sign Up Now!</button>
        </div>
        

    </div>); 
}

export default Hero;