const approvalReducer = (state = false, action) => {
    switch (action.type) {
        case "APPROVE":
            return !state;
        default:
            return state;
    }
};

export default approvalReducer;
