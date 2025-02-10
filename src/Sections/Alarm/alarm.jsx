import React from 'react';
import './style.css';

export default function alarm(props) {
    return (
        <div className='alarm'>
            <p>{props.text}<svg id="arrow-right" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 -960 960 960"  fill="currentColor"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></p>
        </div>
    )
}
