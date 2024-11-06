import React from 'react';
import './style.css';

import Video from '../../../assets/birdie_1.mp4';
import Button from '../../Utils/Button/button';

export default function section_1(props) {
  return (
    <div className='section_1'>
      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
        {/* <img src={Section_1_Image} alt="image_hehe_boi" /> */}
        <Button text="Shop Now" link="shop-now" />
      </div>
      <div className="media">
        {
          props.isImage ?
            <img src="https://www.shesbirdie.com/cdn/shop/files/birdie-chart-new.png" alt="compare" />
            :
            <video width="320" height="240" autoPlay>
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        }
      </div>
    </div>
  )
}
