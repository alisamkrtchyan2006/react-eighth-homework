import { AddToDo } from "./AddToDo"
import { ToDoFilter } from "./ToDoFilter"
import { List } from "./List"

export const ToDoList = () => {
    return <div>
        <h1>ToDoList</h1>
        <AddToDo/>
        <ToDoFilter/>
        <List/>
    </div>
}