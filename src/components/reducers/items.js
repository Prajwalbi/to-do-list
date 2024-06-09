
const itemDefaultState = []
const ItemReducer = (state = itemDefaultState, action) => {
    switch(action.type){
        case "SET_ITEMS": 
            return action.items;
        
        case "ADD_ITEM": 
            return [ ...state , action.item]

        case "REMOVE_ITEM": 
            return state.filter((item) =>  item.id !== action.id)
        // case "REMOVE_ITEM": 
        //     return state.map((item) => {
        //         if((item.id) === action.id){
        //             return {
        //                 ...item,
        //                 status: "deleted"
        //             }
        //         }else{
        //             return item;
        //         }
        //     })

        case "COMPLETED_ITEM": 
            return state.map((item) => {
                if(item.id === action.id){
                    return {
                        ...item,
                        status: "completed" 
                    }
                }else{
                    return item;
                }
            })

        case "FAVOURITE_ITEM":
            return state.map((item) => {
                if(item.id === action.id){
                    return {
                        ...item,
                        status: "favourite"
                    }
                }else{
                    return item;
                }
            });
        default: return state;
    }
}

export default ItemReducer;