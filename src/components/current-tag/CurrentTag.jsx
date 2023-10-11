import React from 'react'
import './current-tag.scss'

const CurrentTag = ({ state }) => { // Changed Context to Home
    return (
        <div className='user-info'>
            {/* <div className="user-info__img">
                <img src={user.img} alt="" />
            </div> */}
            <div className="user-info__name">
                <span>{state}</span>
            </div>
        </div>
    )
}

export default CurrentTag
