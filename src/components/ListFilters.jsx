import { useState } from "react";
import { connect } from "react-redux";
import { filterByCompleted, filterByDeleted, filterByFavourite, resetFilter, setTextFilter } from "./actions/filters";
const ListFilters = ({filters, dispatch}) => {
   

    return (<div>
        <input type="text" placeholder="search" value={filters.text} onChange={ (event) =>  dispatch(setTextFilter(event.target.value)) }/>
        
        <select
        onChange={(event) => {
            console.log("filtetr function is getting called", event.target.value);
            if (event.target.value === "completed") {
            dispatch(filterByCompleted());
            } else if (event.target.value === "favourite") {
            dispatch(filterByFavourite());
            } else if (event.target.value === "deleted") {
            dispatch(filterByDeleted());
            }else if(event.target.value === "all"){
                dispatch(resetFilter());
            }
        }}
        >
        <option value="all">No filter</option>
        <option value="completed">Completed</option>
        <option value="favourite">Favourite</option>
        <option value="deleted">Deleted</option>
        </select>


    </div>);
}

const mapStateToProps = (state) =>{
   return {
         filters: state.filters
   }
}
export default connect(mapStateToProps)(ListFilters);