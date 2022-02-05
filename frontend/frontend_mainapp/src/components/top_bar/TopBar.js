import React from 'react'
import './TopBar.module.css'

const TopBar = props => {
    return (
        <nav className='wrapper'>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/descriptor_model">GET DESCRIPTOR MODEL</a></li>
                <li><a href="/about" class="dropbtn">ABOUT</a></li>
                <li><a href='/auth'>LOG IN</a></li>
            </ul>
        </nav>
    )
}

export default TopBar