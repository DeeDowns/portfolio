import React from 'react'
import { Link } from 'react-router-dom'



const FooterComp = () => {


    return (
    
       <nav>
           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square"  />
          </a>
            <Link to='/resume'>Resume</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
       </nav>
    )
}

export default FooterComp