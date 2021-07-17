// Action types
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset"
// reset????

// Actions
export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function reset() {
  return {
    type: RESET
  }
}

// State 
const initialState = {
  value: 0
}

// Reducer 
export default function counterReducer(state=initialState, action) {
  switch (action.type) {
    case INCREMENT: 
      return { ...state, value: state.value + 1 }
    case DECREMENT: 
      return { ...state, value: state.value - 1}
    case RESET: 
      return { value: 0}
    default: 
      return state
  }
}