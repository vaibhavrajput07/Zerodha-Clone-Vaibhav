import React from 'react';
function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/largestBroker.svg" alt="" />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>2+ million zeroda clients contribute to over 15% of all retail order volumesin india daily by trading and investing in</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Future & Option</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stock & IPO</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and government</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/pressLogos.png" alt="" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards; 