import React from 'react'
import { Grid, Cell } from 'react-mdl';

const Education = (props) => {
    const { startYear, endYear, schoolName, schoolDescription} = props
    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <p>{startYear} - {endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4>{schoolName}</h4>
                    <p>{schoolDescription}</p>
                </Cell>
            </Grid>
        </div>
    )
}

export default Education