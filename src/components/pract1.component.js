import React from 'react';
import ReactDOM from 'react-dom';

 class Child extends React.Component{
    render(){
        return (
            <li>
                {this.props.details.fname}
                </li>
        );
        } 
}

export class Parent extends React.Component{
    constructor(){
        super();
        this.city = {
            //name: ['Nagpur', 'Umred', 'Chandrapur']
            name:[{
                fname:"ram"
            },
            {
                fname:"syam"
            }
        ]
        }
        this.state='Maharashtra';
    }
    render(){
        return(         
           // <ul>
            //{
              //  this.city.name.map(function (name) {
                //    return <Child details={name} />
                //})
            //}

        //</ul>  
        <div>
            <h1> <Child details={this.state}/></h1>
            <ul>
           
             {
                this.city.name.map(function(name){
                return <Child key={name.fname} details={name}/>
                })
            }
            </ul>
        </div>      
        );
        
    }
    
}

