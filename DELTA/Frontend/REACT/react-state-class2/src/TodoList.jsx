import { useState } from "react"

export default function TodoList() {
    let [todos, setTodos] = useState(["Sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        console.log("We have to add a new task")
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <br />
            <button onClick={addNewTask}>Add</button>
            <br />
            <br />
            <br />
            <br />
            <hr />

            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    )
}