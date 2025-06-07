import {createContext, useContext} from 'react';
import React from 'react';



export const ToDoContext = createContext({
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

export const ToDoProvider = ToDoContext.Provider;



export default function useTodo() {
    return useContext(ToDoContext);
}