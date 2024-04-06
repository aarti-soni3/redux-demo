const amountReducer= (state = 0, action) =>{
    if (action.type === 'deposite') {
        return state + action.payload;
    }
    else if (action.type === 'withdraw') {
        return state - action.payload;
    }
    else {
        return state;
    }
}

export default amountReducer;