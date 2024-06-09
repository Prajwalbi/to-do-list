export const setItems = (items) => ({
    type: "SET_ITEMS",
    items
});
export const startAddExpense = (expenseData = {}) => {
    // console.log("startAddExpense thunk called");
    return async (dispatch, getState) => { // Using async/await for asynchronous operation
        try {
            const uid = getState().auth.uid ;
            const { description = "", note = "", amount = 0, createdAt = 0 } = expenseData;
            const expense = { description, note, amount, createdAt };
            const expenseRef = ref(database, `users/${uid}/expenses`);
            const pushExpenseRef = push(expenseRef);
            await set(pushExpenseRef, expense); // Wait for the set operation to complete
            dispatch(addExpense({
                id: pushExpenseRef.key,
                ...expense // Spread the expense object to include all properties
            }));
        } catch (error) {
            console.log("The error in add expense is ", error);
        }
    };
};

export const startAddItem = (ItemsData = {}) => {
    // console.log("startAddItem thunk called");
    return async(dispatch, getState) => {
        try {
            const uid = getState().auth.uid ;
            const { title, description, status, id  } = 
        }
    }
}
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

