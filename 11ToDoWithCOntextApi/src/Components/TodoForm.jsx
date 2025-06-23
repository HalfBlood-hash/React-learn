import { useState } from "react"
import {useTodo} from '../Context/TodoContext'


export default function TodoForm()
{
    const [formValue,SetFormValue]=useState("");
    const{addTodo,todos}=useTodo();
  
    const add=(e)=>{
        e.preventDefault();
        if(!formValue) return 
        addTodo({todoTitle:formValue,completed:false})
        console.log(todos)
        SetFormValue("")
    }
   
    return(
        <>
         <form  className="flex" onSubmit={add}>
            <input
                type="text"
                value={formValue}
                onChange={(e)=>SetFormValue(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
        </>
    )
}