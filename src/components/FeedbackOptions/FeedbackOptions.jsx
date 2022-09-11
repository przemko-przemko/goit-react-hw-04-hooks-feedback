import React from 'react'
import Button from "../Button/Button"

const FeedbackOptions = ({ onLeaveFeedback, options  }) => {

    return (
        <>
            {options.map((option) =>(
                <Button key={option} value={option} onClick={onLeaveFeedback}/>
            ))}
        </>
    )
}

export default FeedbackOptions
