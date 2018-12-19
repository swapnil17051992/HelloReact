import React from 'react';
import ReactDOM from 'react-dom';
//import '../css/_login.css';
//import '../css/_loginControl.css';
 class LoginParent extends React.Component{
    render(){
        return(
            <div className="box">
            <h1>Dashboard</h1>
            <input type="text" className="email" name="email" placeholder="Email"/>
            <input type="password" className="email" name="password" placeholder="Password"/>
            <a href="#"><div className="btn">Sign In</div></a>

            <a href="#"><div id="btn2">Sign Up</div></a> 

            </div> 
        );
    }
}

export class LoginChild extends React.Component{
    render(){
        return(
           
<LoginParent/>

        )
    }
}