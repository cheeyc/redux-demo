import {createSlice} from '@reduxjs/toolkit'


export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        note: []
    },
    reducers: {
        addNote: (state, action) => {
            //return {...state, note: [...state.note, action.payload]}
            state.note.push(action.payload); // Mutating the state directly, but handled by Immer
        }
    },
})

// Action creators are generated for each case reducer function
export const {addNote} = noteSlice.actions

export default noteSlice.reducer
