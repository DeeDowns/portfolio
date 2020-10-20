import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'reactstrap'



const Home = (props) => {
    // const history = useHistory()

    // const handleClick = event => {
    //     event.preventDefault()
    //     history.push('/resume')
    // }

    return (
        <div className ='home-container'>
            <div className= 'home-div'>
                <div className='photo-container'>
                    <img src='https://ca.slack-edge.com/ESZCHB482-W013NQ2U1F1-c896d4be006d-512' alt='black and white avatar'/>
                </div>
                <div className='blurb-container'>
                    <h1>Software Engineer. Life-Long Learner. Not Afraid to Switch it up</h1>
                    <p>
                       Hi, I'm Dewandra Downs (but everyone calls me Dee). After working as Flight Attendant 4 years, I decided I wanted to switch up my career and step into Tech. I come from an unconventional background (definitely not what most would considered geared toward tech) and I have always considered myself a creative person but not so much technical, this journey has taught me that the two are not mutually exclusive. After taking a few introductory courses covering the basics of programming, I found that this FINISH SENTENCE. So I took that leap of faith, enrolled in an immersive Bootcamp, where I worked on multipe teams building projects from different developer roles, learning, growing, and crafting my skillset along the way. I am here to soak up as much information as I can dive deeper into my interest into the industry to become a productive member of a team. 
                        {/* <Button onClick={handleClick}>Enter</Button> */}
                    </p>
                </div>
               
         
            </div>
        </div>
    )
}

export default Home