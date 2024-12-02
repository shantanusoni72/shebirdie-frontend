import React from 'react';
import './style.css';

const toggleFAQsdropdowns = (index) => {
    const dropdown = document.querySelectorAll('.inner');
    for(var i=0; i<dropdown.length; i++) {
        if(i === index) {
            dropdown[i].classList.toggle('disabled');
        }
    }
}

export default function faqs() {
    return (
        <div className='faqs'>
            <ul className='list'>
                <hr />
                <li>
                    <div className="faqs-open" onClick={() => toggleFAQsdropdowns(0)}>
                        <p>What's Included</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                    </div>
                    <ul className='inner disabled'>
                        <li>LOUD siren and flashing strobe-light</li>
                        <li>Solid brass keychain</li>
                        <li>Alarm dimensions 3.5" x 1.125" x 0.5</li>
                    </ul>
                </li>
                <hr />
                <li>
                    <div className="faqs-open" onClick={() => toggleFAQsdropdowns(1)}>
                        <p>Watch Birdie in Action</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                    </div>
                    <video className='inner disabled' controls={true}>
                        <source src='https://cdn.shopify.com/s/files/1/0259/5808/8792/files/Callie_-_On_Call_Rep_2.mp4?v=1679588037' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </li>
                <hr />
                <li>
                    <div className="faqs-open" onClick={() => toggleFAQsdropdowns(2)}>
                        <p>Shipping & Returns</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                    </div>
                    <p className='inner disabled'>
                        Get free shipping when you order 2 or more Birdies! All products are shipping the next business day
                        after they're purchased. <br />We’re happy to offer returns on items purchased in our online store that
                        are in re-sellable condition within 30 days of purchase for a full refund to the original payment
                        method.
                    </p>
                </li>
                <hr />
            </ul>
        </div>
    )
}
