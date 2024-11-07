import React from 'react';
import './style.css';

import Button from '../../Utils/Button/button';

export default function section_1(props) {
  return (
    <div className='section_1'>
      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
      <img src={props.textImage} alt="image_hehe_boi" />
        <Button text="Shop Now" link="shop-now" />
      </div>
      <div className="media">
        {
          props.isImage ?
            <img src={props.mainMedia} alt="compare" />
            :
            <video width="320" height="240" autoPlay>
              <source src={props.mainMedia} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        }
      </div>
    </div>
  )
}
