import React from 'react'
import { Jumbotron, Button } from 'reactstrap'; 


const Home = () => {

    return (
        <div className ='home-container'>
            <div className= 'home-div'>
                <div className='photo-container'>
                    <img src='https://ca.slack-edge.com/ESZCHB482-W013NQ2U1F1-c896d4be006d-512' alt='black and white avatar'/>
                </div>
                <div className='blurb-container'>
                    <h1>Full Stack Web Devloper</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Aliquam purus sit amet luctus.
                    </p>
                </div>
            
         
            </div>
        </div>
    )
}

export default Home