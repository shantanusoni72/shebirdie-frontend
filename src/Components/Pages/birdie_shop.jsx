import React from 'react'
import Hero from '../Sections/Hero/hero';
import Banner from '../Sections/Banner/banner';
import Banner2 from '../Sections/Banner 2/banner_2';
import TwoColumns from '../Sections/Two Columns/two_columns.jsx';
import Text_Image_1 from '../../assets/section-1-image.png';
import Text_Image_2 from '../../assets/travel_leisure.png';
import Section_1_Image from '../../assets/birdie-chart-new.png';
import Section_1_Video from '../../assets/birdie_1.mp4';
import Review from '../Sections/Review/review';
import Testimonials from '../Sections/Testimonials/testimonials';
import * as Interface from '../interface.js';

export default function birdie_shop() {
    return (
        <div className='birdie_shop'>
            <Hero />
            <Banner
                title='1 in 3 women in the U.S. is assaulted in her lifetime.'
                paragraph='This is personal because it includes 1 in 3 of our daughters, sisters, and friends.'
                whichCards={'none'}
            />
            <TwoColumns
                title="When in Doubt, Pull It"
                paragraph="Feeling uncomfortable? Trust your gut. Pull the Top to start the LOUD siren and flashing strobe light, bringing all eyes on you. When you feel safe, reinsert the Top to deactivate the alarm."
                isImage={false}
                textImage={Text_Image_1}
                mainMedia={Section_1_Video}
            />
            <Banner
                title='Easy to Use, Easy to Carry'
                paragraph='Young or old, at home or on the road, Birdie is the easiest way to keep yourself safe'
                whichCards={'bigCards'}
            />
            <Banner2 />
            <TwoColumns
                title="How we Stack Up"
                paragraph="Birdie takes the lead when stacked against other self-defense tools, offering ease of use, a non-violent approach, and more."
                isImage={true}
                textImage={Text_Image_2}
                mainMedia={Section_1_Image}
            />
            <Review
                reviews_heading={Interface.reviews_heading}
                reviews_subheading={Interface.reviews_subheading}
                customers_reviews={Interface.reviews} 
            />
            <Banner
                title='Excited to Give'
                paragraph='Your purchase supports our passionate partners who work for the safety and empowerment of women. They’re writing legislative reform, educating students on their Title IX rights, providing shelter and services to survivors and families, and creating powerful opportunities to connect girls and women to their unlimited potential.'
                whichCards={'imageCards'}
            />
            <Testimonials
                testimonialText={Interface.testimonial_text} 
                testimonialDetails={Interface.testimonial_details}
            />
        </div>
    )
}
