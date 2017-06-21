import React from 'react';
import {AddNewTask} from './addTask'
import {ToDoAppList} from './todoList.js'
import './App.css'
// import {tasks} from './index.js'


export class App extends React.Component {
  constructor(props) {
    super()
    this.state = {tasks: props.tasks}
   this.updateList = this.updateList.bind(this)
    this.removeTask = this.removeTask.bind(this)    
  }

updateList(text){
	let updatedTasks = this.state.tasks;
  console.log(`updated tasks is ${updatedTasks}`)
	updatedTasks.push({description: text,done:false})
	this.setState({tasks: updatedTasks})
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
 