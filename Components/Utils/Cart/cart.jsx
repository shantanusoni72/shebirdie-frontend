import React from 'react';
import Button from '../Button/button';
import CartSingleCard from '../Cart Card/cart_card';
import { ToggleCheckoutCart } from '../../interface';
import SubPlans from '../Subcription Plan/subs_plan';
import './style.css';

export default function Cart(props) {
    return (
        <div className="cart disabled">
            <div className="cart_heading">
                <p>Your cart</p>
                <svg onClick={() => ToggleCheckoutCart('close')} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
            </div>
            <div className="cart_banner">
                <h2>You've unlocked free U.S shipping and 40% off!</h2>
                <div className="cart_banner_ticks">
                    <div className="cart_banner_tick">
                        <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.775 1.90002L10.375 0.500023C10.3283 0.454216 10.2654 0.428558 10.2 0.428558C10.1346 0.428558 10.0717 0.454216 10.025 0.500023L4.12499 6.40002C4.07826 6.44583 4.01543 6.47149 3.94999 6.47149C3.88455 6.47149 3.82172 6.44583 3.77499 6.40002L2.37499 5.00002C2.32826 4.95422 2.26543 4.92856 2.19999 4.92856C2.13455 4.92856 2.07172 4.95422 2.02499 5.00002L0.624992 6.40002C0.579185 6.44675 0.553528 6.50958 0.553528 6.57502C0.553528 6.64046 0.579185 6.70329 0.624992 6.75002L3.77499 9.90002C3.82172 9.94583 3.88455 9.97149 3.94999 9.97149C4.01543 9.97149 4.07826 9.94583 4.12499 9.90002L11.775 2.25002C11.8208 2.20329 11.8465 2.14046 11.8465 2.07502C11.8465 2.00958 11.8208 1.94675 11.775 1.90002Z" fill="white"></path>
                        </svg>
                        <p>15% Off</p>
                    </div>
                    <div className="cart_banner_tick">
                        <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.775 1.90002L10.375 0.500023C10.3283 0.454216 10.2654 0.428558 10.2 0.428558C10.1346 0.428558 10.0717 0.454216 10.025 0.500023L4.12499 6.40002C4.07826 6.44583 4.01543 6.47149 3.94999 6.47149C3.88455 6.47149 3.82172 6.44583 3.77499 6.40002L2.37499 5.00002C2.32826 4.95422 2.26543 4.92856 2.19999 4.92856C2.13455 4.92856 2.07172 4.95422 2.02499 5.00002L0.624992 6.40002C0.579185 6.44675 0.553528 6.50958 0.553528 6.57502C0.553528 6.64046 0.579185 6.70329 0.624992 6.75002L3.77499 9.90002C3.82172 9.94583 3.88455 9.97149 3.94999 9.97149C4.01543 9.97149 4.07826 9.94583 4.12499 9.90002L11.775 2.25002C11.8208 2.20329 11.8465 2.14046 11.8465 2.07502C11.8465 2.00958 11.8208 1.94675 11.775 1.90002Z" fill="white"></path>
                        </svg>
                        <p>Free U.S Shipping</p>
                    </div>
                    <div className="cart_banner_tick">
                        <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.775 1.90002L10.375 0.500023C10.3283 0.454216 10.2654 0.428558 10.2 0.428558C10.1346 0.428558 10.0717 0.454216 10.025 0.500023L4.12499 6.40002C4.07826 6.44583 4.01543 6.47149 3.94999 6.47149C3.88455 6.47149 3.82172 6.44583 3.77499 6.40002L2.37499 5.00002C2.32826 4.95422 2.26543 4.92856 2.19999 4.92856C2.13455 4.92856 2.07172 4.95422 2.02499 5.00002L0.624992 6.40002C0.579185 6.44675 0.553528 6.50958 0.553528 6.57502C0.553528 6.64046 0.579185 6.70329 0.624992 6.75002L3.77499 9.90002C3.82172 9.94583 3.88455 9.97149 3.94999 9.97149C4.01543 9.97149 4.07826 9.94583 4.12499 9.90002L11.775 2.25002C11.8208 2.20329 11.8465 2.14046 11.8465 2.07502C11.8465 2.00958 11.8208 1.94675 11.775 1.90002Z" fill="white"></path>
                        </svg>
                        <p>25% Off</p>
                    </div>
                    <div className="cart_banner_tick">
                        <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.775 1.90002L10.375 0.500023C10.3283 0.454216 10.2654 0.428558 10.2 0.428558C10.1346 0.428558 10.0717 0.454216 10.025 0.500023L4.12499 6.40002C4.07826 6.44583 4.01543 6.47149 3.94999 6.47149C3.88455 6.47149 3.82172 6.44583 3.77499 6.40002L2.37499 5.00002C2.32826 4.95422 2.26543 4.92856 2.19999 4.92856C2.13455 4.92856 2.07172 4.95422 2.02499 5.00002L0.624992 6.40002C0.579185 6.44675 0.553528 6.50958 0.553528 6.57502C0.553528 6.64046 0.579185 6.70329 0.624992 6.75002L3.77499 9.90002C3.82172 9.94583 3.88455 9.97149 3.94999 9.97149C4.01543 9.97149 4.07826 9.94583 4.12499 9.90002L11.775 2.25002C11.8208 2.20329 11.8465 2.14046 11.8465 2.07502C11.8465 2.00958 11.8208 1.94675 11.775 1.90002Z" fill="white"></path>
                        </svg>
                        <p>40% Off</p>
                    </div>
                </div>
            </div>
            <div className="cart_product_cards">
                {
                    props.ProductArray.map((item, index) => (<>
                        <CartSingleCard
                            name={item.name}
                            image={item.image}
                            ProductArrayUpdater={props.ProductArrayUpdater}
                            removeProductByIndex={props.removeProductByIndex} 
                            index={index}
                            length={props.ProductArray.length}
                        />
                        <hr />
                    </>))
                }
            </div>
            <SubPlans />
            <div className="cart_checkout">
                <div className="cart_checkout_banner">
                    <h2>Subtotal</h2>
                    <h3>${(16 * props.ProductArray.length) - 5.24}</h3>
                    <h3 class="strikethrough">${16 * props.ProductArray.length}</h3>
                </div>
                <div className="cart_checkout_p">
                    <p>🎉 Congrats! You're saving $5.24 on this order!</p>
                </div>
                <div className="cart_checkout_final">
                    <Button
                        text="Checkout"
                        function={() => alert('AWERSOME!!!!')} 
                    />
                    <p>Taxes and shipping calculated at checkout</p>
                </div>
            </div>
        </div>
    )
}