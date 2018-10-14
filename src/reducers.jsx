const initialState = {
    history : []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_QUESTION':
        return Object.assign({}, state, {
            history: [
            ...state.history,action.answer
            ]
            })
        default:
            return state;    
    }
}

export default reducer;