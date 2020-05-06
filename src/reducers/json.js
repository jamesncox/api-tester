import {
    GET_JSON,
    CLEAR_JSON
} from '../actionTypes'

export default (state = { json: null }, action) => {
    switch (action.type) {
        case GET_JSON:
            return { ...state, json: action.payload }

        case CLEAR_JSON:
            return { ...state, json: null }

        default:
            return state
    }
}