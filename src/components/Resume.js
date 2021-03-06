import React from 'react'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'

const Resume = () => {
    return (
        <div className='resume-container'>
            <div className='info-section'>
                <h1>Dewandra Downs</h1>
                <h2>Full Stack Web Developer</h2>
                <a href={require('../assets/dewandra_downs_resume-1.pdf')} target='_blank' rel="noopener noreferrer">
                    PDF Version
                </a>

                <hr/>

                <p>Software Developer with background in customer service and the aviation industry. Experience creating full stack web applications. Team player with strengths in reliability and accuracy. Accustomed to collaborating on distinct teams.</p>

                <hr/>
                <h2>Contact Info</h2>
                <h3>Phone</h3>
                <p>(352) 470-3501</p>
                <h3>Email</h3>
                <a href='mailto:dee_downs@outlook.com'>dee_downs@outlook.com</a>
                <h3>LinkedIn</h3>
                <a href='https://www.linkedin.com/in/dewandra-downs/'>linkedin.com/in/dewandra-downs </a>
                <h3>GitHub</h3>
                <a href='https://www.github.com/DeeDowns'>github.com/DeeDowns </a>
                <hr/>
                <h2>Technical Skills</h2>
                <Skills />
            </div>
        
            <div className='edu-section'>
                <h2>Education</h2>
                <Education
                    startYear={'June 2020'}
                    endYear={'December 2020'}
                    schoolName="Lambda School"
                    schoolDescription={
                        <ul>
                            <li>
                                An immersive full time, remote, collaborative and project-based program focused on Full Stack Web Development and Computer Science.
                            </li>
                            <li>
                                Participated in multiple Build Weeks, in which students were grouped into teams, assigned different roles and tasked with planning, coordinating, collaborating, and programming to create a minimum viable web application.
                            </li>
                            <li>
                                Partook in Peer Mentor program, in which students were mentors and mentees met daily to discuss learning material, any blockers, pair-program, practice mock interviews, and to offer general advice
                            </li>
                        </ul>
                    }
                />

                <Education
                    startYear={'August 2012'}
                    endYear={'May 2016'}
                    schoolName="University of Florida, Gainesville, FL"
                    schoolDescription="Bachelor of Arts in Anthropology"
                />
            </div> 
            
            <div className='work-section'>
                <h2>Experience</h2>
                <Experience
                    startYear={'March 2016'}
                    endYear={'August 2020'}
                    jobName="Flight Attendant, Delta Air Lines, Boston, MA "
                    jobDescription={
                        <ul>
                            <li>
                                Promoted passenger satisfaction through prompt response times and solving issues that arose during flight.
                            </li>
                            <li>
                                Facilitated communication between cabin crew and flight deck prior to and during flights to ensure safe and smooth operations.
                            </li>
                            <li>
                                Attended online and in-person customer service, conflict resolution, teamwork and communication training to stay up to date with procedures.
                        </li>
                        </ul>
                    }
                />

                <Experience
                    startYear={2015}
                    endYear={2016}
                    jobName="Gymnastics Coach, Sun Country Sports Center, Gainesville, FL"
                    jobDescription={
                        <ul>
                            <li>
                                Boosted athlete performance through spotting, verbal instruction, and demonstration of gymnastics fundamentals 
                            </li>
                            <li>
                                Collaborated with a team of coaches to set up lesson plans, lead classes, and supervise participants
                            </li>
                            <li>
                                Maintained fun-filled atmosphere while remaining focused on participant development and safety
                            </li>
                            <li>
                            Frequented workshops to strengthen knowledge of diverse spotting and coaching techniques in order to maximize athlete performance
                            </li>
                        </ul>
                    }
                />
            </div>     
        </div> 
    )
}

export default Resume