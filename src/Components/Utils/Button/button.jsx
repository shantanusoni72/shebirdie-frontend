import React from 'react'
import './style.css';

export default function button(props) {
    return (<>
        {
            props.mini ?
                <a className='button mini' href={props.link}>{props.text}</a> :
                <a className='button' href={props.link}>{props.text}</a>
        }
    </>)
}
