import axios from 'axios';
import { IS_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../constants/userconstants';
// const baseURL = process.env.NODE

// const api = axios.create({
//     baseURL: baseURL
//   });

export const loginsubmitt = (details)=> async(dispatch) =>{
   
    
    try {
        dispatch({type : USER_LOGIN_REQUEST})
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        console.log(details);
        const {data} = await axios.post("https://mynotesapp-yd7g.onrender.com/user/login",details,config)
        console.log(data)
        if (data.message === "login succes"){
            // setisLogin(true)
            dispatch({type: IS_LOGIN})
            dispatch({type: USER_LOGIN_SUCCESS , payload : data})

        }
    } catch (error) {
        console.log(error)
        dispatch({type: USER_LOGIN_FAIL});
    }
}

export const registeraction = (details)=>async(dispatch)=>{
    dispatch({type : USER_REGISTER_REQUEST})
    const config = {
        headers : {
            "Content-Type" : "application/json"
        }
    }
    try {
        console.log(details);
        const {data} = await axios.post("https://mynotesapp-yd7g.onrender.com/user/register",details,config)
        if(data.message === "user already exists"){
            alert("User already exist")
        }else{
            alert("User Created Succesfully")
        }
        console.log(data)
        dispatch({type : USER_REGISTER_SUCCESS})
    } catch (error) {
        console.log(error)
        dispatch({type: USER_REGISTER_FAIL})
    }
}