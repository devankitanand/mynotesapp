import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import {composeWithDevTools } from '@redux-devtools/extension'
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { noteCreateReducer, noteDeleteReducer, noteListReducer } from "./reducers/notesReducer";

const initialstate = {};
const reducer = combineReducers({
userLogin : userLoginReducer,
userRegister : userRegisterReducer,
noteList : noteListReducer,
NoteCreate : noteCreateReducer,
noteDelete : noteDeleteReducer,
});


const middleware = [thunk];

const store = createStore(
    reducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;