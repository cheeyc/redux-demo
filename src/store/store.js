import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "../slice/counterSlice";
import noteReducer from "../slice/noteSlice";

export default configureStore({
    reducer: {counter: counterReducer, note: noteReducer}
})
