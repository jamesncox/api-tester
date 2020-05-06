import {
    SET_URL_INPUT
} from '../actionTypes'

export default (state = { url: "" }, action) => {
    switch (action.type) {
        case SET_URL_INPUT:
            return { ...state, url: action.payload }

        default:
            return state
    }
}