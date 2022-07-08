import React from 'react';
import Task from './Task';
class ToDoList extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let listItems = []
        listItems = this.props.taskList.map((element)=><Task oneTask={element} key={element.id}></Task>)    
        return(
            <ul className='toDoList'>
                {listItems}
            </ul>
        )
    }
}

export default ToDoList