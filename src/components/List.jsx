import { useContext } from "react";
import { ToDoContext } from "../context";
import { ToDoItem } from "./ToDoItem";

export const List = () => {

    const { todos } = useContext(ToDoContext);

    return <div>
        <h3>List</h3>
        <ul className="list" >
            {
                todos.map(todo => (
                        <li key={todo.id}>
                            <ToDoItem todo={todo} />
                        </li>
                ))
            }
        </ul>
    </div>
}