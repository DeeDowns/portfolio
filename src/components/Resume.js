import React from 'react'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'

const Resume = () => {
    return (
        <div className='resume-container'>
            <div className='info-section'>
                <h2 style={{paddingTop: '2em'}}>Dewandra Downs</h2>
                <h3 style={{color: 'grey'}}>Full Stack Web Devloper</h3>

                <hr/>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                <hr/>
                
                <h3>Phone</h3>
                <p>(352) 470-3501</p>
                <h3>Email</h3>
                <p>dee_downs@outlook.com</p>
                <h3>LinkedIn</h3>
                <a href='https://www.linkedin.com/in/dewandra-downs/'>linkedin.com/in/dewandra-downs </a>
                <h3>GitHub</h3>
                <a href='https://www.github.com/DeeDowns'>github.com/DeeDowns </a>
                <hr/>
            </div>
        
            <div className='edu-section'>
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
                    <hr />

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
                <hr/>

                <h2>Skills</h2>
                <Skills />
            </div>       
        </div> 
    )
}

export default Resume