import React from 'react';
import TodoLists from './TodoLists';


class TodoApp extends React.Component{
    constructor(){
        super();
        this.state={
            inputData:"",
            todoItems:[]
        }
    }
    changeTodoInput = (e) => {
        this.setState({inputData:e.target.value})
    }
    addTodo = (e) => {
        if(this.state.inputData!==''){
            const newTodoItems = [...this.state.todoItems,this.state.inputData];
            this.setState({todoItems:newTodoItems, inputData:""})
        }
    }


deleteTodo = (i) => {
    const todoItems =[...this.state.todoItems];
    const newTodoItems=todoItems.filter((value, key)=>{
        return i!==key
    })
    this.setState({todoItems:newTodoItems})
}

render(){
    return(
    <div className="input-group">
    <input type="text" placeholder="Add Task" className="form-crtl" onChange={this.changeTodoInput} value={this.state.inputData} />
    <div className="input-group-append">
    <button className="btn btn-success" onClick={this.addTodo}>Add</button>
    </div>
    <TodoLists items={this.state.todoItems} deleteTodo={this.deleteTodo} />
    </div>
    )
}
}
export default TodoApp;