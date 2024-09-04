import { useContext, useState } from "react"
import { ToDoContext } from "../context"

export const AddToDo = () => {

    const [text, setText] = useState("")
    const { todos, setTodos } = useContext(ToDoContext)

    const addTodo = () => {
        if (text.trim() === "") {
            alert("Todo-ն չի կարող դատարկ լինել!")
            return;
        }

        setTodos([...todos, {text, completed:false, id:Date.now()}])
        setText("")
    }
   
    return <div>
        <input
            className="add"
            type="text"
            placeholder="add todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button className="addButton" onClick={addTodo}>Add</button>
    </div>
}