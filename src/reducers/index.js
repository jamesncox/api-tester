import { combineReducers } from 'redux'
import json from '../reducers/json'
import urls from '../reducers/urls'

const rootReducer = combineReducers(
    {
        json,
        urls
    }
)

export default rootReducer