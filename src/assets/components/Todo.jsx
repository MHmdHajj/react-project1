import { useState } from "react"
function Todo (){
const [todos,setTodos] = useState([]);
const [input, setInput]= useState("");
const [hours,setHours]= useState("0");
const [minutes,setMinutes] = useState("0");

const addtodo = (e)=>{
    e.preventDefault();
    const h = Number(hours);
    if (!Number.isFinite(h) || h<0 ) {
       alert("Hours must be >= 0.");
        return;
    }
    const m = Number(minutes);
    if (!Number.isFinite(m) || m < 0 || m > 59) {
       alert("Minutes must be between 0 and 59.");
        return;
    }
    if (h === 0 && m === 0) {
        alert("Please set a duration (hours or minutes).");
        return;
    }
    if(!input.trim()){
        alert("Please enter a todo")
        return;
    }
    const duration = ((h*60+m)*60*1000);
    const creatAt = Date.now();
    const dueTO = creatAt + duration;
    const NewTodo = {
      id : crypto.randomUUID(),
      value: input,
      creatAt,
      dueTO,
    }
    if(!input.trim()) return;
    setTodos([...todos,NewTodo]);
    setInput("");
    setHours("0");
    setMinutes("0");
}
const deletetodo = (indextodelete) =>{
    setTodos(todos.filter((todo) => todo.id !== indextodelete))
}

return(
    <div className="parent">
        <div className="enter">
        <form onSubmit={addtodo}>
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder='type a todo...'
        />
        <label className="l1">
            Hours: 
            <input 
            type="number"
            min={0}
            max={24}
            step={1}
            value={hours}
            onChange={(e)=>setHours(e.target.value)} />
        </label>
        <label className="l1">
            Minutes: 
            <input  
            type="number"
            min={0}
            max={59}
            step={1}
            value={minutes}
            onChange={(e)=>setMinutes(e.target.value)}
            />
        </label>
        <button type="Submit">Add</button>
        </form>
        </div>
        <div className="todos">
            {
                todos.length==0 ? (<p>no todos</p>)
                :(
                <ul className="main">
                    {todos.map((todo)=>
                    (<li key={todo.id} className="insidemain">
                        <span>
                            {todo.value}
                            <br />
                            starts at: {new Date(todo.creatAt).toLocaleString()}
                            <br />
                            ends at: {new Date(todo.dueTO).toLocaleString()}
                        </span>
                        <br />
                        <button onClick={()=>deletetodo(todo.id)}>
                            Delete
                        </button>
                    </li>)
                    )}
                </ul>)
        
            }
        </div>



    </div>
)
}
export default Todo