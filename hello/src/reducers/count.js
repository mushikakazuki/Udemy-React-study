import {INCREMENT, DECREMENT} from '../actions'

const initstate = {value: 0}

export default(state = initstate, action) => {
    switch (action.type) {
        case INCREMENT:
            return {value: state.value + 1}
        case DECREMENT: {
            return {value: state.value - 1}
        }
        default:
            return state
    }
}