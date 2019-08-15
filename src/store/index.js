import { createStore } from 'redux'
import reducer from '../reducers'

const initialState = [{offices:'offices'}]

export const store = createStore(reducer, initialState)