import React from 'react';
import ReactDOM from 'react-dom';

class Assingn extends React.Component{
    render(){
        return(
            <table><thead>
                <tr>
                    <td>Emp No</td>
                    <td>Emp Name</td>
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>101</td>    
                    <td>Swapnil</td>
                                   </tr>
                    
                </tbody>
                
                </table>
        )
    }
}

ReactDOM.render(<Assingn/>,document.getElementById('assignment1'));