import React, { Component } from 'react';
import './Statistics.css';

class Statistics extends Component {
  render() {
    return (
      <ul className="statistics">
        <li className="statistics__item">Good: {this.props.good}</li>
        <li className="statistics__item">Neutral: {this.props.neutral}</li>
        <li className="statistics__item">Bad: {this.props.bad}</li>
        <li className="statistics__item">Total: {this.props.total}</li>
        <li className="statistics__item">
          Positive percentage: {this.props.positivePercentage}%
        </li>
      </ul>
    );
  }
}

export default Statistics;
