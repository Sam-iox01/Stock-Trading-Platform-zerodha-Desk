import React from 'react';

function Hero() {
    return ( <div className='container ' >
        <div className='row text-center mt-4 p-5'>
            <h2>Technology</h2>
            <h5 className='text-muted mt-3'>Sleek, modern and intuitive trading platforms</h5>
            <p className='mt-2'>Check out our {" "} <a href ='#'>investment offerings{" "}  <i className="fa fa-long-arrow-right" aria-hidden="true" /></a></p>

        </div>

    </div> );
}

export default Hero;