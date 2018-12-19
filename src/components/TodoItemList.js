import React from 'react';
import '../index.css'
// export const TodoItem=(props)=>{
//         return(
//             <li className={props.displaylist.status?'completed':''}>
//                 {props.displaylist.Name}
//                 <button onClick={(evt)=>{
//                     evt.stopPropagation();
//                     props.deleteText(props.Index)
//                 }}>delete</button>
//             </li>
//         )
// }

export class  TodoItem extends React.Component{
    constructor(props){
        super(props);

        this.state={
            IsEditing:false
        }

        this.bindFormdata=this.bindFormdata.bind(this);
        this.bindLidata=this.bindLidata.bind(this);
        this.toggleData=this.toggleData.bind(this);
        this.updateEdititem=this.updateEdititem.bind(this);
    }
    toggleData(){
        debugger;
        const {IsEditing}=this.state
        this.setState({
            IsEditing:!IsEditing
        })
    }
    bindFormdata(){
        return(
                    <form onSubmit={this.updateEdititem}>
                        <input type='text' ref={(value)=>{
                            this.input=value
                        }} defaultValue={this.props.displaylist.Name}/>
                        <button type='submit'>Update Item</button>
                     </form>
        )
    }

    bindLidata(){
        return(
            <li className={this.props.displaylist.status?'completed':''}>
            {this.props.displaylist.Name}
            <button onClick={(evt)=>{
                evt.stopPropagation();
                this.props.deleteText(this.props.Index)
            }}>Delete</button>
            <button onClick={(evt)=>{
                evt.stopPropagation();
                this.toggleData()
            }}>Edit Item</button>
        </li>
        )
    }

    updateEdititem(evt){
        debugger;
        evt.preventDefault();
        //console.log(this.input.value);
        this.props.editItem(this.props.Index,this.input.value);
        this.toggleData();
    }

    
    render(){
        const {IsEditing}=this.state
            return(
               
                <section>
                    {
                        IsEditing?this.bindFormdata():this.bindLidata()
                     
                    }
                </section>
            )
    }
}



//export default TodoItem;