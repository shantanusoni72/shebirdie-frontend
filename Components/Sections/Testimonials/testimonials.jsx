import React from 'react';
import './style.css';
import Rating from '../../Utils/Rating/rating';

export default function testimonials(props) {
    return (
        <div className='testimonials'>
            <div className="rating">
                <Rating 
                    className='ratingOption'
                    width='28px'
                    height='28px'  
                />
                <p>{props.testimonialText} Reviews</p>
            </div>
            <div className="testimonial_group">
                {props.testimonialDetails.map((item, index) => (
                    <div className="testimonial_card" key={index}>
                        <div className="testimonial_card_top">
                            <div className="testimonial_card_top_image">
                                <img src={item.image} alt='user' />
                            </div>
                            <div className="testimonial_card_top_text">
                                <h1>{item.title}</h1>
                                <Rating 
                                    className='ratingOption'
                                    width='18px'
                                    height='18px' 
                                />
                                <p>{item.date}</p>
                                <h2>{item.description}</h2>
                                <p>Item type: <span>{item.item_type}</span></p>
                            </div>
                        </div>
                        <div className="testimonial_card_bottom">
                            <p>She's Birdie replied:</p>
                            <h2>{item.reply}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
