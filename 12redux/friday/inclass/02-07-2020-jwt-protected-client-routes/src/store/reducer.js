
const initialState = {
    isAuthenticated: false 
}

const reducer = (state = initialState, action) => {

    if(action.type == 'ON_LOGIN_SUCCESS') {
        return {
            ...state, 
            isAuthenticated: action.token == null ? false : true 
        }
    }

    return state 
}

export default reducer