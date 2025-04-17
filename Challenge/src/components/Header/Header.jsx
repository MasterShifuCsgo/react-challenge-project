import React from 'react'
import './Header.css'

class Header extends React.Component{

  constructor(){
    super()
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
      greeting: '',
    }
  }

  componentDidMount(){
    
    const time = new Date().getHours();
    let greeting;
    if( 5 <= time < 12 ){
      greeting = "Good morning";          
    }
    if(12 <= time < 17){
      greeting = "Good afternoon";
    }
    if(17 <= time < 21){
      greeting = "Good evening";
    }
    if(21 <= time < 5){
      greeting = "Good night";
    } 

    setInterval(() => {                     
      this.setState({currentTime: new Date().toLocaleTimeString(), greeting: greeting})

    },1000)




  }

  render() {
    
    const navbarItems = this.props.sections.map((section) => {
      return (
        <a key={section} className={`navbar-item no-select ${this.props.activeSession === section ? 'is-active': ''}`} name={section} onClick={this.props.changeSession}>
          {section}
        </a>
      )
    })

    return (
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">      

      <div className="navbar-menu">
      <div className="navbar-start">
      {navbarItems}
      </div>      
        <div className="navbar-end time">
          <p>{this.state.greeting}</p>
          <p>{this.state.currentTime}</p>
        </div>
      </div>
    </nav>
    );
  }
}

export default Header