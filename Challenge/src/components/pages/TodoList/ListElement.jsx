import React from "react"
import './todoStyle.css'


function ListElement(props){

  
  return (
    <div className="todo-element column is-4">
      <input type="checkbox" name={props.id} checked={props.todo.checked} onChange={props.handleChange}/>
      <p className={`${props.todo.checked ? 'is-checked': ''}`}>{props.todo.desc}</p>
    </div>
  )

}

export default ListElement