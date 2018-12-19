import React from 'react';

export const TodoForm=(props)=>{

    return(
        <form onSubmit={props.addtask}>
        <input type='text' value={props.currenttask} onChange={props.changetask}/>
        <button type='submit'>Submit</button>
    </form>
    )
}