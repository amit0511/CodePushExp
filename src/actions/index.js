import { EMAIL_CHANGED,PASSWORD_CHANGED ,LOGIN_USER_SUCCESS,LOGIN_USER,LOGIN_USER_FAILED } from '../constants/actionTypes';
export const emailChanged = (text)=>{
return{
 type :EMAIL_CHANGED,
 payload: text
};
};

export const passwordChanged = (text)=>{
return{
 type :PASSWORD_CHANGED,
 payload: text
};
};

export const  loginUser = ({email,password})=>{
        
        return async (dispatch)=>{
        dispatch({ type: LOGIN_USER });
        let response = await fetch("https://d76d5bpwmh.execute-api.us-east-1.amazonaws.com/prod/userCheck", {
                                   method: "POST",
                                   body: JSON.stringify({email_id: email, password: password}),
                                   headers: {
                                      'Content-Type':'application/json',
                                     }
       })
        
       let responseJson = await response.json();
          console.log('skddkdk')  
          console.log(responseJson)

         
    //         var resin = response.json(); 
    //     // let responseJson = await response.json();
    //    //  let accessToken = responseJson;
    //       console.log(resin.error);
       if (responseJson.statusCodeid == 404){
               //alert('No user Found');
               dispatch({ type:LOGIN_USER_FAILED,payload : 'No user Found'});
       }else if (responseJson.statusCodeid == 500){
              // alert('Wrong Password');
               dispatch({ type:LOGIN_USER_FAILED,payload : 'Wrong Password'});
               
       }else if (responseJson.statusCodeid == 200){
                dispatch({ type:LOGIN_USER_SUCCESS,payload : responseJson.Result});
       }
    //         try {    
    //        //  this._setLocalStorage(resin.result);
    //         }catch (error) {
    //         } 
    //     }else{
    //       //this.setState({isLogin: false});
    //       //this.setState({error: error});
    //       Alert.alert('Login Error');
    //     }   
  
        }


};

