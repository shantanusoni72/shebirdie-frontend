import React from 'react';
import './style.css';

export default function banner_2(props) {
  return (
    <div className='banner_2'>
      <h1>Always stay ready and carry confidence with you wherever you go...</h1>
      <p>She’s Birdie is small but extremely loud and helps to deter attackers, allowing you to get away safely. The piercingly loud alarm can capture someone's attention even from a considerable distance.</p>
      <div className='cards'>
        <div className='card_2'>
            <img src={props.slide_1.image} alt={props.slide_1.text} />
            <p>{props.slide_1.text}</p>
        </div>
        <div className='card_2'>
            <img src={props.slide_2.image} alt={props.slide_2.text} />
            <p>{props.slide_2.text}</p>
        </div>
        <div className='card_2'>
            <img src={props.slide_3.image} alt={props.slide_3.text} />
            <p>{props.slide_3.text}</p>
        </div>
        <div className='card_2'>
            <img src={props.slide_4.image} alt={props.slide_4.text} />
            <p>{props.slide_4.text}</p>
        </div>
        <div className='card_2'>
            <img src={props.slide_5.image} alt={props.slide_5.text} />
            <p>{props.slide_5.text}</p>
        </div>
      </div>
    </div>
  )
}
