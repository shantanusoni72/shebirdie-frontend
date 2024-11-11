import React from 'react';
import './style.css';

export default function color_palette(props) {
  const colorPalette = [
    '#9FE2EC', '#373836', '#EE5B4D', '#E7B8AA', '#D0B9F2', 
    '#E4A1B2', '#81326B', '#567A4E', '#8D904B', '#EBB2C1',
    '#FCEFDB'
  ]
    return (
    <div className='palette'>
      {
        colorPalette.map((item, index) => (
            <div onClick={() => props.trigger(props.color_products[index])} className="palette_box" style={{backgroundColor: item}} key={ index }>
            </div>
        ))
      }
    </div>
  )
}
