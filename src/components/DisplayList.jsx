// import { connect } from "react-redux";
// import { startCompletedItem, startFavouriteItem, startRemoveItem } from "./actions/items";
// import getVisibleItems from "./selectors/items";

// const DisplayList = ({itemsList, filters, startRemoveItem, startCompleteItem, startFovouriteItem}) => {

//     const items = getVisibleItems(itemsList, filters);

//     const handleDelete = (id) => {
//         startRemoveItem({id});
//     }
//     const handleComplete = (id) => {
//         console.log("The generated id is " , id);
//         startCompleteItem({id});
//     }
//     const handleFovourite = (id) => {
//         console.log("The generated id is " , id);
//         startFovouriteItem({id});
//     }

//     return (<>
//         {items.map((item) => (
        
//             //  item.status !== "deleted" &&
//             <div key={item.id} className="list-contianer">
//                 <p>{item.title}</p>
//                 <p>{item.description}</p>
//                 <button onClick={ () => handleDelete(item.id) }>Delete</button>
//                 <button onClick={ () => handleComplete(item.id) }>Complete</button>
//                 <button onClick={ () => handleFovourite(item.id) }>Favourite</button>
//             </div>
//   ))}
//     </>);
// }

// const mapStateToProps = (state) => ({
//     itemsList: state.items,
//     filters: state.filters
// })



// const mapDispatchToProps = (dispatch) => ({
//     startRemoveItem : (id) => dispatch(startRemoveItem( id )),
//     startCompleteItem : (id) => dispatch(startCompletedItem( id )),
//     startFovouriteItem : (id) => dispatch(startFavouriteItem( id ))
// })
// export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { startCompletedItem, startFavouriteItem, startRemoveItem } from './actions/items';
import getVisibleItems from './selectors/items';
import './styles/dashboard.css';


const DisplayList = ({ itemsList, filters, startRemoveItem, startCompleteItem, startFavouriteItem }) => {
  const items = getVisibleItems(itemsList, filters);
  const [visibleDropdownId, setVisibleDropdownId] = useState(null);

  const handleDelete = (id) => {
    startRemoveItem({ id });
  };

  const handleComplete = (id) => {
    startCompleteItem({ id });
  };

  const handleFavourite = (id) => {
    startFavouriteItem({ id });
  };

  const toggleDropdown = (id) => {
    setVisibleDropdownId(visibleDropdownId === id ? null : id);
  };

  useEffect(() => {
    const closeDropdown = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setVisibleDropdownId(null);
      }
    };

    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [visibleDropdownId]);

  return (
    <>
      {items.map((item) => (
        <div>
        <div key={item.id} className="list-container">
        <div className="left-list-content">
          <p className='list-title'>{item.title}</p>
          <p className='list-description'>{item.description}</p>
        </div>
          <div className="dropdown-container">
            <img
              className="dropdown-icon"
              src="/src/assets/dropDownIcon.svg"
              alt="Dropdown Icon"
              onClick={() => toggleDropdown(item.id)}
            />
            {visibleDropdownId === item.id && (
              <div className="dropdown-menu">
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => handleComplete(item.id)}>Complete</button>
                <button onClick={() => handleFavourite(item.id)}>Favourite</button>
              </div>
            )}
          </div>
        </div>
        <div class="horizontal-line"></div>
        </div>
      ))}
      
    </>
  );
};

const mapStateToProps = (state) => ({
  itemsList: state.items,
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  startRemoveItem: (id) => dispatch(startRemoveItem(id)),
  startCompleteItem: (id) => dispatch(startCompletedItem(id)),
  startFavouriteItem: (id) => dispatch(startFavouriteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);
