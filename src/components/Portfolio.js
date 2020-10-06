import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,  CardLink } from 'reactstrap';


const Portfolio = () => {

    return (
        <div className='portfolio-container'>
            <h1>Portfolio page</h1>
            <Card body inverse style={{ backgroundColor: '#27221F', borderColor: '#27221F' }}>
                <CardTitle>Project Title</CardTitle>
                <CardImg src='https://images.unsplash.com/photo-1597892945056-970ae078cff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'/>
                <CardBody>
                    
                    <CardSubtitle>Project Subtitle</CardSubtitle>
                    <CardText>Project description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in nulla posuere sollicitudin aliquam ultrices. Urna cursus eget nunc scelerisque viverra mauris in.</CardText>
                    <CardLink href="#">Project Github link</CardLink>
                    <CardLink href="#">Project link</CardLink>
                </CardBody>  
            </Card>

            <Card body inverse style={{ backgroundColor: '#27221F', borderColor: '#27221F' }}>
                <CardTitle>Project Title</CardTitle>
                <CardImg src='https://images.unsplash.com/photo-1597892945056-970ae078cff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'/>
                <CardBody>
                    
                    <CardSubtitle>Project Subtitle</CardSubtitle>
                    <CardText>Project description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in nulla posuere sollicitudin aliquam ultrices. Urna cursus eget nunc scelerisque viverra mauris in.</CardText>
                    <CardLink href="#">Project Github link</CardLink>
                    <CardLink href="#">Project link</CardLink>
                </CardBody>  
            </Card>

            <Card body inverse style={{ backgroundColor: '#27221F', borderColor: '#27221F' }}>
                <CardTitle>Project Title</CardTitle>
                <CardImg src='https://images.unsplash.com/photo-1597892945056-970ae078cff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'/>
                <CardBody>
                    
                    <CardSubtitle>Project Subtitle</CardSubtitle>
                    <CardText>Project description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in nulla posuere sollicitudin aliquam ultrices. Urna cursus eget nunc scelerisque viverra mauris in.</CardText>
                    <CardLink href="#">Project Github link</CardLink>
                    <CardLink href="#">Project link</CardLink>
                </CardBody>  
            </Card>

            <Card body inverse style={{ backgroundColor: '#27221F', borderColor: '#27221F' }}>
                <CardTitle>Project Title</CardTitle>
                <CardImg src='https://images.unsplash.com/photo-1597892945056-970ae078cff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'/>
                <CardBody>
                    
                    <CardSubtitle>Project Subtitle</CardSubtitle>
                    <CardText>Project description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in nulla posuere sollicitudin aliquam ultrices. Urna cursus eget nunc scelerisque viverra mauris in.</CardText>
                    <CardLink href="#">Project Github link</CardLink>
                    <CardLink href="#">Project link</CardLink>
                </CardBody>  
            </Card>
        </div>
    )
}

export default Portfolio