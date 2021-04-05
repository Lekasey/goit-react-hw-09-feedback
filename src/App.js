import React, { Component } from 'react';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';
import Section from './Components/Section';
import Notification from './Components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickCounter = e => {
    const { name } = e.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0,
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const persentage = (good / this.countTotalFeedback()) * 100;
    return this.countTotalFeedback() === 0 ? 0 : Math.floor(persentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <div>
        <Section
          title="Please, leave feedback"
          children={
            <FeedbackOptions
              options={keys}
              onLeaveFeedback={this.clickCounter}
            />
          }
        />

        <Section
          title="Statistics"
          children={
            this.countTotalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="No feedback given" />
            )
          }
        />
      </div>
    );
  }
}

export default App;
