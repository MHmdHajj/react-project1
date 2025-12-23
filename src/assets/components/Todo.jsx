import { useState } from "react"
function Todo (){
const [todos,setTodos] = useState([]);
const [input, setInput]= useState("");
const addtodo = ()=>{
if(!input.trim()) return;
setTodos([...todos,input]);
setInput("");
}
const deletetodo = (indextodelete) =>{
    setTodos(todos.filter((_,index) => index !== indextodelete))
}

return(
    <div>
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder='type a todo...'
        />
        <button onClick={addtodo}>Add</button>
        {todos.length==0 ? (<p>no todos</p>)
        :(
        <ul className="main">
            {todos.map((todo,ind)=>
            (<li key={ind} className="insidemain">
                {todo}
                <button onClick={()=>deletetodo(ind)}>
                    Delete
                </button>
            </li>)
            )}
        </ul>)
        }



    </div>
)
}
export default Todo