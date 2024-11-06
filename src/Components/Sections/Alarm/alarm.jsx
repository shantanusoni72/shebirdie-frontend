import React from 'react';
import './style.css';

export default function alarm() {
    const arrowRightAnimation = () => {
        const arrowRight = document.getElementById('arrow-right');
        // Animation goes here
    }

    return (
        <div className='alarm' onMouseOver={ arrowRightAnimation }>
            <p>Black Friday Sale: Up to 40% on Birdie + $35 in FREE GIFTS | Shop Now<svg id="arrow-right" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></p>
        </div>
    )
}
