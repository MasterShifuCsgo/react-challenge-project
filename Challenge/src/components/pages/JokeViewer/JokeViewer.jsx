import React, { Component } from 'react';
import JokeElement from './JokeElement';
import Jokes from './Jokes'
import './jokeElement.css'

class JokeViewer extends Component {

  constructor(){
    super()

    this.state = {
      jokes: Jokes,
      activeJoke: 0,
    }
  }

  render() {

    const jokeCompoments = this.state.jokes.map((joke) =>{
      return <JokeElement key={joke.id} id={joke.id} question={joke.joke} answer={joke.answer}></JokeElement>
    })

    return (
      <div className='jokeViewer-area'>

        <div style={{display:"flex"}}>
          <div style={{MarginRight: 'auto'}}>
          <button className='button'
          onClick={() => 
          {this.setState(prev => 
          {return {
           activeJoke: prev.activeJoke > 0 ?
           prev.activeJoke - 1 :
           prev.activeJoke}})
           }}>Back</button>
        </div>

        <div style={{marginLeft: 'auto'}}>
          <button className='button'
          onClick={() => 
          {this.setState(prev => 
          {return {
           activeJoke: prev.activeJoke < this.state.jokes.length - 1?
           prev.activeJoke + 1 :
           prev.activeJoke}})
           }}>Next</button>
        </div>

        </div>
        {jokeCompoments[this.state.activeJoke]}        
      </div>
    );
  }
}

export default JokeViewer;