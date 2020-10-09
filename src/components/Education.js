import React from 'react'

const Education = (props) => {
    const { startYear, endYear, schoolName, schoolDescription} = props
    return (
        <div className='edu-container'>
            <div className='edu-years'>
                <h3>{startYear} - {endYear}</h3>
            </div>
            <div className='edu-school-info'>
                <h3>{schoolName}</h3>
                <p>{schoolDescription}</p>
            </div>
        </div>
    )
}

export default Education