import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,  CardLink, CardGroup } from 'reactstrap';


const Portfolio = () => {

    return (
        <div className='portfolio-container'> 
            <CardGroup>
                <Card body inverse style={{ backgroundColor: '#27221F', borderColor: '#27221F' }}>
                    <CardTitle className='airPrice'>AirPrice</CardTitle>
                    <CardImg src='https://media.giphy.com/media/5dX3dVl7MrJqiioLoC/giphy.gif' alt='gif of user scrolling through website'/>
                    <CardBody>
                        <CardSubtitle>Web application to calculates the optimal rate of an Airbnb rental based on amenities offered</CardSubtitle>
                        <CardText>
                            Role: React II Developer
                            <br/>
                            Front End created with HTML, CSS, React, Redux, and ReactStrap
                            <br/>
                            Utilized Back End API to display, create, edit, and remove user Airbnb properties
                            <br/>
                            Integrated Data Science API and Back End API into forms to return optimal price data in a user-friendly way
                        </CardText>
                        <CardLink href="https://github.com/DeeDowns/front-end" target='_blank'>Github</CardLink>
                        <CardLink href="https://air-price.vercel.app" target='_blank'>Website</CardLink>
                    </CardBody>  
                </Card>

                <Card body inverse style={{ backgroundColor: '#27221F', borderColor: '#27221F' }}>
                    <CardTitle className='sfRecipes'>Secret Family Recipes</CardTitle>
                    <CardImg src='https://media3.giphy.com/media/SaOm8ikUyt1kUriyqS/giphy.gif' alt='gif of user scrolling through website documentation'/>
                    <CardBody>
                        <CardSubtitle>Back End API to store and share family recipes</CardSubtitle>
                        <CardText>
                            Role: Back End Node Developer
                            <br/>
                            Created with Node.js, Express, SQL, SQLite 3, PostgreSQL, tested with Jest
                            <br/>
                            Implemented endpoints so user can view, create, edit, and remove (full CRUD capabilities) recipes, ingredients, and instructions
                            <br/>
                            Utilized JSON Web Tokens to authorize users upon login 
                        </CardText>
                        <CardLink href="https://github.com/DeeDowns/backend" target='_blank'>Github</CardLink>
                        <CardLink href="https://documenter.getpostman.com/view/11995468/TVYCBfw1" target='_blank'>Documentation</CardLink>
                    </CardBody>  
                </Card>

                <Card body inverse style={{ backgroundColor: '#27221F', borderColor: '#27221F' }}>
                    <CardTitle className='nasaPotd'>NASA Photo of the Day</CardTitle>
                    <CardImg src='https://media.giphy.com/media/Zj6VykMFFc7CKDTUyk/giphy.gif' alt='gif of user scrolling through website'/>
                    <CardBody>
                        
                        <CardSubtitle>Web application that presents a different astronomy photo or video every day</CardSubtitle>
                        <CardText> 
                            Solo project
                            <br/>
                            Created with React, Material UI, and Greensock
                            <br/>
                            Worked through NASA APOD API to return media and information in a stylish manner
                        </CardText>
                        <CardLink href="https://github.com/DeeDowns/nasa-photo-of-the-day" target='_blank'>Github</CardLink>
                        <CardLink href="https://potd-nasa.vercel.app/" target='_blank'>Website</CardLink>
                    </CardBody>  
                </Card>

                {/* <Card body inverse style={{ backgroundColor: '#27221F', borderColor: '#27221F' }}>
                    <CardTitle>Project Title</CardTitle>
                    <CardImg src='https://i.imgur.com/lbMOVsS.png'/>
                    <CardBody>
                        
                        <CardSubtitle>Project Subtitle</CardSubtitle>
                        <CardText>Project description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in nulla posuere sollicitudin aliquam ultrices. Urna cursus eget nunc scelerisque viverra mauris in.</CardText>
                        <CardLink href="#">Project Github link</CardLink>
                        <CardLink href="#">Project link</CardLink>
                    </CardBody>  
                </Card> */}
            </CardGroup>
        </div>
    )
}

export default Portfolio