const initialState = {
    history : []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_QUESTION':
        return{ history: [action.answer, ...state.history] }
        default:
            return state;    
    }
}

export default reducer;