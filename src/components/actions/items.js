import database from "../firebase/firebase";
import { ref, set ,get, push, update} from "../firebase/firebase";

export const setItems = (items) => ({
    type: "SET_ITEMS",
    items
});


export const  startSetItems= () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const startCountRef = ref(database, `users/${uid}/items`);
        get(startCountRef).then((snapshot) => {
            const items = [];
            snapshot.forEach((childSnapshot) => {
                const id = childSnapshot.key;
                items.push({
                    id,
                    ...childSnapshot.val()
                });
            });
            dispatch(setItems(items));
        }).catch((err) => {
            console.log("Error occured while retrieving the data ",err)
        });
    }
}

export const startAddItem = (ItemsData = {}) => {
    // console.log("startAddItem thunk called");
    return async(dispatch, getState) => {
        try {
            const uid = getState().auth.uid ;
            const { title = "", description = "", status ="submitted" } = ItemsData;
            const item =  {title, description, status}
            const itemRef = ref(database, `users/${uid}/items`);
            const pushItemRef = push(itemRef);
            await set(pushItemRef, item);
            console.log("the user id is " , uid);
            dispatch(addItem({
                id : pushItemRef.key,
                ...item
            }))
        }catch (error) {
            console.log("The error in add expense is ", error);
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




export const startRemoveItem = ({ id }) => {
    return (dispatch, getState) => {
        console.log("remove function is called")
        const uid = getState().auth.uid;
        const itemRef = ref(database, `users/${uid}/items/${id}`);

        get(itemRef).then((snapshot) => {
            if (snapshot.exists()) {

                const updatedData = { ...snapshot.val(), status: "deleted" };
                update(itemRef, updatedData)
                    .then(() => {
                        dispatch(removeItem({ id }))
                        console.log("Item status deleted successfully");
                    })
                    .catch((error) => {
                        console.error("Error updating item status:", error);
                    });
            } else {
                console.error("No data found at the specified location");
            }
        }).catch((error) => {
            console.error("Error getting item data:", error);
        });
    };
};

export const removeItem = ({ id } = {}) => ({
    type: "REMOVE_ITEM",
    id
});

export const startCompletedItem = ({ id }) => {
    return (dispatch, getState) => {
        console.log("remove function is called")
        const uid = getState().auth.uid;
        const itemRef = ref(database, `users/${uid}/items/${id}`);

        get(itemRef).then((snapshot) => {
            if (snapshot.exists()) {

                const updatedData = { ...snapshot.val(), status: "completed" };
                update(itemRef, updatedData)
                    .then(() => {
                        dispatch(completedItem({ id }))
                        console.log("Item status completed successfully");
                    })
                    .catch((error) => {
                        console.error("Error updating item status:", error);
                    });
            } else {
                console.error("No data found at the specified location");
            }
        }).catch((error) => {
            console.error("Error getting item data:", error);
        });
    };
};
export const completedItem = ({ id } = {}) => ({
    type: "COMPLETED_ITEM",
    id
});

export const startFavouriteItem = ({ id }) => {
    return (dispatch, getState) => {
        console.log("favourite function is called")
        const uid = getState().auth.uid;
        const itemRef = ref(database, `users/${uid}/items/${id}`);

        get(itemRef).then((snapshot) => {
            if (snapshot.exists()) {

                const updatedData = { ...snapshot.val(), status: "favourite" };
                update(itemRef, updatedData)
                    .then(() => {
                        dispatch(favouriteItem({ id }))
                        console.log("Item status - favourite successfully");
                    })
                    .catch((error) => {
                        console.error("Error updating item status:", error);
                    });
            } else {
                console.error("No data found at the specified location");
            }
        }).catch((error) => {
            console.error("Error getting item data:", error);
        });
    };
};
export const favouriteItem = ({ id } = {}) => ({
    type: "FAVOURITE_ITEM",
    id
});

