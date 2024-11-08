import React from 'react';
import './style.css';

export default function bundles(props) {
  return (
    <div className='bundle'>
      <div className="bundle_heading">
        {props.heading}
      </div>
      <div className="bundle_body">
        <img src={props.image} alt="product" />
        <h2>{props.amount}</h2>
        <div className="pricing">
          <p className='first'>{props.price_before}</p>
          <p className='second'>{props.price_after}</p>
        </div>
      </div>
      <div className="bundle_saving">
        {props.saving}
      </div>
    </div>
  )
}
