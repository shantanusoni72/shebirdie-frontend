import React from 'react';
import './style.css';
import Button from '../../Utils/Button/button';

export default function review() {
  const reviews = [
    {
        'review': '“As someone who has been followed/stalked twice (once in a grocery store and once on a run) I have a sense of returned safety knowing I have my Birdie - here’s praying we all have it and ever need it.”',
        'user': 'Ashley B.'
    },
    {
        'review': '“Got one of my kiddo going to college in downtown Atlanta and also myself and my 12 year old daughter. They are LOUD! Hope none of us need to use it, but glad to have them.”',
        'user': 'Courtney H.'
    },
    {
        'review': '“Love the coconut color and it’s loud! Whoo hoo! Hope to never use it but I’m glad I have it. Bought 3 more for my daughters and a friend.”',
        'user': 'Donna W.'
    },
  ]

    return (
    <div className='review'>
      <h1>Trusted By 3,500,000+ Women</h1>
      <p>Hear what they have to say about Birdie!</p>
      <div className="reviews">
        {
            reviews.map((item, index) => (
                <div className="review_card">
                    <h2>{item.review}</h2>
                    <p>{item.user} | Verified Buyer</p>
                </div>
            ))
        }
      </div>
      <Button text='Shop Now' />
    </div>
  )
}
