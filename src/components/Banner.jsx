import React from 'react';

function Banner({image, text}) {
    return (
        <div
            className="banner"
            style={{
                backgroundImage: `url(${image})`
            }}>
            {text && <h1 className="banner__text">{text}</h1>}
        </div>
    );
}

export default Banner;