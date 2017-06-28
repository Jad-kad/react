import React from 'react';
import {AddNewTask} from './components/AddNewTask'
import {ToDoAppList} from './components/ToDoAppList.js'
import './App.css'


export class App extends React.Component {
  constructor(props) {
    super()
    this.state = {tasks: props.tasks}
    this.updateList = this.updateList.bind(this)
    this.removeTask = this.removeTask.bind(this)    
  }

updateList(text){
	let updatedTasks = this.state.tasks;
//console.log(`updated tasks is ${updatedTasks}`)
    if (text === '') {
      alert(" please enter a task")
    }
    else{
	updatedTasks.push({description: text,done:false})
	this.setState({tasks: updatedTasks})
    }
} 

removeTask(text){
	let updatedTasks = this.state.tasks;
	updatedTasks.splice(updatedTasks.indexOf(text), 1)
	this.setState({tasks: updatedTasks})
} 


 render() {
     return (
       <div className='div-main'>
        <h1 className='todo-header'> Todo app </h1>
        <AddNewTask className='form1' updateList={this.updateList} />
        <ToDoAppList tasks={this.state.tasks} remove={this.removeTask} />     
       </div>
     	)
   }
}
 