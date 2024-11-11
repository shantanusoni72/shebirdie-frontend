import React from 'react';
import './style.css';
import Button from '../../Utils/Button/button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Review(props) {
  const videos = [
    'https://cdn.shopify.com/videos/c/o/v/caadf58e36d04838ae38ca2c51516ec9.mp4',
    'https://cdn.shopify.com/videos/c/o/v/9fa1bee2122743839d14ac2d6f8686a6.mp4',
    'https://cdn.shopify.com/videos/c/o/v/0ffe3b895793426884e24edbcbfde5f0.mp4',
    'https://cdn.shopify.com/videos/c/o/v/95b6a9794ac94dad8bf177c5ae7c8558.mp4',
    'https://cdn.shopify.com/videos/c/o/v/fc139ed329964ad9827177378d628bb6.mp4',
    'https://cdn.shopify.com/videos/c/o/v/0d6ef19caac34b07a48ddad059a2ce3d.mp4'
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='review'>
      <h1>{props.reviews_heading}</h1>
      <p>{props.reviews_subheading}</p>
      <Carousel className="video_carousel" responsive={responsive} infinite={true}>
        {
          videos.map((item, index) => (
            <div className="video_card">
              <video style={{width:'90%'}} loop={true} autoPlay={true} muted>
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
