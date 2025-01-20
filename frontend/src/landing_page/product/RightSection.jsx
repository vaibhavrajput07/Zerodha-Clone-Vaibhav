import React from 'react';
function RightSection({
    imageUrl,
    productName,
    productDescription,
    learnMore
}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 " style={{marginTop:"100px"}}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore}>Learn more →</a>
                </div>
                <div className="col-6 p-5">
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;