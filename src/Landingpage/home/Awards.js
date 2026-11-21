import React from 'react';

function Awards() {
    return (
        <div className="container mt-5 mb-5" >
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/images/largestBroker.svg" alt="Largest Broker Award"></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5">2+ million zerodha clients contribute to over 15% of all retail order volume in India.
                        We are the largest stock broker in India by active clients and daily turnover.
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodities derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stack & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and debentures</li>
                            </ul>
                        </div>
                        <img className="mt-5" style={{ width: '90%' }} src="media/images/pressLogos.png" alt="Awards"></img>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Awards;