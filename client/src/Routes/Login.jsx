import {useEffect, useState} from 'react'
import axios from 'axios'
import { Navigate , useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginsubmitt, registeraction } from '../actions/useractions'

const Login = () => {
    const [details, setDetails] = useState({email: "", password: ""})
    const [signup, setSignup] = useState(false)
    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.userLogin.islogin);
    // const userInfo = useSelector((state) => state.userLogin.userInfo);
    // const navigate = useNavigate();
   
    // useEffect(() => {
    //     if(isLogin){
    //        navigate('/home')
    //     }
    //     else{
    //          navigate('/')
    //     }

    // },[isLogin,navigate])
    console.log(isLogin)
    const submitHandler = (e) => {
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        setDetails({
            ...details,
            [name]: value
        })
        
        console.log(details)
        // dispatch(loginsubmit(details))
    }
///login handler
    const loginsubmit = async(e)=> {
        e.preventDefault();
        dispatch(loginsubmitt(details))
        
        // console.log(isLogin)
    }
    

    /// signup handler
    const signupsubmit = async(e)=>{
            e.preventDefault();
            dispatch(registeraction(details))
            // alert("user created succesfully")
    }
  return (
    <>
    <div className='bgwrap'>
        <div>
            <div className='title'>MYNOTES</div>
        <div className='container'>
            <div>
                {signup ? 
            <form className='form' onSubmit={signupsubmit}>
            <div className="form-group"> 
                    <input onChange={submitHandler} type="email" name="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <input onChange={submitHandler} type="password" name="password" className="form-control"  placeholder="Password" />
                </div>
                <div className="form-group">
                    <input onChange={submitHandler} type="password" name="confirmpassword" className="form-control"  placeholder="Confirm Password" />
                </div>
                <button type="submit" className="submitbtn">Signup</button>
            <div className="signupbtn" onClick={()=>{
                setSignup(false)
            }}>Login</div>
            </form> 
            : 
            <form className='form' onSubmit={loginsubmit}>
                <div className="form-group">
                    
                    <input onChange={submitHandler} type="email" name="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    
                    <input onChange={submitHandler} type="password" name="password" className="form-control"  placeholder="Password" />
                </div>
                <button type="submit" className="submitbtn">Login</button>
            <div className="signupbtn" onClick={()=>{
                setSignup(true)
            }}>Signup</div>
            </form>}</div>

            {isLogin && <Navigate to="/home"/>}

        </div>
        
        </div>
        
    </div>
    </>
  )
}

export default Login