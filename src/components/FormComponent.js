import React from "react";

let id = 0
class Book
{
    constructor(id,taskName,priority,due)
    {
        this.id = id
        this.taskName = taskName
        this.priority = priority
        this.due = due
        this.order = id
    }
}

class FormComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value : '',
            select : 'low'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleValue = this.handleValue.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleSelect(event){
        this.setState({
            select : event.target.value
        })
    }
    handleValue(event){
        this.setState({
            value : event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        // let form = document.querySelector('.formComponent')
        let taskName = document.querySelector('.taskName').value;
        let priority = document.querySelector('select').value;
        let dueDate = document.querySelector('.dueDate').value;
        let bookObj = new Book(id,taskName,priority,dueDate)
        id += 1
        this.props.popForm(bookObj)
        this.props.enableForm(event);
    }
    render(){
        return(
            <form className="formComponent">
                <div>
                    <label>Task Name:</label>
                    <input className="taskName" type="text" onChange={this.handleValue} value={this.state.value}></input>
                </div>
                <div>
                    <label htmlFor="priority">Priority:</label>
                    <select id="priority" name="priority" value={this.state.select} onChange={this.handleSelect}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div>
                    <label>Due Date:</label>
                    <input className="dueDate" type='date'></input>
                </div>
                <input type="submit" className='submit' onClick={this.handleSubmit}></input>
            </form>
        )
    }
}

export default FormComponent