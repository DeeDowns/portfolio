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
                    <NavbarText>Dewandra Downs</NavbarText>
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