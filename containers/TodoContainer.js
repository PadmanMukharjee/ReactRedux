import Todo from '../components/Todo'

import { connect } from 'react-redux'
import { addTodo,getTodo } from '../actions'


function mapDispatchToProps  (dispatch){
  return {
    submitTodo: (text) => {
      dispatch(addTodo(text))
    },
    getTodo:() =>{
      dispatch(getTodo())
    }
  }
}

let AddTodo = connect(null, mapDispatchToProps)(Todo)

export default AddTodo
