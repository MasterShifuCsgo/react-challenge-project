import React, { Component } from 'react';
import ListElement from './ListElement';
import todos from './Todos';

class ToDoList extends Component {
  constructor(){
    super()
    this.state ={
      todos: todos,
      completedTodos: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
    
  }

  handleChange(event){
    //change the this.state.todo to its corresponding look        

    const {checked, name} = event.target;        

    this.setState(prev => {
      const newTodoList = prev.todos.map(
        
        (todo) => {                    
          if(todo.id == name){
            return {...todo, checked: checked}
          }          
          return todo
        }      
      )     

      const completedTodos = newTodoList.filter((todo) => {      
        return todo.checked
      }).length;    
      
      
      return {...prev, todos: newTodoList, completedTodos: completedTodos}; 
    })
      
  
  }

  clearTodos(){
    this.setState(prev => {  
      const newtodoList = prev.todos.filter((todo) => {
        return !todo.checked
      });    
      
      return {...prev, todos: newtodoList}
    })
  }


  render() {
    
    const TodoListElements = this.state.todos.map((todo) => {            
      return <ListElement key={todo.id} id={todo.id} handleChange={this.handleChange} todo={todo}></ListElement>
    }
    );

    return (
      <div className='has-text-white'>
        <div className='todo-header'>
          <p style={{marginRight: 'auto'}}>Amount of Completed Todos: {this.state.completedTodos}</p>
          <button style={{marginLeft: 'auto'}} className='button' onClick={this.clearTodos}>Clear Completed Todos</button>
        </div>
        {TodoListElements}        
      </div>
    );
  }
}

export default ToDoList;