import React, {useEffect, useState} from 'react';
import {decrement, fetchUserData, increment, incrementByAmount} from './slice/counterSlice'
import {useDispatch, useSelector} from "react-redux";
import {addNote} from "./slice/noteSlice";

function SliceApp() {
    const counter = useSelector(state => state.counter.value)
    const {userData, loading} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserData());
    }, []);


    const [noteText, setNoteText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (noteText.trim() !== '') {
            dispatch(addNote(noteText));
            setNoteText('');
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Add a note..."
                />
                <button type="submit">Add Note</button>
            </form>
            <div>
                <h1>Salary App</h1>
                <p>Count: {counter}</p>
                <button onClick={() => dispatch(increment())}>Increment
                </button>
                <button onClick={() => dispatch(decrement())}>Decrement
                </button>
                <button onClick={() => dispatch(incrementByAmount(50))}> Increment by merit
                </button>
            </div>
            <div>
                User list:
                <ul>
                    {userData && userData.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
        ;
}

export default SliceApp;
