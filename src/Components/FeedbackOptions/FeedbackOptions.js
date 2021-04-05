import React, { Component } from 'react';
import './FeedbackOptions.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(option => {
          return (
            <button
              key={option}
              type="button"
              name={option}
              className="button"
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
