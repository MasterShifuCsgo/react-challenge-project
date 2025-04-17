
import React from "react";
import './style.css'

class Card extends React.Component{
    
  constructor(){
    super()
    this.state = {
      isLoaded: false,
    }
  }


  render(){
    return(
      <div className="column is-one-quarter card "> 
        <img 
        src={this.props.contact.image} 
        onLoad={() => {this.setState({isLoaded: true})}} 
        style={{display: this.state.isLoaded ? 'block': 'none'}}  
        alt="user image"
        />

        {!this.state.isLoaded && <p>Loading...</p>}
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
        <p>{this.props.contact.email}</p>
      </div>
    )
  }
}

export default Card;