import { useState } from "react";
import "./App.css"
import { ToDoList } from "./components/ToDoList";
import { ToDoContext } from "./context";

export default function App() {
  const [todos, setTodos] = useState([
    {id:101, text:"Go for a walk", completed:false},
    {id:102, text:"Have a coffee", completed:true},
    {id:103, text:"Do workout", completed:false},
  ])

  const [filter, setFilter] = useState('all')

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

return <>
    <ToDoContext.Provider value={{todos: filteredTodos, setTodos, setFilter}}>
      <ToDoList/>
    </ToDoContext.Provider>
  </>
}