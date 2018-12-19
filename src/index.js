import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

import {Pract} from './components/pract.component';
import {Parent} from './components/pract1.component';
import {TestParent} from './components/pract2.component';
//import {LoginParent} from './css/_login.css';
import { LoginChild } from './components/Login.Component';
//import {Pract4Main} from './components/pract4.component';

//import {Pract5P} from './components/pract5.component'

import {TodoList} from './components/TodoList'
class Hello extends React.Component {
    render() {
        return (
            <h1>Hello Swap</h1>
            
        )
    }
}

class World extends React.Component {
    render() {
        return (
            <h1>Swapnil</h1>
        )
    }
}

class Helloworld extends React.Component {
    render() {
        return (
            <section>
                
                <TestParent />
                
            </section>
        )
    }
}

class Demo extends React.Component {
    getFName() {
        return 'swapnil';
    }
    getLName() {
        return 'kurjekar';
    }
    constructor() {
        super();
        this.city = "Nagpur";
    }
    render() {
        return (
            <div>
                <section className="foo">
                    Hello
            </section>
                <section>
                    <Helloworld />
                </section>
                <section>
                    {2 + 5}
                </section>
                <section>
                    {this.getFName()} {this.getLName()}
                </section>
                <h1>
                    {this.city}
                </h1>
                <input type="text" value={this.city} />
            </div>
        )
    }
}

class Demo1 extends React.Component {
    constructor() {
        super();
        this.state = "Maharashtra";
        this.city = {
            name: ['Nagpur', 'Umred', 'Chandrapur']
        }
    }
    render() {
        return (
            <ul>
                {
                    this.city.name.map(function (name) {
                        return <Pract details={name} />
                    })
                }
            </ul>
        );
    }
}

class Login extends React.Component{
    render(){
        return(
            <LoginChild/>
        )
    }
}
//ReactDOM.render(<Helloworld/>,document.getElementById('root'));
//ReactDOM.render(<Demo />, document.getElementById('root'));
//ReactDOM.render(<Demo1 />, document.getElementById('rootfirst'));
//ReactDOM.render(<Demo1 />, document.getElementById('rootfirst'));
//ReactDOM.render(<Parent/>,document.getElementById('rootfirst'));
//ReactDOM.render(<Helloworld/>,document.getElementById('rootfirst'));
//ReactDOM.render(<Login/>,document.getElementById('root'));

//ReactDOM.render(<Pract4Main/>,document.getElementById('root'));

//ReactDOM.render(<TestParent/>,document.getElementById('root'));
//ReactDOM.render(<Pract5P/>,document.getElementById('rootfirst'));

ReactDOM.render(<TodoList/>,document.getElementById('rootfirst'));

