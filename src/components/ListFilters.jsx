import { useState } from "react";

const ListFilters = () => {
    const [search, setSearch ] = useState("");
    const searchHandler = (e) => {
        setSearch(e.target.value);

    }

    return (<div>
        <input type="text" placeholder="search" value={search} onChange={ searchHandler }/>
        <label for="languages">List of Languages:</label>
        <select name="" id="languages">
        <option value="">filterBy</option>
        <option value="completed">Completed</option>
        <option value="favourite">Favourite</option>
        <option value="deleted">Deleted</option>
        
        </select>

    </div>);
}

export default ListFilters;