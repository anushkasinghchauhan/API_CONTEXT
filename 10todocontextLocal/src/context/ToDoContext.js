import {createContext, useContext} from 'react';
import React from 'react';



export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const ToDoProvider = TodoContext.Provider;



export default function useTodo() {
    return useContext(TodoContext);
}