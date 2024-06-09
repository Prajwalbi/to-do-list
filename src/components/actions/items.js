export const setItems = (items) => ({
    type: "SET_ITEMS",
    items
});

export const addItem = ({title , description, status, id} = {} ) => {
    const item = {title , description, status, id} ;
    return ({
        type: "ADD_ITEM",
        item
    })
}

export const removeItem = ({ id } = {}) => ({
    type: "REMOVE_ITEM",
    id
});
export const completedItem = ({ id } = {}) => ({
    type: "COMPLETED_ITEM",
    id
});
export const favouriteItem = ({ id } = {}) => ({
    type: "FAVOURITE_ITEM",
    id
});

