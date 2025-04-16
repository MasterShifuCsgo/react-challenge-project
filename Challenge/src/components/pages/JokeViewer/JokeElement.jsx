import React, { Component } from 'react';
import Jokes from './Jokes'
import './jokeElement.css'

class JokeElement extends Component {

  constructor() {
    super()
    this.state = {
      isAnswerShown: false,
    }
  }

  render() {
    return (
      <div className='joke-area'>
        <p
          className='joke-text'
          onClick={() => {
            this.setState({ isAnswerShown: false });
          }}
        >
          {this.props.question}
        </p>

        {this.state.isAnswerShown ? (
          <p
          className='joke-text answer'
          onClick={() => {            
            this.setState({ isAnswerShown: false });
          }}
        >
          {this.props.answer}
        </p>
        
        ) : (
          <button
            className='joke-area-button'
            onClick={() => {
              this.setState({ isAnswerShown: true });
            }}
          >
            Show answer
          </button>
        )}
      </div>
    );
  }
}

export default JokeElement;