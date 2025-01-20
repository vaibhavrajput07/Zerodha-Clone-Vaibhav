import React from 'react';
function LeftSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-6 p-3 p-5">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={tryDemo}>Try Demo →</a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More →</a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}><img src="media/googlePlayBadge.svg"/></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src="media/appstoreBadge.svg"/></a>
                    </div>               
                </div>
            </div>
        </div>
     );
}

export default LeftSection;