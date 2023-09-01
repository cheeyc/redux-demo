export const increment = (payload) => {
    return {
        type: 'INCREMENT',
        payload: payload
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
};

export const approve = () => {
    return {
        type: 'APPROVE'
    }
}

export const fetchUserSuccess = (user) => {
    return {
        type: 'FETCH_USERS',
        payload: user
    }
}

// redux-thunk middleware allows you to write action creators that return a function instead of an action.
export const fetchUsers = () => {
    return async (dispatch, getState) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        dispatch(fetchUserSuccess(users));
    };
}
