import React from "react";
const ToDoList=({todolist,deleteHandler})=>{
    return(
        <div>
        {todolist.map((todo,index)=>
        <div key={index}>
        <h5>{todo}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>deleteHandler(index)}>Delete</button></h5>
         </div> )}
        </div>
    )
}



export default ToDoList;