import React,{useContext} from 'react'
export const TodoContext=React.createContext({
    todos:[{
        id:'1',
        todo:"todo",
        completed:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(todo,id)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
    
});
export const TodoProvider=TodoContext.Provider;
export function useTodo(){
    return useContext(TodoContext);
}

