import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Cell } from 'react-mdl'
import Experience from './Experience'
import Education from './Education'

// import '../styles/Resume.css'


const Resume1 = () => {
    return (
      <div className='resume-container'>
          <Grid className='resume-grid'>
              <Cell className='info-section' col={4}>
                    <h2 style={{paddingTop: '2em'}}>Dewandra Downs</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Phone</h5>
                    <p>(352) 470-3501</p>
                    <h5>Email</h5>
                    <p>dee_downs@outlook.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </Cell>
          
            <Cell className='edu-ex-section' col={8}>
            <h2>Education</h2>
                <Education
                startYear={2012}
                endYear={2016}
                schoolName="University of Florida"
                schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

                <Education
                    startYear={'June 2020'}
                    endYear={'December 2020'}
                    schoolName="Lambda School"
                    schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />

                <h2>Experience</h2>
                <Experience
                startYear={2016}
                endYear={2020}
                jobName="Delta Air Lines, Flight Attendant"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

                <Experience
                    startYear={2015}
                    endYear={2016}
                    jobName="Sun Country Sports Center, Recreational Gymnastics Coach"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
                <hr style={{borderTop: '3px solid #e22947'}} />
                <h2>Skills</h2>
                </Cell>
          </Grid>
          
      </div>
    )
}

export default Resume1