import React, { useState } from 'react';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';
import Section from './Components/Section';
import Notification from './Components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickCounter = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const persentage = (good / countTotalFeedback()) * 100;
    return countTotalFeedback() === 0 ? 0 : Math.floor(persentage);
  };

  const keys = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section
        title="Please, leave feedback"
        children={
          <FeedbackOptions options={keys} onLeaveFeedback={clickCounter} />
        }
      />

      <Section
        title="Statistics"
        children={
          countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )
        }
      />
    </div>
  );
}
