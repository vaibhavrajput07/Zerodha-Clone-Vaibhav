import React from 'react';

function Brokerage() {
    return (
        <div className="container">

            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-8 p-4">
                    <a href="" style={{ textDecoration: "none" }}><h3 className='fs-5'>Brokerage</h3></a>
                    <ul className='text-start text-muted mt-5' style={{lineHeight:"2"}}>
                        <li>Securities/Commodities transaction tax</li>

                        <li>Tax by the government when transacting on the exchanges.</li>

                        <li>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. </li>

                        <li>Transaction/Turnover Charges</li>

                        <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>

                        <li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016.</li>

                        <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>

                        <li>
                        For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                        ₹500 + GST as yearly account maintenance charges (AMC) charges.
                        </li>
                    </ul>
                </div>
                <div className="col-4 p-4">
                    <a href="" style={{ textDecoration: "none" }}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;