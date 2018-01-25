import React, { Component } from 'react';

class ShowTodo extends Component{
   
    render(){        
        return(           
            <div>
            {this.props.todos.map(function (arr, index) {    
                                return (
                                    <ul key={index}>
                                        <li>{arr}</li>                                       
                                    </ul>
                                )
                            })}
            </div>
        )
    }
    
}

export default ShowTodo;