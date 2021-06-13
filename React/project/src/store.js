import employees from './reducer/employeeReducer'
import { combineReducers, createStore,applyMiddleware } from "redux";

import {getAllEmployees,addNewEmployee} from './middleware/crud'

const reducer=combineReducers({employees})

const store=createStore(reducer,applyMiddleware(getAllEmployees,addNewEmployee))
window.store=store

export default store