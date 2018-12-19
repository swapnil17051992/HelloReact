import React from 'react'


export const TesPract5child =(props)=>{
    
        return( 
            
            <li>
                {props.details.Place}
            </li>
            
        )
    
}

export const TestPractSubchild=()=>{
    return(
        <div>
        <input type='text'/>
        <button type='submit' value='Add'/>
        </div>
    )
}