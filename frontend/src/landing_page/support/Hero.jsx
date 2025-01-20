import React from 'react';
function Hero() {
    return (
        <section className="container-fluid" id='supportHero'>
            <div className="p-5  mb-5" id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href="" style={{textDecoration:"underline", fontSize:"18px"}}>Track Tickets</a>
            </div>
            <div className=" row p-5">
                <div className="col-6 p-5 ms-5">
                    <h1 className='fs-3 mb-5'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mb-2' type="text" placeholder='Eg. how do I activate F&O' /><br />
                    <a href="" style={{marginRight:"35px", textDecoration:"underline", lineHeight:"2"}}>Track account opening   </a>
                    <a href="" style={{marginRight:"35px", textDecoration:"underline", lineHeight:"2"}}>Track segment activation</a> 
                    <a href="" style={{marginRight:"35px", textDecoration:"underline", lineHeight:"2"}}>Intraday margins </a>
                    <a href="" style={{marginRight:"35px", textDecoration:"underline", lineHeight:"2"}}>Kite user manual</a>
                </div>
                <div className="col-5 p-5 ">
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href=""style={{lineHeight:"2"}}>Offer for sale (OFS) - January 2025   </a></li>
                        <li><a href=""style={{lineHeight:"2"}}>Current Takeovers and Delisting - January 2025</a></li>
                    </ol> 
                </div>
            </div>
        </section>
    );
}

export default Hero;