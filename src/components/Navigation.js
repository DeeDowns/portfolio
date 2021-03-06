import React from 'react'
import {
    Navbar,
    Nav,
    NavItem
  } from 'reactstrap';
import { Link } from 'react-scroll'


const Navigation = () => {
    return (

        <Navbar className='nav-container'>
            <Nav>
                <NavItem className='nav-link-container'>
                    <Link
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                    >
                        <p>Home</p>
                    </Link>

                    {/* <Link 
                        to="resume" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                    >
                        <p>Resume</p>
                    </Link> */}

                    <a href={require('../assets/dewandra_downs_resume-4.pdf')} target='_blank' rel="noopener noreferrer"> 
                        <p>Resume</p> 
                    </a>

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
