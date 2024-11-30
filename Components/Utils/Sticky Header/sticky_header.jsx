import React from 'react';
import './style.css';
import Rating from '../Rating/rating';
import Button from '../Button/button';

export default function sticky_header() {
    return (
        <div className="sticky_header disabled">
            <div className="showup">
                <h1>Birdie</h1>
                <div>
                    <Rating
                        width="24px"
                        height="24px"
                    />
                    <label>4.8</label>
                    <p>10683 Reviews</p>
                </div>
            </div>
            <div className="action">
                <h2>Save Up To 35%</h2>
                <Button text="Shop Now" width="250px" padding="15px" />
            </div>
        </div>
    )
}
