import React from 'react';
import './style.css';
import Rating from '../../Utils/Rating/rating';

export default function testimonials() {
    const testimonialDetails = [
        {
            'image': 'https://images.loox.io/uploads/2024/10/10/5h5o7TblU7.jpg',
            'title': 'Gayle S.',
            'date': '10/11/2024',
            'description': 'It works perfectly! Hope I never need to use it but feel safer having it !  Many thanks!',
            'item_type': 'Coral',
            'reply': 'So cute on your bag! Thank you for your support!.....Susan'
        },
        {
            'image': 'https://images.loox.io/uploads/2024/10/6/XGhhgoeB3.jpg',
            'title': 'Renata R.',
            'date': '10/2/2024',
            'description': 'I am a (very) little old lady, and often have to walk home from the station in the dark, along a road where there have been several muggings. I am no longer afraid to do so, and the friends to whom I have given Birdies are feeling much more secure. Thank you!',
            'item_type': 'Metallic Purple',
            'reply': 'Thanks for your support!.....Susan'
        },
        {
            'image': 'https://images.loox.io/uploads/2024/10/1/j41IeL-Es.jpg',
            'title': 'Kandi L.',
            'date': '9/28/2024',
            'description': 'Awesome little alarm. I got the indigo blue and it blends in with my scrubs perfectly. Very pleased with my purchase',
            'item_type': 'Metallic Indigo',
            'reply': 'It is a wonderful color! Thanks for your support!.....Susan'
        },
        {
            'image': 'https://images.loox.io/uploads/2024/9/24/JxzUPOHo3_mid.jpg',
            'title': 'Vanessa B.',
            'date': '9/25/2024',
            'description': 'Fue un regalo para mi hija que está el la universidad ella quedó encantada con su Birdie 😃 dice que así se siente más segura ',
            'item_type': 'Hot Pink',
            'reply': 'Thank you for your support! ..... Susan'
        },
        {
            'image': 'https://images.loox.io/uploads/2024/9/27/kfEzcJwCA_mid.jpg',
            'title': 'Lilian M.',
            'date': '9/28/2024',
            'description': 'Very loud item only tested it',
            'item_type': 'Coconut',
            'reply': 'Thank you for your support! ..... Susan'
        },
        {
            'image': 'https://images.loox.io/uploads/2024/9/3/pPd9tEHDj_mid.jpg',
            'title': 'Kathleen M.',
            'date': '9/3/2024',
            'description': 'It’s working great',
            'item_type': 'Indigo',
            'reply': 'LOVE it attached to your bag! Thank you!...........Susan'
        },
        {
            'image': 'https://images.loox.io/uploads/2024/8/31/F43NNzCEM_mid.jpg',
            'title': 'Wanda T.',
            'date': '8/31/2024',
            'description': 'Love my birdie. This is my cheetah print. Always handy!',
            'item_type': 'Indogo',
            'reply': 'We love cheetah print too! Thank you!!....Susan'
        },
        {
            'image': 'https://images.loox.io/uploads/2024/8/29/ph5B8tCMb.jpg',
            'title': 'Wanda T.',
            'date': '8/30/2024',
            'description': 'I have the cheetah print birdie on my everyday crossbody purse. It blends in nicely but is readily available if needed. You just never know when someone with bad intent could be near.',
            'item_type': 'Cheetah',
            'reply': 'Its so cute and really hidden with your purse. I agree that its readily available. Thanks so much for your support. ........Thank you, Susan'
        },
        {
            'image': 'https://images.loox.io/uploads/2024/7/29/NxrIaRa5Q_mid.jpg',
            'title': 'Angela C.',
            'date': '7/29/2024',
            'description': 'I’ve enjoyed having mine! It’s for safety purposes if needed…I purchased my daughter & myself one!',
            'item_type': 'Rainbow Wrap',
            'reply': 'Thanks so much for your support!!! .....Susan'
        },
        {
            'image': 'https://images.loox.io/uploads/2024/9/24/WQNR9d4Pt_mid.jpg',
            'title': 'Charmila V.',
            'date': '9/24/2024',
            'description': 'I purchased the Shes Birdie personal safety alarm two weeks ago and have been impressed with its performance. The alarm is very loud, which gives me confidence when Im by myself without my partner. Its easy to use and has excellent craftsmanship. However, I did notice that the light isn’t very bright, and the alarm might not be as effective in louder environments like near a car playing loud music. Despite this, I believe its a valuable tool for added security and peace of mind, and I plan to buy more for my friends and family.',
            'item_type': 'Lavender',
            'reply': 'Thank you so much for your feedback!! Thank you for your support! susan'
        },
    ]

    return (
        <div className='testimonials'>
            <div className="rating">
                <Rating className='ratingOption' />
                <p>10,628 Reviews</p>
            </div>
            <div className="testimonial_group">
                {testimonialDetails.map((item, index) => (
                    <div className="testimonial_card" key={index}>
                        <div className="testimonial_card_1">
                            <img src={item.image} alt='user' />
                            <h1>{item.title}</h1>
                            <Rating className='ratingOption' />
                            <p>{item.date}</p>
                            <h2>{item.description}</h2>
                            <p>Item type:</p>
                            <h2>{item.item_type}</h2>
                        </div>
                        <div className="testimonial_card_2">
                            <p>She's Birdie replied:</p>
                            <h2>{item.reply}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
