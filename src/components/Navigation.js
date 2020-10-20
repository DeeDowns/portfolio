import React from 'react'
// import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavLink,
    NavItem,
    NavbarText
  } from 'reactstrap';
import { Link } from 'react-scroll'


const Navigation = () => {
    return (

        <Navbar className='nav-container'>
            <Nav>
                <NavItem className='titleHeader'>
                    <img src='https://www.freelogodesign.org/file/app/client/thumb/b91b05eb-5382-468e-b210-c28ac2ef2c6b_200x200.png?1602211545069' alt='logo with yellow lettering' />
                </NavItem>
                <NavItem className='nav-link-container'>
                    <Link
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                    >
                        <p>Home</p>
                    </Link>

                    <Link 
                        to="resume" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                    >
                        <p>Resume</p>
                    </Link>

                    <Link 
                        to="portfolio" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                    >
                        <p>Portfolio</p>
                    </Link>

                    <Link 
                        to="contact" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                    >
                        <p>Contact</p>
                    </Link>

                </NavItem>
            </Nav>
        </Navbar>
   
    )
}

export default Navigation