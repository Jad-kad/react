import React from 'react';
import './App.css'


export class ToDoAppList extends React.Component {
  constructor() {
    super()
    this.remove = this.remove.bind(this)
  }
  
  remove(element){
    let value = element.target.parentNode.querySelector('span').innerText
    this.props.remove(value)
  }

  render() {

    let items = this.props.tasks.map((element, index)=> {
      return <li description={element.description} done={element.done} key={index} className='li-in'><button className='button1' onClick={this.remove}>X</button> <span>{element.description}</span></li>
    })
    return (
        <ul className='ul-in'>
          {items}
        </ul>  
      )
  }
}