import React from 'react'


const Experience = (props) => {
    const { startYear, endYear, jobName, jobDescription} = props

    return (
       <div className='exp-container'>
           <div className='exp-years'>
               <h3>{startYear} - {endYear}</h3>
           </div>
           <div className='exp-job-info'>
               <h3>{jobName}</h3>
               <p>{jobDescription}</p>
           </div>
       </div>
    )
}

export default Experience