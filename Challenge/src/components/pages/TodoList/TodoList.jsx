import React, { Component } from 'react';
import ListElement from './ListElement';
import todos from './Todos';

class ToDoList extends Component {
  constructor(){
    super()
    this.state ={
      todos: todos
    }

    this.handleChange = this.handleChange.bind(this);

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
      return {...prev, todos: newTodoList}; 
    })
  }

  render() {

    const TodoListElements = this.state.todos.map((todo) =>     
      <ListElement key={todo.id} id={todo.id} handleChange={this.handleChange} todo={todo}></ListElement>
    );

    return (
      <div>
        {TodoListElements}        
      </div>
    );
  }
}

export default ToDoList;