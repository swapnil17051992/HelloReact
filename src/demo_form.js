import React from 'react';
import ReactDOM from 'react-dom';
//import bootstrap from 'bootstrap';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import {Ajaxcall} from '../components/Ajx.dropdownlist'
export class Userform extends React.Component{
    constructor(){
        super();
        this.state={
            userdata:[],
            addressdata:[]
        }
    }

componentDidMount(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/users/1",
        success:(data)=>{
           this.setState({
               userdata:data,
               addressdata:data.address
           })
        }
    })
}

    render(){
        return(
            <section>
            <div className="row">
                 <div className="col-lg-4 seprater">
                 <input type="text" className="form-control" value={this.state.userdata.name}></input>
                 </div>
            </div>
             <div className="row">
                 <div className="col-lg-4 seprater">
                 <input type="text" className="form-control" value={this.state.userdata.username}></input>
                 </div>
            </div>
            <div className="row">
                 <div className="col-lg-12 seprater">
                 {/* <input type="text" className="form-control" value={this.state.userdata.email}></input> */}
                 <Ajaxcall />
                 </div>
            </div>
            <div className="row">
                 <div className="col-lg-4 seprater">
                 <input type="text" className="form-control" value={this.state.addressdata.street}></input>
                 </div>
            </div>
            <div className="row">
                 <div className="col-lg-4 seprater">
                 <input type="text" className="form-control" value={this.state.userdata.naem}></input>
                 </div>
            </div>
            <div className="row">
                 <div className="col-lg-4 seprater">
                 <input type="text" className="form-control" value={this.state.userdata.naem}></input>
                 </div>
            </div>
            <div className="row">
                 <div className="col-lg-4 seprater">
                 <input type="text" className="form-control" value={this.state.userdata.naem}></input>
                 </div>
            </div>
            <div className="row">
                 <div className="col-lg-4 seprater">
                 <input type="text" className="form-control" value={this.state.userdata.naem}></input>
                 </div>
            </div>
            </section>
        )
    }
}
