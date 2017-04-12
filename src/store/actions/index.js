import firebase from "../../firebase";
import {hashHistory} from 'react-router';



export class loginAction {
    static SIGNUP = "SIGNUP";
    static SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
    static SIGN_UPUNSUCCESS = "SIGN_UP_UNSUCCESS";





    static SignUp(credentials){
        return(dispatch) =>{
            firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password).then((res)=>{
                console.log("asdjklshdl")
                dispatch(loginAction.SignUpSuccess());
                hashHistory.push("/");
            }).catch((err)=>{
                alert(err.message)
                dispatch(loginAction.SignUpUnSuccess());
            });
        }
    }

    static SignUpSuccess(){
        return {type: loginAction.SIGN_UP_SUCCESS}
    }

    static SignUpUnSuccess(){
        return{type: loginAction.SIGN_UP_UNSUCCESS}
    }


}