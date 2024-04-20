import axios from "axios";
import { NOTE_CREATE_FAIL, NOTE_CREATE_REQUEST, NOTE_CREATE_SUCCESS, NOTE_DELETE_FAIL, NOTE_DELETE_REQUEST, NOTE_DELETE_SUCCESS, NOTE_LIST_FAIL, NOTE_LIST_REQUEST, NOTE_LIST_SUCCESS } from "../constants/notesconstants";

export const listNotes = ()=> async(dispatch,getState) =>{
    try {
        dispatch({
            type : NOTE_LIST_REQUEST,
        });
        const {
            userLogin:{userInfo},
        } = getState();

        const config = {
            headers:{
                authorization: `Bearer ${userInfo.jwt}`,
            }
        };

        const {data} = await axios.get(`/notes`,config);
        dispatch({
            type : NOTE_LIST_SUCCESS,
            payload : data
        });

    } catch (error) {
        const message = 
        error.response && error.response.data.message?
         error.response.data.message : error.message;
        dispatch({
            type: NOTE_LIST_FAIL,
            payload : message
        });
    };
}


export const createNoteAction = (title, content) => async (dispatch, getState) => {
    try {
        dispatch({
            type: NOTE_CREATE_REQUEST
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.jwt}`
            }
        };

        const { data } = await axios.post(`/notes/create`, { title, content }, config);
        dispatch({
            type: NOTE_CREATE_SUCCESS
        
        })

        // Assuming data is the newly created note
        dispatch({
            type: NOTE_LIST_SUCCESS,
            payload: data
        });

    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({
            type: NOTE_CREATE_FAIL,
            payload: message
        });
    }
};

 export const deleteNoteAction = (id) => async(dispatch,getState)=>{
    try {
        dispatch({
            type: NOTE_DELETE_REQUEST
        });
        const{
            userLogin:{userInfo},
        } = getState();

        const config = {
            headers: {
                "Content-Type":"application/json",
                authorization: `Bearer ${userInfo.jwt}`
            }
        };

        const {data} = await axios.delete(`/notes/${id}`,config);
        dispatch({
            type: NOTE_DELETE_SUCCESS
        })
        dispatch({
            type: NOTE_LIST_SUCCESS,
            payload : data
        })

    } catch (error) {
        const message = 
        error.response && error.response.data.message?
         error.response.data.message : error.message;
        dispatch({
            type: NOTE_DELETE_FAIL,
            payload : message
        });
    }
}