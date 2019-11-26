import React from 'react';

function Todo({ todo }) {
  return (
    <div>
      <h1>{todo.todo}</h1>
      <p>{todo.description}</p>
    </div>
  )
}

export default Todo