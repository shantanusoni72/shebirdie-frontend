import React from 'react'
import CartCounter from '../Cart Counter/cart_counter'

export default function cart_card(props) {
    return (
        <div className="cart_product_card">
            <div className="cart_product_card_img">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="cart_product_card_body">
                <h2>Birdie | <b>{props.name}</b></h2>
                <label className='strikethrough'>$20</label>
                <label className='pricetag'>$16</label>
                <p>40% Off Applied for buying {props.length}+ Devices</p>
            </div>
            <CartCounter
                ProductArrayUpdater={props.ProductArrayUpdater}
                removeProductByIndex={props.removeProductByIndex} 
                index={props.index} 
            />
        </div>
    )
}
