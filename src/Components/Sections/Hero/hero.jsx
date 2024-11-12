import React, { useState } from 'react';
import './style.css';
import Rating from '../../Utils/Rating/rating';
import ColorPalette from '../../Utils/Color Palette/color_palette';
import Bundles from '../../Utils/Bundles/bundles';
import Button from '../../Utils/Button/button';
import Slider from '../../Utils/Slider/slider';
import ProductChooser from '../../Utils/Product Chooser/productChooser';
import Sub_Plans from '../../Utils/Subcription Plan/subs_plan';

export default function Hero() {
    const [isStepOneHidden, HideStepOne] = useState(false);
    const [[bundleValue, beforePrice, afterPrice], setBundleValue] = useState([0, 0, 0]);
    const [getImageFromColorPalette, setImageFromColorPalette] = useState('https://www.shesbirdie.com/cdn/shop/files/cyan_68a52f3d-ed67-4091-9915-4c9f73f76d05_800x.jpg');
    
    const [getIndexOfProductChooser, setIndexOfProductChooser] = useState(null);

    const ToggleActiveClassList = (index) => {
        const bundles = document.querySelectorAll('.bundle');
        bundles.forEach((bundle, i) => {
            if (i === index) {
                bundle.classList.add('active');
                if (i === 0) {
                    setBundleValue([5, 174.75, 113.59]);
                } else if (i === 1) {
                    setBundleValue([3, 104.85, 78.64]);
                } else if (i === 2) {
                    setBundleValue([1, 34.95, 29.71]);
                }
                else {
                    setBundleValue([5, 174.75, 113.59]);
                }
            } else {
                bundle.classList.remove('active');
            }
        });
    };

    const BundleData = [
        {
            'heading': '40% Off + $35 Gift\n(Mystery Gift Worth $35)',
            'image': 'https://cdn.shopify.com/s/files/1/0259/5808/8792/files/5-birdies-35-gift.png?v=1729077998',
            'amount': '5 bundles',
            'price_before': '$34.95',
            'price_after': '$20.97 each',
            'saving': 'Save $69.90'
        },
        {
            'heading': '25% Off + $15 Gift\n(Keychain $15)',
            'image': 'https://cdn.shopify.com/s/files/1/0259/5808/8792/files/3-birdies-pack.png?v=1727879596',
            'amount': '3 bundles',
            'price_before': '$34.95',
            'price_after': '$26.21 each',
            'saving': 'Save $26.21'
        },
        {
            'heading': '15% Off',
            'image': 'https://cdn.shopify.com/s/files/1/0259/5808/8792/files/birdie-1-pack.png?v=1697548734',
            'amount': '1 bundle',
            'price_before': '$34.95',
            'price_after': '$29.71 each',
            'saving': 'Save $5.24'
        }
    ]
    const ColorProducts = [
        'https://www.shesbirdie.com/cdn/shop/files/cyan_68a52f3d-ed67-4091-9915-4c9f73f76d05_800x.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/black_004a4cbe-ec66-41e9-a215-5d1cab651da7_800x.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/coral_5705fa3c-67fe-4be7-9be7-71d5c6428c9c_800x.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/rose-gold_e60ee125-d8d9-4a51-b844-58f748bbd7a6_800x.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/lavender_8504ff4e-765e-4ce5-8da5-5227a958f16c_800x.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/blossom_356ea464-0c1d-4b6b-9bcd-cdc5f7cb5178_800x.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/plum_800x.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/forest_800x.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/Fern_silver_star_800x.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/blossom-silver-star_800x.jpg',
        'https://www.shesbirdie.com/cdn/shop/files/swan_800x.jpg?v=1731002340'
    ]
    // setElementFromProductChooser([...getElementFromProductChooser, ColorProducts[getIndexOfProductChooser]]);
    return (
        <div className='hero'>
            <div className="product-slider">
                <Slider
                    effect={getImageFromColorPalette}
                />
            </div>
            <div className="product-info">
                <h1>BIRDIE</h1>
                <div className="rating-block">
                    <Rating />
                    <label>(10,638)</label>
                </div>
                <p>This small device is <b>like having a fire alarm in your pocket</b>. When you pull the pin it flashes and beeps
                    incredibly loud so you can get the attention of everyone around you.
                </p>
                <ColorPalette
                    color_products={ColorProducts}
                    trigger={setImageFromColorPalette}
                />
                {
                    isStepOneHidden ?
                        <div className="step_2">
                            <h1>Step 2: Choose Your Colors</h1>
                            <div className="productChooser">
                                {
                                    ColorProducts.map((item, index) => (
                                        <ProductChooser trigger={setIndexOfProductChooser} index={index} image={item} />
                                    ))
                                }
                            </div>
                            <div className="product_cart">
                                <div className="product_heading">
                                    <p>Your {bundleValue}-pack includes:</p>
                                    <div>
                                        <p style={{ textDecoration: 'line-through' }}>${beforePrice}</p>
                                        <p>${afterPrice}</p>
                                    </div>
                                </div>
                                <div className="product_body">
                                    {[...Array(bundleValue)].map((_, i) => (
                                        <div className="product_body_card">
                                            <div className="product_body_card_box">
                                            </div>
                                            <p>Bundle #{i + 1}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="next_buttons">
                                <Button
                                    text="Back"
                                    function={HideStepOne}
                                    HideIt={false}
                                />
                                <Button text="Add Bundle To Cart" />
                            </div>
                        </div> :
                        <div className="step_1">
                            <h1>Step 1: Choose Your Bundle</h1>
                            <div className="bundles">
                                {
                                    BundleData.map((item, index) => (
                                        <div onClick={() => ToggleActiveClassList(index)}>
                                            <Bundles
                                                heading={item.heading}
                                                image={item.image}
                                                amount={item.amount}
                                                price_before={item.price_before}
                                                price_after={item.price_after}
                                                saving={item.saving}
                                                key={index}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                            <Button
                                text="Next: Choose Your Color"
                                function={HideStepOne}
                                HideIt={true}
                            />
                        </div>
                }
                <Sub_Plans />
            </div>
        </div>
    )
}