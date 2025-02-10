import React, { useContext, useEffect } from 'react';
import './style.css';
import Rating from '../../Utils/Rating/rating';
import ColorPalette from '../../Utils/Color Palette/color_palette';
import Bundles from '../../Utils/Bundles/bundles';
import Button from '../../Utils/Button/button';
import Slider from '../../Utils/Slider/slider';
import ProductChooser from '../../Utils/Product Chooser/productChooser';
import Sub_Plans from '../../Utils/Subcription Plan/subs_plan';
import Label from '../../Utils/Label/label';
import FAQs from '../../Utils/FAQs/faqs';
import Cart from '../../Utils/Cart/cart';
import { heroContext } from '../../Context/heroProvider';

export default function Hero(props) {
    const { isStepOneHidden, HideStepOne, bundleValue, beforePrice, afterPrice, setBundleValue, getImageFromColorPalette, 
        setImageFromColorPalette, getIndexOfProductChooser, setIndexOfProductChooser, getProductArray, setProductArray } = useContext(heroContext);

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

    const removeProductByIndex = (index) => {
        const newItems = [...getProductArray];
        newItems.splice(index, 1);
        setProductArray(newItems);
    };

    useEffect(() => {
        document.querySelector('.bundle').classList.add('active');
    }, [])

    useEffect(() => {
        const ArrayUpdateCondition = props.data[2][getIndexOfProductChooser] !== undefined &&
        props.data[2][getIndexOfProductChooser] !== null && getProductArray.length < bundleValue;
        if (ArrayUpdateCondition) {
            setProductArray(currentProductArray => [...currentProductArray, 
                { 'name': props.data[1][getIndexOfProductChooser], 'image': props.data[2][getIndexOfProductChooser], 'price': 16}
            ]);
        }
    }, [getIndexOfProductChooser]);

    return (<>
        <Cart
            ProductArray={getProductArray} 
            ProductArrayUpdater={setProductArray}
            removeProductByIndex={removeProductByIndex}
        />
        <div className='hero'>
            <div className="product-slider">
                <Slider
                    effect={getImageFromColorPalette}
                />
            </div>
            <div className="product-info">
                <div className="product-main">
                    <h1>BIRDIE</h1>
                    <div className="rating-block">
                        <Rating width="24px" heading="24px" />
                        <label>(10,638)</label>
                    </div>
                    <p>This small device is <b>like having a fire alarm in your pocket</b>. When you pull the pin it flashes and beeps
                        incredibly loud so you can get the attention of everyone around you.
                    </p>
                </div>
                <div className="product-interface">
                    <ColorPalette
                        color_products={props.data[2]}
                        trigger={setImageFromColorPalette}
                    />
                    {
                        isStepOneHidden ?
                            <div className="step_2">
                                <h1>Step 2: Choose Your Colors</h1>
                                <div className="productChooser">
                                    {
                                        props.data[2].map((item, index) => (
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
                                        {
                                            getProductArray.map((item, index) => (
                                                <div className="product_body_card">
                                                    <label onClick={() => removeProductByIndex(index)}>X</label>
                                                    <img src={item.image} />
                                                    <p>{item.name}</p>
                                                </div>
                                            ))}
                                        {
                                            [...Array(bundleValue - getProductArray.length)].map((_, i) => (
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
                                        reset={setProductArray}
                                        responsibility="back-btn"
                                        width="10%"
                                        padding="20px"
                                    />
                                    <Button
                                        text="Add Bundle To Cart"
                                        function={() => props.ToggleCheckoutCart('add-to-cart')}
                                        width="90%"
                                        padding="20px"
                                    />
                                </div>
                            </div> :
                            <div className="step_1">
                                <h1>Step 1: Choose Your Bundle</h1>
                                <div className="bundles">
                                    {
                                        props.data[0].map((item, index) => (
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
                                    fontSize="18px"
                                    width="91%"
                                    padding="15px"
                                    fontWeight="600"
                                />
                            </div>
                    }
                    <Sub_Plans />
                    <Label fontSize="16px" side="28px" />
                    <FAQs />
                </div>
            </div>
        </div>
    </>)
}