import React from 'react';
import './style.css';
import Button from '../../Utils/Button/button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Review(props) {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <div className='review'>
      <h1>{props.reviews_heading}</h1>
      <p>{props.reviews_subheading}</p>
      <Carousel
        className="video_carousel"
        responsive={responsive}
        infinite={true}
        renderButtonGroupOutside={true}
      >
        {
          props.review_videos.map((item, index) => (
            <div className="video_card">
              <video style={{ width: '90%' }} loop={true} autoPlay={true} muted>
                <source src={item} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))
        }
      </Carousel>
      <div className="reviews">
        {
          props.customers_reviews.map((item, index) => (
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
