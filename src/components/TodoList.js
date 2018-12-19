import React from 'react';
import {ReactDOM} from 'react-dom';

import {TodoItem} from './TodoItemList';
import {TodoForm} from './TodoForm';
import '../index.css'
export class TodoList extends React.Component{
    constructor(){
        super();

        this.UpdateText=this.UpdateText.bind(this);
        this.addtext=this.addtext.bind(this);
        this.deleteText=this.deleteText.bind(this);
       
        this.editItem=this.editItem.bind(this);
        //this.chanetask=this.chanetask.bind(this);
       // this.addtask=this.addtask.bind(this);

        this.state={
            task:[
                {
                    Name:'Playing',
                    status:true

                },
                {
                    Name:'Cooking',
                    status:false
                },
                {
                    Name:'Reading',
                    status:true
                }
            ],
            text:'',
            currenttask:''
        }
    }

    editItem(index,newval){
        debugger;
        var tasks=this.state.task;
        var task=tasks[index];
        task['Name']=newval;

        this.setState({
            tasks
        })

    }
    UpdateText(newvalue){
            debugger;
            this.setState({
                
                text:newvalue.target.value
            });
            console.log(this.text);
     }

    addtext(evt){
        debugger;
        evt.preventDefault();
        let taskobj=this.state.task;
        let newtext=this.state.text;

        taskobj.push({
          Name:newtext,
          status:false

        })

        this.setState({
            task:taskobj,
            text:''
        })
    }

    deleteText(index){
        debugger;
        console.log(index);
        let taskobjnew=this.state.task;

        taskobjnew.splice(index,1);

        this.setState({
            task:taskobjnew
        })
    }
  
    render(){
        return(
            
                <section>
                    <TodoForm 
                    currenttask={this.state.text}
                     changetask={this.UpdateText}                     
                     addtask={this.addtext}
                     
                     />
                
                <ul>
                {
                    this.state.task.map((value,index)=>{
                        return <TodoItem key={index} 
                        Index={index} 
                        deleteText={this.deleteText}
                         displaylist={value}
                         editItem={this.editItem}/>
                    })
                
                }
                </ul></section>
            
        )
    }
}
