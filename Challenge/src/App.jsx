import React from "react"
import Header from './components/Header/Header.jsx'
import TodoList from './components/pages/TodoList/TodoList.jsx'
import JokeViewer from './components/pages/JokeViewer/JokeViewer.jsx'
import ContactCards from './components/pages/ContactCards/ContactCards.jsx'


class App extends React.Component{
    constructor(){
      super()
      this.state = {
        sections: ['To-Do List', 'Joke Viewer', 'Contact Cards'],
        currentSection: ''
      }
      
      this.setCurrentSection = this.setCurrentSection.bind(this);

    }  

    setCurrentSection(event){
      const {name} = event.target;    
      this.setState({currentSection: name});
    }

    render(){        

      // since no routing, it filters through the list and looks for the one that matches the searched one.      
      let display;
        if(this.state.currentSection === 'To-Do List'){
          display = <TodoList></TodoList>
        }
        
        if(this.state.currentSection === 'Joke Viewer'){
          display = <JokeViewer></JokeViewer>
        }
        
        if(this.state.currentSection === 'Contact Cards'){          
          display = <ContactCards></ContactCards>          
        }

        

    return (
    <>
      <Header sections={this.state.sections} activeSession={this.state.currentSection} changeSession={this.setCurrentSection}></Header>
      <div className="container">
          <div className="section">
            <h1 className="title">{this.state.currentSection}</h1>  
          </div>      
          {display}
      </div>
    </>
    )
  }
}

export default App
