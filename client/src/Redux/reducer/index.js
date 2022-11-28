
const initialState={
    product:[],
    category:[]

}


function rootReducer(state = initialState, action){
    switch (action.type) {
        case "GET_PRODUCT" :
          
            return{
                ...state,
                product: action.payload, 
            }
            

        case "POST_PRODUCT":
                return{
                    ...state
                }
    
        default:
            return state
    }

}

export default rootReducer;