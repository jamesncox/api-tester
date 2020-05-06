import {
    GET_JSON,
    CLEAR_JSON
} from '../actionTypes'

const setJSON = json => {
    return { type: GET_JSON, payload: json }
}

export const clearJSON = () => {
    return { type: CLEAR_JSON }
}

export const getJSON = () => {
    return async (dispatch, getState) => {
        const state = getState()

        const url = state.urls.url
        try {
            const res = await fetch(`${url}`)
            if (!res.ok) {
                throw res
            }
            const json = await res.json()
            dispatch(setJSON(json))
        } catch (err) {
            alert("Failed to load JSON")
        }
    }
}