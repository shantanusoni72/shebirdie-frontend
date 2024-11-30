import React, { useState } from 'react';
import './style.css';

export default function Slider(props) {
    const sliderMedias = [
        'https://www.shesbirdie.com/cdn/shop/files/swan.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/pos-2-updates.png',
        'https://www.shesbirdie.com/cdn/shop/videos/c/vp/996d3b9d0e0c4d7b8cc6283b6b9f2694/996d3b9d0e0c4d7b8cc6283b6b9f2694.HD-1080p-7.2Mbps-36452305.mp4',
        'https://www.shesbirdie.com/cdn/shop/files/pos-3.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/pos-4.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/pos-5.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/pos-6.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/pos-7.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/pos-8.jpg'
    ]

    const [getPresentImage, setPresentImage] = useState(sliderMedias[0]);
    const [getIndex, setIndex] = useState(0);

    return (
        <div className='slider'>
            <div className="slider-present">
                {
                    getPresentImage.slice(-4) === '.mp4' ?
                        <video autoPlay>
                            <source src={getPresentImage} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        :
                        <img src={ getIndex === 0 ? props.effect : getPresentImage} alt="product" />

                }
            </div>
            <div className="slider-row">
                {
                    sliderMedias.map((item, index) => (
                        item.slice(-4) === '.mp4' ?
                            <video onClick={() => setPresentImage(item)} width="320" height="240" control>
                                <source src={item} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            :
                            index === 0 ?
                            <>
                            <img onClick={() => setPresentImage(props.effect)} src={props.effect} alt="product" />
                            {() => setIndex(index)}
                            </>
                            :
                            <>
                            <img onClick={() => setPresentImage(item)} src={item} alt="product" />
                            {() => setIndex(index)}
                            </>
                    ))
                }
            </div>
        </div>
    )
}