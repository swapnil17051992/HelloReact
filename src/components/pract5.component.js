import React from 'react';

import {TesPract5child} from '../components/Pract5C';
import {TestPractSubchild} from '../components/Pract5C';
export class Pract5P extends React.Component{
    constructor(){
        super();

        this.Places=[
            {
                Place:'Pune'
            },
            {
                Place:'Nagpur'
            },
            {
                Place:'Mumbai'
            }
        ]
        

    }
    render(){
        return(
            <div>
                <section>
                    <TestPractSubchild/>
                </section>
                <ul>
                {
                    this.Places.map((name)=>{
                        return <TesPract5child details={name} />
                    })
                }
                </ul>
            </div>
        )
    }
}