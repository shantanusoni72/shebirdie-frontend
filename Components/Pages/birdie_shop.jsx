import React, { useEffect } from 'react'
import Hero from '../Sections/Hero/hero';
import Banner from '../Sections/Banner/banner';
import Banner2 from '../Sections/Banner 2/banner_2';
import TwoColumns from '../Sections/Two Columns/two_columns.jsx';
import Review from '../Sections/Review/review';
import Testimonials from '../Sections/Testimonials/testimonials';
import StickyHeader from '../Utils/Sticky Header/sticky_header.jsx';
import * as Interface from '../interface.js';

const showStickyHeader = () => {
    if(window.scrollY > 1400) {
        document.querySelector('.sticky_header').classList.remove('disabled');
    } else {
        document.querySelector('.sticky_header').classList.add('disabled');
    }
}

export default function BirdieShop(props) {
    useEffect(() => {
        window.addEventListener('scroll', showStickyHeader);
    }, [])

    return (
        <div className='birdie_shop'>
            <Hero
                ToggleCheckoutCart={Interface.ToggleCheckoutCart}
                data={[Interface.BundleData, Interface.ProductNames, Interface.ColorProducts ]} 
            /> 
            <Banner
                title='1 in 3 women in the U.S. is assaulted in her lifetime.'
                paragraph='This is personal because it includes 1 in 3 of our daughters, sisters, and friends.'
                whichCards={'none'}
            />
            <StickyHeader />
            <TwoColumns
                title="When in Doubt, Pull It"
                paragraph="Feeling uncomfortable? Trust your gut. Pull the Top to start the LOUD siren and flashing strobe light, bringing all eyes on you. When you feel safe, reinsert the Top to deactivate the alarm."
                isImage={false}
                textImage={Interface.two_columns_medias.text_image_1}
                mainMedia={Interface.two_columns_medias.section_1_video}
            />
            <Banner
                title='Easy to Use, Easy to Carry'
                paragraph='Young or old, at home or on the road, Birdie is the easiest way to keep yourself safe'
                whichCards={'bigCards'}
            />
            <Banner2
                slide_1={Interface.banner_2_medias.slide_1} 
                slide_2={Interface.banner_2_medias.slide_2} 
                slide_3={Interface.banner_2_medias.slide_3} 
                slide_4={Interface.banner_2_medias.slide_4} 
                slide_5={Interface.banner_2_medias.slide_5}
            />
            <TwoColumns
                title="How we Stack Up"
                paragraph="Birdie takes the lead when stacked against other self-defense tools, offering ease of use, a non-violent approach, and more."
                isImage={true}
                textImage={Interface.two_columns_medias.text_image_2}
                mainMedia={Interface.two_columns_medias.section_1_image}
            />
            <Review
                reviews_heading={Interface.reviews_heading}
                reviews_subheading={Interface.reviews_subheading}
                review_videos={Interface.review_videos}
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
