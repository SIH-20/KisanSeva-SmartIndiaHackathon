const INITIAL_STATE = {
    currentUser : null
}
const userReducer = (currentState = INITIAL_STATE,action)=>{
    switch (action.type){
        case 'LOGGING_IN':
            return {
                ...currentState,
                currentUser : action.payload
            }
            case 'LOGOUT':
                return {
                    ...currentState,
                    currentState : null
                }

        default:
            return currentState
    }

}

export default userReducer;