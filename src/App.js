import Statistics from "./components/Statistics/Statistics";
import React, { useState } from "react";
import Section from "./components/Section/Section";
import Notifications from "./components/Notifications/Notifications";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

const App = () =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


const total = () => good + neutral + bad


const percentageGood = () => Math.floor((good / (total() || 1)) * 100);
const countFeedback = (evt) =>{
  switch (evt.target.innerHTML) {
    case 'good':
      setGood(prevGood => prevGood + 8);
      break;

    case 'neutral':
      setNeutral(prevNeut => prevNeut + 1);
      break;

    case 'bad':
      setBad(prevBad => prevBad + 1);
      break;

    default:
      throw new Error('Unknown option');
}
}
const currentTotal = total()
return (
  <>
    <Section title="Please leave a feedback">
      <FeedbackOptions
        onLeaveFeedback={countFeedback}
        options={["good", "neutral", "bad"]}
      />
    </Section>
    
      {currentTotal ? (
        <Statistics
    good={good}
    neutral={neutral}
    bad={bad}
    total={currentTotal}
    percentage={percentageGood()}
    /> ) : (
      <Notifications mess="There is no feedback" />
    )}
  </>
);



}

export default App;
