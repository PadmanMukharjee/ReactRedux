import React, {Component} from 'react';

class Todo extends Component{
render(){  
    return(
    <div>
      <input type="text" name="n1" />    
      <input type="button" name="Add" value="Add" onClick={()=>this.props.submitTodo('aaa')} />                 
    </div>
  
    )
}
}

export default Todo;