import React from 'react'

class Task extends React.Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUp = this.handleUp.bind(this)
        this.setColor = this.setColor.bind(this)
        this.handleDown = this.handleDown.bind(this)
    }
    setColor(){
        if(this.props.oneTask.priority === 'low'){
            return '#6AF554'
        }
        else if(this.props.oneTask.priority === 'medium'){
            return '#EAED5C'
        }
        else{
            return '#F55454'
        }
    }
    handleDown(event){
        this.props.oneTask.order++
        event.target.parentElement.style.order = this.props.oneTask.order
    }
    handleUp(event){
        this.props.oneTask.order--
        event.target.parentElement.style.order = this.props.oneTask.order
    }
    handleDelete(event){
        event.stopPropagation();
        event.target.parentElement.remove()
    }
    render(){
        return(
            <li style={{borderLeft: `5px solid ${this.setColor()}`}}>
                <input type='checkbox'></input>
                <div className='strikethrough'>{this.props.oneTask.taskName}</div>
                <div className='strikethrough date'>{this.props.oneTask.due}</div>
                <div className='deleteIcon' onClick={this.handleDelete}></div>
                <div className='arrow up-arrow' onClick={this.handleUp}></div>
                <div className='arrow down-arrow' onClick={this.handleDown}></div>
            </li>
        )
    }
}

export default Task