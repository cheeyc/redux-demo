import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {approve, decrement, fetchUsers, increment} from "./action";


function ReduxApp() {

    const counter = useSelector(state => state.counter);
    const approval = useSelector(state => state.approval);

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    return (
        <>
            <div>
                <h1>Salary App</h1>
                <p>Count: {counter}</p>
                <p>Approval: {approval ? 'Approved' : 'Rejected'}</p>
                <button onClick={() => {
                    dispatch(increment(20))
                }}>Increment
                </button>
                <button onClick={() => {
                    dispatch(decrement())
                }}>Decrement
                </button>
                <button onClick={() => {
                    dispatch(approve())
                }}>Approve
                </button>

            </div>
            <div>
                User list:
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
        ;
}

export default ReduxApp;
