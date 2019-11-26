import React, { useState } from 'react';
import Todo from './Todo';

const initialInput = {
  todo: "",
  description: "",
  completed: false
}

function TodoList({ todos, handleChange, values, addTodo }) {

  const handleSubmit = e => {
    addTodo()
  }
  return (
    <div>
      <div>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={values.todo}
          name="todo"
          onChange={handleChange}
        />
        <input
          value={values.description}
          name="description"
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default TodoList