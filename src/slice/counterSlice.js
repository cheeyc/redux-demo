import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {fetchUserSuccess} from "../action";

export const fetchUserData = createAsyncThunk('api/fetchUserData', async (userId) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
});

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload;
        });
    }
})

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer
