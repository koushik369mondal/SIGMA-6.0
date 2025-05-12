import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { //state, action
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo); //direct mutation
        }
    }
});