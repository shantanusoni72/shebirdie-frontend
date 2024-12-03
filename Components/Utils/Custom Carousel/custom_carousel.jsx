import React from 'react';
import Carousel from 'react-multi-carousel';
import './style.css';

export default function CustomCarousel(props) {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 2000, min: 1000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 2000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

    return (
        <Carousel
            className="video_carousel banner_2"
            responsive={responsive}
            infinite={true}
            renderButtonGroupOutside={true}
            additionalTransform={50}
            itemClass="carousel-item banner_2"
        >
            <div>
                <img src={props.slide_1.image} alt={props.slide_1.text} />
                <p>{props.slide_1.text}</p>
            </div>
            <div>
                <img src={props.slide_2.image} alt={props.slide_2.text} />
                <p>{props.slide_2.text}</p>
            </div>
            <div>
                <img src={props.slide_3.image} alt={props.slide_3.text} />
                <p>{props.slide_3.text}</p>
            </div>
            <div>
                <img src={props.slide_4.image} alt={props.slide_4.text} />
                <p>{props.slide_4.text}</p>
            </div>
            <div>
                <img src={props.slide_5.image} alt={props.slide_5.text} />
                <p>{props.slide_5.text}</p>
            </div>
        </Carousel>
    )
}
