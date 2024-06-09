
//setTextFilter
export const setTextFilter = (text = "") => {
    return {
        type: "SET_TEXT_FILTER",
        text
    }
}

export const filterByCompleted = () => {
    return ({
        type: "FILTER_BY_COMPLETED"
    })
}

export const filterByFavourite = () => {
    return ({
        type: "FILTER_BY_FAVOURITE"
    })
}

export const filterByDeleted = () => {
    return ({
        type: "FILTER_BY_DELETED"
    })
}
export const resetFilter = () => {
    return ({
        type: "RESET_FILTER"
    })
}