import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
 export class TestParent extends React.Component{
    
    constructor(){
        super();
        this.name='swapnil';
       // this.fnclick=this.fnclick.bind(this);
    }

    fnclick(e){
//alert(this.name);
alert(e);
console.log({input:e.target.outerHTML});
    }
    handleChange(e) {
       alert( this.setState({ input: e.target.value }));
      }
      
    render(){
        return(
            
            <div  onClick={(a)=>{
                this.fnclick(a);
            }}> 
                <h2>Swapnnil good</h2>
            <input type='button' className={'completed'} index={this} value='click'/>
            <input type="button" value="send" onClick={this.handlechange} className={'completed'}/>
            <input type="textbox" onChange={this.handlechange}/>
            </div>
        );
    }
}
