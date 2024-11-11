import React from 'react'
import './style.css';

export default function Button(props) {
    return (<>
        {
            props.mini ?
                <a className='button mini' href={props.link}>{props.text}</a> :
                <a onClick={() => props.function(props.HideIt)} className='button' href={props.link}>{props.text}</a>
        }
    </>)
}
