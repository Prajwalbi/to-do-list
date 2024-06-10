import { connect } from "react-redux";
import { startCompletedItem, startFavouriteItem, startRemoveItem } from "./actions/items";
import getVisibleItems from "./selectors/items";

const DisplayList = ({itemsList, filters, startRemoveItem, startCompleteItem, startFovouriteItem}) => {

    const items = getVisibleItems(itemsList, filters);

    const handleDelete = (id) => {
        startRemoveItem({id});
    }
    const handleComplete = (id) => {
        console.log("The generated id is " , id);
        startCompleteItem({id});
    }
    const handleFovourite = (id) => {
        console.log("The generated id is " , id);
        startFovouriteItem({id});
    }

    return (<>
        {items.map((item) => (
        
            //  item.status !== "deleted" &&
            <div key={item.id}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <button onClick={ () => handleDelete(item.id) }>Delete</button>
                <button onClick={ () => handleComplete(item.id) }>Complete</button>
                <button onClick={ () => handleFovourite(item.id) }>Favourite</button>
            </div>
  ))}
    </>);
}

const mapStateToProps = (state) => ({
    itemsList: state.items,
    filters: state.filters
})



const mapDispatchToProps = (dispatch) => ({
    startRemoveItem : (id) => dispatch(startRemoveItem( id )),
    startCompleteItem : (id) => dispatch(startCompletedItem( id )),
    startFovouriteItem : (id) => dispatch(startFavouriteItem( id ))
})
export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);

