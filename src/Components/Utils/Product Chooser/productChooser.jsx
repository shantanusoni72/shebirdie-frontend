import React from 'react';
import './style.css';
import Button from '../Button/button';

export default function productChooser(props) {
  return (
    <div className='product_chooser'>
      <img src={props.image} alt='product' />
      <Button trigger={props.trigger} index={props.index} text='Add' mini={true} />
    </div>
  )
}
