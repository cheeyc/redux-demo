import React, {useEffect, useState} from 'react';
import {createStore} from "redux";

///BEGIN

//Action -> Increment
const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
};
//Reducer -> How we specify the application state changes in response to actions to the store
const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;

        case "DECREMENT":
            return state - 1;
    }
};
// Store -> Globalized State
let store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

///END

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            console.log(store.getState());
            setCount(store.getState());
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount((prevCount) => prevCount + 1);
    // };
    //
    // const decrement = () => {
    //     setCount((prevCount) => prevCount - 1);
    // };

    return (
        <div>
            <h1>Salary App</h1>
            <p>Count: {count}</p>
            <button onClick={() => {
                store.dispatch(increment())
            }}>Increment
            </button>
            <button onClick={() => {
                store.dispatch(decrement(5))
            }}>Decrement
            </button>
        </div>
    );
}

export default App;
