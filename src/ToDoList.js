import React from "react";
const ToDoList=({todolist,deleteHandler,markTodo})=>{
    return(
        <div>
        {todolist.map((todo,index)=>
        <div key={index}>
        <h5>{todo}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>deleteHandler(index)}>Delete</button>
        {todo}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>markTodo(index)}>Completed</button></h5>
         </div> )}
        </div>
    )
}



export default ToDoList;