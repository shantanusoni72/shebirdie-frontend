import React from 'react'
import './style.css';

export default function Button(props) {
    return (<>
        {
            props.mini ?
                <a onClick={() => props.trigger(props.index)} className='button mini' href={props.link}>{props.text}</a> :
                props.responsibility === 'back-btn' ?
                <a onClick={() => {props.reset([]); props.function(props.HideIt);}} className='button' href={props.link}>{props.text}</a> :
                <a style={{'width': `${props.width}`, 'padding': `${props.padding}`}} onClick={() => props.function(props.HideIt)} className='button' href={props.link}>{props.text}</a>
        }
    </>)
}