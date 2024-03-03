import React, { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [todos, setTodos] = useState([{id : 1, name : 'todo 1', complete : false}])

  return (
    <>
      <ToDoList todos = {todos} />
      <input type="text" />
      <button>Add Tasks</button>
      <button>Clear Completed Tasks</button>
      <div>0 Tasks Remaining</div>
    </>

  );
}

export default App;
