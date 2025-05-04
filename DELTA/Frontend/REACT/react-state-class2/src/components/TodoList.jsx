import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    // modified: added `completed: false` to initial todo
    let [todos, setTodos] = useState([
        { task: "sample-task", id: uuidv4(), completed: false },
    ]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        // modified: new todo includes `completed: false`
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), completed: false }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        // fixed bug: was referencing outer `todos`, changed to `prevTodos`
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // ✅ fixed here
    };

    let upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    };

    let upperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    // NEW: toggle completed state
    let toggleCompleted = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    return (
        <div>
            <input
                type="text"
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
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
                    <li key={todo.id}>
                        {/*  NEW: line-through if todo.completed is true */}
                        <span
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}
                        >
                            {todo.task}
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        <button onClick={() => upperCaseOne(todo.id)}>UpperCaseOne</button>
                        {/*  NEW: Check/Uncheck button */}
                        <button onClick={() => toggleCompleted(todo.id)}>
                            {todo.completed ? "Uncheck" : "Check"}
                        </button>
                    </li>
                ))}
            </ul>

            <br />
            <button onClick={upperCaseAll}>Uppercase All</button>
        </div>
    );
}
