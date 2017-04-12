import {DonateAction} from '../actions/donate.js';

export var DataReducer = (state = {push:false,getData:false,data:[]},action)=>{
    console.log(DonateAction.ADDATA)
    switch(action.type){
        case DonateAction.ADDDATA:
        return {...state, push:true};
        case DonateAction.GETDATA:
        return {...state, getData:true, data: action.payload }
        default:
        return state
    }

}