import React from 'react'


const Experience = (props) => {
    const { startYear, endYear, jobName, jobDescription} = props

    return (
       <div className='exp-container'>
            <h3>{jobName}</h3>
            <h3>{startYear} - {endYear}</h3>
            <div>{jobDescription}</div>
       </div>
    )
}

export default Experience