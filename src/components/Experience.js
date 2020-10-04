import React from 'react'
import { Grid, Cell } from 'react-mdl';

const Experience = (props) => {
    const { startYear, endYear, jobName, jobDescription} = props

    return (
       <Grid>
           <Cell col={4}>
               <p>{startYear} - {endYear}</p>
           </Cell>
           <Cell col={8}>
               <h4>{jobName}</h4>
               <p>{jobDescription}</p>
           </Cell>
       </Grid>
    )
}

export default Experience