import { useContext } from "react";
import { ToDoContext } from "../context";

export const ToDoItem = ({todo}) => {

    const { todos, setTodos } = useContext(ToDoContext);

    const toggleTodo = () => {
        setTodos(todos.map(t =>
          t.id === todo.id ? { ...t, completed: !t.completed } : t
        ));
    }

    const deleteTodo = () => {
        setTodos(todos.filter(t => t.id !== todo.id));
    }
    
    return <div className="todo"
                style={{
                    opacity: todo.completed ? 0.5 : 1
                }}
    >
      <p className="todoText" style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}>
        {todo.text}
      </p>
      <button 
        className="complete"
        onClick={toggleTodo}
        style={{
          backgroundColor: todo.completed ? "yellow" : "green",
          color: todo.completed ? "black" : "white",
          padding: todo.completed ? "0.6em 2.2em" : "0.6em 1.2em"
        }}
       >
        {todo.completed ? 'Cancel' : 'Completed'}
      </button>
      <button className="delete" onClick={deleteTodo}>
        Delete
      </button>
    </div>
}