const redux = require('redux')

// объект описывающи всё наше приложение
const initialState = {
  counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {

  if (action.type === 'ADD') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'SUB') {
    return {
      counter: state.counter - 1
    }
  }

  if (action.type === 'ADD_NUMBER') {
    return {
      counter: state.counter + action.value
    }
  }

  return state
}


// Store
const store = redux.createStore(reducer)
console.log("1 ", store.getState())

store.subscribe(() => {
  console.log('Subscribe', store.getState())
})

// Actions
const addCounter = {
  type: 'ADD'
}

const subCounter = {
  type: 'SUB'
}

const addNumber = {
  type: 'ADD_NUMBER',
  value: 10
}

store.dispatch(addCounter)
console.log("2 ", store.getState())

store.dispatch(subCounter)
console.log("3 ", store.getState())

store.dispatch(addNumber)
console.log("4 ", store.getState())
