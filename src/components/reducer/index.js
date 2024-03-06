const initialState ={
    users : []
}

function rootReducer (state= initialState, action){
    switch(action.type){
        case "GET_USERS":
            return{
                ...state,
                users: action.payload
            }
        case "POST-USER":
            return{
                ...state,
            }
        case "PUT-USER":
            return {
                ...state
            }

        default:
            return state;
    }
}

export default rootReducer;
