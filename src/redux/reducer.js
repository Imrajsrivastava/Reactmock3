const initial = {
    products:[]
}

const productReducer = (state=initial,action)=>{
    if(action.type =="ADD_DATA"){
        return{
            ...state,
            products:[...state.products,action.payload]
        }
    }else if(action.type =="GET_DATA"){
        return {
            ...state,
            products:action.payload
        }

        
    }
    return state;

}

export default productReducer