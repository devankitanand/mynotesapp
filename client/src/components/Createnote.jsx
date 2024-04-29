import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { createNoteAction } from '../actions/notesAction';
import { listNotes } from '../actions/notesAction'

const Createnote = () => {
    const [createnote , setCreatenote] = useState({title: "" , content:""})
    const dispatch = useDispatch();
    // const noteCreate = useSelector((state)=> state.noteCreate);
    // const {loading , error , note} = noteCreate
    // const noteCreate = useSelector((state)=> state.NoteCreate);
    // const { note } = noteCreate;
    const submit=(e)=>{
        e.preventDefault();
        if(!createnote.title && !createnote.content){
          return;
        }
        dispatch(createNoteAction(createnote.title , createnote.content));
        dispatch(listNotes());
        setCreatenote({title: "" , content:""});
    }
  //   useEffect(()=>{
  //     dispatch(listNotes());
  // },[dispatch , note]);
  return (
    <>
   <div className='cretadiv'>
    <form onSubmit={submit}>
        <div className='titlediv'><input className="inputtitle" type='text' value={createnote.title} placeholder='Title' onChange={(e)=>setCreatenote({...createnote, title: e.target.value})}/></div>
        <div className='contentdiv'><input className="inputtitle" type='text' value={createnote.content} placeholder='Write a note...' onChange={(e)=>setCreatenote({...createnote, content: e.target.value})}/></div>
        <button type='submit' className='createnote'>Create Note +</button>
        
    </form>
    </div> 
    </>
  )
}

export default Createnote