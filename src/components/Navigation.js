import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavLink,
    NavItem,
    NavbarText
  } from 'reactstrap';

const Navigation = () => {
    return (

        <Navbar className='nav-container'>
            <Nav>
                <NavItem className='titleHeader'>
                    <img src='https://www.freelogodesign.org/file/app/client/thumb/b91b05eb-5382-468e-b210-c28ac2ef2c6b_200x200.png?1602211545069' alt='logo with yellow lettering' />
                </NavItem>
                <NavItem className='nav-link-container'>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/resume'>Resume</NavLink>
                    <NavLink href='/portfolio'>Portfolio</NavLink>
                    <NavLink href='/contact'>Contact</NavLink>
                   
                </NavItem>
            </Nav>
        </Navbar>
   
    )
}

export default Navigation