import React from "react";
import ToDoList from "./ToDoList";
import FormComponent from "./FormComponent";

class ToDoArea extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showForm : false,
            taskArray : []
        }
        this.addTask = this.addTask.bind(this)
        this.arrayHandler = this.arrayHandler.bind(this)
    }
    addTask(event){
        // console.log(event)
        let main = document.querySelector('main')
        if (event.target.classList.value === 'addTask')
        {
            main.setAttribute('id','overlay')
            this.setState({
                showForm: true
            })
        }
        else if (event.target.classList.value === 'submit'){
            main.removeAttribute('id')
            this.setState({
                showForm: false
            })
        }
    }
    arrayHandler(newArray){
        this.setState({
            taskArray : [...this.state.taskArray,newArray]
        },() => {console.log(this.state.taskArray)})
    }
    render(){
        let form;
        if(this.state.showForm){
            form = <FormComponent popForm={this.arrayHandler} enableForm={this.addTask}></FormComponent>
        }
        else{
            form = null
        }
        return (
            <main>
                <h1>ToDo App</h1>
                <ToDoList taskList={this.state.taskArray}></ToDoList>
                <div className="addTask" onClick={this.addTask}>
                    <svg className="addTask" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#D9D9D9" viewBox="0 0 16 16">
                        <path className="addTask" fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                    <p className="addTask">Add Task</p>
                </div>
                {form}
            </main>
        )
    }
}

export default ToDoArea