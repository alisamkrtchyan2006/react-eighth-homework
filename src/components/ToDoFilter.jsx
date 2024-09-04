import { useContext } from "react";
import { ToDoContext } from "../context";

export const ToDoFilter = () => {
    const { setFilter } = useContext(ToDoContext);

    return <div>
        <h3>Filter</h3>
        <button className="filterButton" onClick={() => setFilter('all')}>All</button>
        <button className="filterButton" onClick={() => setFilter('active')}>Active</button>
        <button className="filterButton" onClick={() => setFilter('completed')}>Completed</button>
    </div>
}