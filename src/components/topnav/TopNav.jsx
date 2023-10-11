import React from 'react'
import './topnav.scss'
import CurrentTag from '../current-tag/CurrentTag'

const TopNav = ({state}) => {
    const openSidebar = () => {
        document.body.classList.add('sidebar-open')
    }

    return (
        <div className='topnav'>
            <CurrentTag state={state} />
            <div className="sidebar-toggle" onClick={openSidebar}>
                <i className='bx bx-menu-alt-right'></i>
            </div>
        </div>
    )
}

export default TopNav
