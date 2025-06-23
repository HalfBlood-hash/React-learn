

import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todoTitle:" Todo Message",
            completed:false
        },
    ],
        updateTodo:(id,todoTitle)=>{},
        addTodo:(todoTitle)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{}  
    
});

export const TodoProvider=TodoContext.Provider  

export const useTodo = () => {
    return useContext(TodoContext)
}
