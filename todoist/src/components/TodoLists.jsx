import React from "react";


class TodoLists extends React.Component{
    render(){   
        return(
            <ul className="list-group list-group-flush">
            {
                this.props.items.map((value, i)=>{
               return (
               <React.Fragment key={i}>
               <li className="list-group-item bg-light d-flex justify-content-between">{value}
               <button className="btn text-danger badge" onClick={()=>{this.props.deleteTodo(i)}}>X</button>
               </li>     
               </React.Fragment>
               )
                })
               }
            </ul> 
            );
    }
}
export default TodoLists;