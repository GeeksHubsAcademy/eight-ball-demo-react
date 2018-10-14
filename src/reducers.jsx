const initialState = {
    history : [],
    question: ''
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_QUESTION':
            return{ history: [action.answer, ...state.history], question: '' }
        case 'UPDATE_QUESTION':
        return{ history: state.history, question: action.question }
        default:
            return state;
    }
}

export default reducer;