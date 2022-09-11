import React from 'react'
import { StatisticsDiv } from './Statistics_styled'


const  Statistics = ({ good, neutral, bad, total, percentage}) => {
    
    return (
        <StatisticsDiv>
       <ul>
           <li>Good: {good} </li>
           <li>Neutral: {neutral}</li>
           <li>Bad: {bad}</li>
        <li>Total feedback: {total}</li>
        <li>Percentage of good feedback: {percentage} %</li>
       </ul>
       </StatisticsDiv>
    )
}

export default Statistics
