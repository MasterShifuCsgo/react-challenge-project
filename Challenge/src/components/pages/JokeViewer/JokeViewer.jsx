import React, { Component } from 'react';
import JokeElement from './JokeElement';
import Jokes from './Jokes'
import './jokeElement.css'

class JokeViewer extends Component {

  constructor() {
    super()

    this.state = {
      jokes: Jokes,
      activeJoke: 0,
    }

    this.handleJokeButton = this.handleJokeButton.bind(this);
  }

  handleJokeButton(direction){
            
    this.setState((prev) => {      
      const condition = direction > 0 ? prev.activeJoke < this.state.jokes.length - 1 : prev.activeJoke > 0;      
      return {activeJoke: condition ? prev.activeJoke + direction : prev.activeJoke}
    })

  }

  render() {

    const jokeComponents = this.state.jokes.map((joke) => {
      return <JokeElement key={joke.id} id={joke.id} question={joke.joke} answer={joke.answer}></JokeElement>
    })

    return (
      <div className='jokeViewer-area'>

        <div style={{ display: "flex" }}>
          <div style={{ MarginRight: 'auto' }}>
            <button className='button'
              onClick={() => {this.handleJokeButton(-1)}}>Back</button>
          </div>

          <div style={{ marginLeft: 'auto' }}>
            <button className='button'
              onClick={() => {this.handleJokeButton(1)}}>Next</button>
          </div>

        </div>
        {jokeComponents[this.state.activeJoke]}
      </div>
    );
  }
}

export default JokeViewer;