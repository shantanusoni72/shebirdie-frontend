import React from 'react';
import './style.css';
import Button from '../../Utils/Button/button';

export default function TwoColumns(props) {
  return (
    <div className='section_1'>
      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
        {
          !props.reversed ?
            <>
              <img src={props.textImage} alt="image_hehe_boi" />
              <Button className='btn-second' text="Shop Now" link="shop-now" width="70%" padding="20px" />
            </>
            :
            <>
              <Button className='btn-second' text="Shop Now" link="shop-now" width="70%" padding="20px" />
              <img src={props.textImage} alt="image_hehe_boi" />
            </>
        }
      </div>
      <div className="media">
        {
          props.isImage ?
            <img src={props.mainMedia} alt="compare" />
            :
            <video width="320" height="240" autoPlay={true}>
              <source src={props.mainMedia} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        }
      </div>
    </div>
  )
}
