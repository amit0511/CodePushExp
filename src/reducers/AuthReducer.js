import { EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS, LOGIN_USER,LOGIN_USER_FAILED} from '../constants/actionTypes';
const INTIAL_STATE = { 
email: 'manish@xelpmoc.in',
password:'manish',
user:null,
error:'',
loading:false
};


export default (state = INTIAL_STATE , action) => {
    console.log(action);
    switch(action.type){
        case  EMAIL_CHANGED: 
        return { ...state, email:action.payload};
        case  PASSWORD_CHANGED : 
        return { ...state, password:action.payload};
        case LOGIN_USER:
        return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
        return { ...state,user:action.payload};
        case LOGIN_USER_FAILED:
        return { ...state,error:'Authentication Failed',password:'',loading: false};
        default: return state;
    }
}