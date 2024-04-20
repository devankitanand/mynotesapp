import { NOTE_CREATE_FAIL, NOTE_CREATE_REQUEST, NOTE_CREATE_SUCCESS, NOTE_DELETE_FAIL, NOTE_DELETE_REQUEST, NOTE_DELETE_SUCCESS, NOTE_LIST_FAIL, NOTE_LIST_REQUEST, NOTE_LIST_SUCCESS } from "../constants/notesconstants";

export const noteListReducer = (state ={note:[]},action) =>{
    switch(action.type){
        case NOTE_LIST_REQUEST:
            return {loading:true};
        case NOTE_LIST_SUCCESS:
            return {...state,loading : false , note: action.payload};
        case NOTE_LIST_FAIL:
            return {loading : false, error : action.payload};
            
        default:
            return state;    
    }
}

export const noteCreateReducer =(state={note:[]},action)=>{
    switch(action.type){
        case NOTE_CREATE_REQUEST:
            return {...state,loading : true};
        case NOTE_CREATE_SUCCESS:
            return {...state,loading : false , success:true};
        case NOTE_CREATE_FAIL:
            return {...state,loading:false, error: action.payload};
        default:
            return state;            
    }
};

export const noteDeleteReducer =(state={note:[]},action)=>{
    switch(action.type){
        case NOTE_DELETE_REQUEST:
            return {...state,loading : true};
        case NOTE_DELETE_SUCCESS:
            return {...state,loading : false , success:true};
        case NOTE_DELETE_FAIL:
            return {...state,loading:false, error: action.payload};
        default:
            return state;            
    }
}