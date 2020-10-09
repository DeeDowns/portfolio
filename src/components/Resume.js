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

                <p>Software Developer with background in customer service and the aviation industry. Experience creating full stack web applications. Team player with strengths in reliability and accuracy. Accustomed to collaborating on distinct teams.</p>

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
                <h2>Skills</h2>
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
                                Participated in an immersive full time, remote, collaborative and project-based program focused on Full Stack Web Development and Computer Science.
                            </li>
                            <li>
                                Participated in multiple Build Weeks, in which students (in different stages of the program) are grouped into teams, from different backgrounds (Web Development and Data Science) to build a minimum viable product web application. Students are assigned different roles within their team and tasked with planning, coordinating, collaborating, and programming as a team to execute respective criteria in a span of 4-5 days.
                            </li>
                            <li>
                                Participated in Peer Mentor program, in which students are paired with other students who are in the earlier stages of the program. Mentors and mentees meet daily to discuss material learned, any blockers, pair-program, practice mock interviews,  and offer general advice
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
                    <hr />

                <h2>Experience</h2>
                <Experience
                    startYear={'March 2016'}
                    endYear={'August 2020'}
                    jobName="Flight Attendant, Delta Air Lines, Boston, MA "
                    jobDescription={
                        <ul>
                            <li>
                                Promoted passenger satisfaction through prompt response times and problem solving issues that arose during flights.
                            </li>
                            <li>
                                Facilitated communication between cabin crew and flight deck prior to and during flights to ensure safe and smooth operations.
                            </li>
                            <li>
                                Directed customers in the optimal way to store luggage in order to maximize storage space.
                            </li>
                            <li>
                                Attended online and in-person customer service, conflict resolution, team work and communication trainings to stay up to date with procedures.
                        </li>
                        </ul>
                    }
                />

                <Experience
                    startYear={2015}
                    endYear={2016}
                    jobName="Recreational Gymnastics Coach, Sun Country Sports Center, Gainesville, FL"
                    jobDescription={
                        <ul>
                            <li>
                                Boosted athlete performance through spotting, verbal instruction, and demonstration of gymnastics fundamentals 
                            </li>
                            <li>
                                Collaborated with a team of coaches to set up lesson plans, lead classes, and supervise children
                            </li>
                            <li>
                                Maintained fun-filled atmosphere while remaining focused on participant development and safety
                            </li>
                            <li>
                            Frequented workshops and trainings strengthen knowledge of diverse spotting and coaching techniques in order to maximize athlete performance
                            </li>
                        </ul>
                    }
                />
                <hr/>
            </div>       
        </div> 
    )
}

export default Resume