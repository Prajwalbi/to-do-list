const filtersReducerDefaultReducerState = {
    text: "",
    filterBy: "reset"
}
const filtersReducer = (state = filtersReducerDefaultReducerState, action) => {
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {...state, text: action.text};
        
        case "FILTER_BY_COMPLETED":
            return {...state, filterBy: "completed"}
        
        case "FILTER_BY_FAVOURITE":
            return {...state, filterBy: "favourite"} 

        case "FILTER_BY_DELETED":
            return {...state, filterBy: "deleted"}

        case "RESET_FILTER":
            return {...state, filterBy: "reset"}

        default: 
            return state;
    }
} 

export default filtersReducer;