import React from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <header>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/blogposts">Posts</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>            

        </header>
    )
}

export default Header
