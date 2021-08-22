/*
const initialState = {
  counter: 10
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        counter: state.counter + 1
      }
    case 'SUB':
      return {
        counter: state.counter - 1
      }
    case 'ADD_NUMBER':
      return {
        counter: state.counter + action.payload
      }
    default:
      return state
  }

  /!*if (action.type === 'ADD') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'SUB') {
    return {
      counter: state.counter - 1
    }
  }*!/

}

export default rootReducer
*/

import {combineReducers} from 'redux'
import counter1 from "./reducers/counter1";
import counter2 from "./reducers/counter2";

export default combineReducers({
  counter1, counter2
})
