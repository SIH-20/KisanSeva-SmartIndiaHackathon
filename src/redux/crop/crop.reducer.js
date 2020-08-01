const INITIAL_STATE = {
    selectedCrop : "all",
    cropQuality:"all"
}


const cropReducer = (currentState = INITIAL_STATE,action)=>{
    switch (action.type){
        case 'SELECT_CROP_TYPE':
            return {
                ...currentState,
                selectedCrop : action.payload
            }
            case 'SELECT_CROP_QUALITY':
                return {
                    ...currentState,
                    cropQuality:action.payload
                }

        default:
            return currentState
    }
    }



export default cropReducer ;