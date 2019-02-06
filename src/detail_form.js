import React from 'react';
import ReactDOM from 'react-dom';
//import bootstrap from 'bootstrap';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import {Ajaxcall} from '../components/Ajx.dropdownlist'

export class UserInfo extends React.Component{
    constructor(){
        super();
        this.state={
            userdata:[],
            addressdata:[],
            companydata:[]
        }
    }

componentDidMount(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/users/1",
        success:(data)=>{
           this.setState({
               userdata:data,
               addressdata:data.address,
               companydata:data.company
           })
        }
    })
}
render(){
        return(
            <section>
                <div className="row">
                <div className="col-lg-2"></div>

                <div className="col-lg-8">
                    <h2>
                    <b>ABOUT ME</b>
                    </h2>
                </div>
                    
                </div>

                <div className="row">
                    <div className="col-lg-2">                
                    </div>
                    <div className="col-lg-8">
                        <h4><i className="icon-user mr-2"></i>Personal Info</h4>
                            <p>We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites. Website without visitors is like a ship lost in the horizon</p>
                    </div>
                    <div className="col-lg-2">               
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2">                
                    </div>
                    
                        <div className="col-lg-2">
                            <h5>Personal</h5>
                        </div>
                        <div className="col-lg-2">                
                    </div>
                        <div className="col-lg-2">
                            <h5>Address</h5>
                           
                        </div>
                    <div className="col-lg-2">               
                    </div>
                </div>

               

                <div className="row">
                    <div className="col-lg-2">                
                    </div>
                        <div className="col-lg-4">
                            <b>First Name :</b>
                            &nbsp;
                            <label>{this.state.userdata.name}</label>
                        </div>
                        <div className="col-lg-4">
                            <b>Street :</b>
                            &nbsp;
                            <label>{this.state.addressdata.street}</label>
                        </div>
                    <div className="col-lg-2">               
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2">                
                    </div>
                        <div className="col-lg-4">
                            <b>User Name :</b>
                            &nbsp;
                            <label>{this.state.userdata.username}</label>
                        </div>
                        <div className="col-lg-4">
                            <b>Suite :</b>
                            &nbsp;
                            <label>{this.state.addressdata.suite}</label>
                        </div>
                    <div className="col-lg-2">               
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2">                
                    </div>
                        <div className="col-lg-4">
                            <b>Email   :</b>
                            &nbsp;
                            <label>{this.state.userdata.email}</label>
                        </div>
                        <div className="col-lg-4">
                            <b>City   :</b>
                            &nbsp;
                            <label>{this.state.addressdata.city}</label>
                        </div>
                    <div className="col-lg-2">               
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2">                
                    </div>
                        <div className="col-lg-4">
                            <b>Phone   :</b>
                            &nbsp;
                            <label>{this.state.userdata.phone}</label>
                        </div>
                        <div className="col-lg-4">
                            <b>Zip Code :</b>
                            &nbsp;
                            <label>{this.state.addressdata.zipcode}</label>
                        </div>
                    <div className="col-lg-2">               
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2">                
                    </div>
                        <div className="col-lg-4">
                            <b>Website   :</b>
                            &nbsp;
                            <label>{this.state.userdata.website}</label>
                        </div>
                       
                    <div className="col-lg-2">               
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2">                
                    </div>
                        <div className="col-lg-4">
                            <b>Company  :</b>
                            &nbsp;
                            <label>{this.state.companydata.name}</label>
                        </div>
                        
                    <div className="col-lg-2">               
                    </div>
                </div>
                
            </section>
            
        )
}
}
