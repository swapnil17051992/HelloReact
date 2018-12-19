import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

export class Pract4Main extends React.Component{

    constructor(){
        
        super();
        this.chnagestatus=this.chnagestatus.bind(this);
        this.state={
            tasks:[
                {
                    name:"Swapnil",
                    completed:true
                },
                {
                    name:"Ram",
                    completed:false
                },
                {
                    name:'Syam',
                    completed:true
                }
            ]
        }
    }

    chnagestatus(index){
console.log(this.state.tasks[index]);

    }
    render(){
        return(
            <ul>
                {
                    this.state.tasks.map((task,index)=>{
                        return <Pract4Child Index={index} clickhandeler={this.chnagestatus} details={task} key={task.name}/>
                    })
                }
            </ul>
          )
        
    }
}

export class Pract4Child extends React.Component{
    render(){
        return(
            <li onClick={()=>{
                this.props.clickhandeler(this.props.Index);
            }
            } className={this.props.details.completed?'completed':''}>
                {this.props.details.name}
            </li>
        )
    }
}