import React from 'react'
import './style.css';

export default function button(props) {
    return (
        <a className='button' href={props.link}>{props.text}</a>
    )
}
