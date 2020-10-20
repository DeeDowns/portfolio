import React from 'react'

const Education = (props) => {
    const { startYear, endYear, schoolName, schoolDescription} = props
    return (
        <div className='edu-container'>
            <h3>{schoolName}</h3>
            <h3>{startYear} - {endYear}</h3>
            <div>{schoolDescription}</div>
        </div>
    )
}

export default Education