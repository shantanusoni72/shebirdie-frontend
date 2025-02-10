import React, { useState, useEffect } from 'react';
import './style.css';

export default function CartCounter(props) {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        if(counter <= 0) {
            props.removeProductByIndex(props.index);
        }
    }, [counter])

    return (
        <div className="cart_product_card_quantity_tracker">
            <div className="quantity_tracker">
                <svg onClick={() => setCounter(counter - 1)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-440v-80h560v80H200Z" /></svg>
                <p>{counter}</p>
                <svg onClick={() => setCounter(counter + 1)} xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
            </div>
            <div className="bin">
                <svg onClick={() => props.removeProductByIndex(props.index)} xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 16 16" aria-hidden="true" focusable="false" class="icon icon-remove">
                    <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                    <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
    )
}
