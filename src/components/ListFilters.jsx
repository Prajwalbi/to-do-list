import { useState } from "react";
import { connect } from "react-redux";
import { filterByCompleted, filterByDeleted, filterByFavourite, resetFilter, setTextFilter } from "./actions/filters";
import "./styles/dashboard.css";

const ListFilters = ({ filters, dispatch }) => {
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const handleInputChange = (event) => {
    const searchText = event.target.value.trim();
    setIsInputEmpty(searchText === '');
    dispatch(setTextFilter(searchText));
  };

  return (
    <div>
      <p className="todo-title">TODO LIST</p>
      <div className="filter-container">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={filters.text}
            onChange={handleInputChange}
          />
          {isInputEmpty && <img className="search-icon" src="/src/assets/search.svg" alt="" />}
        </div>
        <div className="select-wrapper">
          <select
            className="select-filter"
            onChange={(event) => {
              if (event.target.value === "completed") {
                dispatch(filterByCompleted());
              } else if (event.target.value === "favourite") {
                dispatch(filterByFavourite());
              } else if (event.target.value === "deleted") {
                dispatch(filterByDeleted());
              } else if (event.target.value === "all") {
                dispatch(resetFilter());
              }
            }}
          >
            <option disabled selected hidden value="all">
              Filter By
            </option>
            <option className="select-filter-option" value="completed">Completed</option>
            <option className="select-filter-option" value="favourite">Favourite</option>
            <option className="select-filter-option" value="deleted">Deleted</option>
            <option className="select-filter-option" value="all">Reset filter</option>
          </select>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
}

export default connect(mapStateToProps)(ListFilters);
