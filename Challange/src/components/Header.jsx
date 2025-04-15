import React from 'react'
import './Header.css'

class Header extends React.Component{

  constructor(){
    super()
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({currentTime: new Date().toLocaleTimeString()})
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
          <p>{this.state.currentTime}</p>
        </div>
      </div>
    </nav>
    );
  }
}

export default Header