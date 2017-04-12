import firebase from '../../firebase'
import {hashHistory} from "react-router";
export class DonateAction {

    static ADDDATA = 'ADDDATA';
    static ADDFIREBASE = 'ADDFIREBASE';
    static FETCHINGDATA = 'FETCHINGDATA';
    static GETDATA = "GETDATA";


    static addData() {
        return {
            type: DonateAction.ADDDATA,
        }
    }
    static addFirebase(data) {
        return (dispatch) => {
            var dataRef = firebase.database().ref().child("adddata/").push(data);
            dataRef.then(() => {
                dispatch(DonateAction.addData())
            }).catch((err) => {
                alert(err)
            })
        }
    }

    static getData(fetchData) {
        return {
            type: DonateAction.GETDATA,
            payload: fetchData
        }
    }

    static fetchingData(bloodGroup) {
        
        return (dispatch) => {
            //console.log(bloodGroup, "blood group")
            var getData = firebase.database().ref().child("adddata/");
            getData.on("value", (snapshot) => {
                var arr = [];
                var newArr =[];
                var obj = snapshot.val();
                for (var key in obj) {
                    arr.push(obj[key]);
                }
              for(var i=0; i< arr.length; i++){
                  if(arr[i].bloodGroup === bloodGroup){
                      newArr.push(arr[i]);
                  }
                  else if(bloodGroup === "All"){
                      newArr.push(arr[i]);
                  }
              }  
                
                dispatch(DonateAction.getData(newArr))
            })
        }
    }

       static chekLogin(loginState){
        return(dispatch)=>{
        if(loginState == false){
            hashHistory.replace("/login");
        }
        else {
            hashHistory.replace("/")
        }
      }
    }
}