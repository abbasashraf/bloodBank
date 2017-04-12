import {loginAction} from '../actions';
import {SigninAction} from '../actions/login.js'


const INITIAL_STATE = {
    isSignUp: false
}

export var SignUpReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case loginAction.SIGN_UP_SUCCESS:
        return {
            ...state,
            isSignUp: true
        };
        case loginAction.SIGN_UP_UNSUCCESS:
        return {
            ...state,
            isSignUp: false
        };

        default:
        return state
    }
}

export var LoginReducer = (state ={
            isLogin : false,
            user:{}
        }, 
        action )=>{
        switch(action.type){

        case SigninAction.LOGIN_SUCCESS:
        return {
            ...state,
            isLogin: true,
            user: action.payload
        };
        default :
        return state;
    }
}