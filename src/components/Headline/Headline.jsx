import React from 'react';
import './Headline.css';

const Headline = ({headline, margin_Y}) => {
    return (
        <div className={`my-${margin_Y}`}>
            <hr className='w-[100%] bg-white h-1 mb-1 rounded-md mx-auto' />
            <button class="btn" type="button">
            <strong>{headline}</strong>
            <div id="container-stars">
                <div id="stars"></div>
            </div>

            <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
        </button>
        <hr className='w-[100%] bg-white h-1 mt-1 rounded-md mx-auto' />
        </div>
    );
};

export default Headline;