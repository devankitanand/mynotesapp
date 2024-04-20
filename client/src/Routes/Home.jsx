import React, { useState,useEffect } from 'react'
import user from '../assests/icons8.png'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { USER_LOGIN_LOGOUT } from '../constants/userconstants'
import { useNavigate } from 'react-router-dom'
import { listNotes } from '../actions/notesAction'
import Createnote from '../components/Createnote'
import { NOTE_LIST_REQUEST } from '../constants/notesconstants'
import refreshbtn from '../assests/refresh.png'
import logout from "../assests/logout.png"

const Home = () => {
  const [createnote , setCreatenote] = useState(false);
  const navigate = useNavigate()
  const islogin = useSelector((state) => state.userLogin.islogin)
  const dispatch = useDispatch()
  const logouthandler = () =>{
    dispatch({type: USER_LOGIN_LOGOUT})
    navigate('/')

  }
  const noteList = useSelector(state => state.noteList.note);
  useEffect(()=>{
      dispatch(listNotes());
      dispatch({type: NOTE_LIST_REQUEST})
  },[dispatch]);
  useEffect(()=>{
    if(!islogin){
     navigate("/")
    }
  },[islogin,navigate])

const refreshhandler = () =>{
  dispatch(listNotes());
  dispatch({type: NOTE_LIST_REQUEST})
}

  return (
    <div className='home'>
     
      <div className='homebar'>
        <div>MYNOTES</div>
        <div className='wraphead'>
          <div className='refresh' onClick={refreshhandler} ><img src={refreshbtn} alt='refresh'/></div>
        <div className='userid'><img className="usricon" width="25px" src={user} alt='user'/></div>
        <div className='logout' onClick={logouthandler}><img src={logout} alt='logout' width={20} height={20}/></div>
        </div>
        
      </div>
      <div className='create' onClick={()=>{
        setCreatenote(!createnote)
      }}>+ Create New Note</div>
      { createnote && <Createnote/> }
      <div className='homebody'> 
      
        {Array.isArray(noteList) && noteList.map((note)=>(
  <Card key={note._id} id={note._id} title={note.title} content = {note.content} date={note.createdAt.substring(0,10)}/>
))}
      </div>

      </div>
      
    
  )
}

export default Home