import React from 'react'
import './button.scss'

const Button = props => {
    const className = {
        box: props.buttonType,
        purple: props.purple && 'box-purple',
        fullheight: props.fullheight && 'box-fullheight'
    }

    return (
        <button title={props.title} onClick={props.func} className={Object.values(className).join(' ')}>
            {props.children}
        </button>
    )
}

export default Button


