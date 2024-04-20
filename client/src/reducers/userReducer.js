import { IS_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS} from "../constants/userconstants"

export const userLoginReducer = (state = {islogin : false}, action) =>{
    switch(action.type){
        case USER_LOGIN_REQUEST: return {...state, loading : true};
        case USER_LOGIN_SUCCESS : return { ...state,loading : false , userInfo: action.payload};
        case USER_LOGIN_FAIL : return{...state,loading : false , error: action.payload};
        case USER_LOGIN_LOGOUT : return{...state,islogin: false};
        case IS_LOGIN : return {...state, islogin : true}

        default : 
         return state;
    }
}

export const userRegisterReducer = (state= {}, action) =>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true};
        case USER_REGISTER_SUCCESS:
            return {loading: false};
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;           
    }
}