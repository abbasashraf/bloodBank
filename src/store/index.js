
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {SignUpReducer, LoginReducer, } from './reducers/index'
import {DataReducer} from './reducers/donate';


const rootReducer = combineReducers({SignUpReducer , LoginReducer, DataReducer })

const middle = applyMiddleware(thunk);
export const store = createStore(rootReducer, middle);