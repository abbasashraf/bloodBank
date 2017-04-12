import firebase from '../../firebase';
import {hashHistory} from "react-router";
export class SigninAction {

    static LOGIN = "LOGIN";
    static LOGIN_SUCCESS = "LOGIN_SUCCESS";
    static LOGIN_UN_SUCCESS = "LOGIN_UN_SUCCESS";


    static login(credentials) {
        return (dispatch) => {
            firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).then(function (res) {
                hashHistory.push("/dashboard");
                console.log("asdasdasd");
                console.log(res);
                dispatch(SigninAction.loginSuccess());
            }).catch((err) => {
                alert(err.message)
                dispatch(SigninAction.loginUnSuccess());
            });
        }
    }
    static loginSuccess() {
        return {
            type: SigninAction.LOGIN_SUCCESS,
            payload: null
        }
    }
    static loginUnSuccess() {
        return {
            type: SigninAction.LOGIN_UN_SUCCESS,
            payload: null
        }
    }

 

}