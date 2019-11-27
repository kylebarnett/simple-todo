import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import data from './data';

function App() {
  const [todos, setTodos] = useState(data)
  const [values, setValues] = useState({
    todo: "",
    completed: false
  })

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const addTodo = info => {
    const newTodo = {
      todo: values.todo,
      completed: false
    }
    setTodos({ ...todos, newTodo })
  }
  return (
    <div className="App">
      <TodoList todos={todos} values={values} addTodo={addTodo} handleChange={handleChange} />
    </div>
  );
}

export default App;
