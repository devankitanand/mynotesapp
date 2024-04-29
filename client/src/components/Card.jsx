import React from 'react'
import delicon from '../assests/delete.png';
import { useDispatch} from 'react-redux';
import { deleteNoteAction, listNotes } from '../actions/notesAction';


const Card = (props) => {
  const dispatch = useDispatch();
  // const noteDelete = useSelector(state => state.noteDelete);
  // const {loading,error,success} = noteDelete;
  const ids = props.id;
  const deletehandler = () =>{
    dispatch(deleteNoteAction(ids));
    dispatch(listNotes());
  }
    
  return (
    <div className='card'>
        <div className='cardcnt'>
          <div className='wraptime'>
          <div className='time'>{props.date}</div>
          <div className='deleteicon' onClick={deletehandler}> <img src={delicon} alt='delete' width={15} height={15}/></div>
          </div>
        
        <div className='cardtitle'>{props.title}</div>
        <div className='cardbody'>{props.content}</div>
        </div>
        
    </div>
  )
}

export default Card