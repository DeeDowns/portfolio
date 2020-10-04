import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from 'react-mdl'

const Nav = () => {
    return (
        <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
        </Navigation>
    )
}

export default Nav