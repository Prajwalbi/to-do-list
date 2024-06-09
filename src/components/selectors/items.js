

const getVisibleItems = (items, {text="", filterBy="" }) => {
    const filterResult = (item) => {
        if(filterBy === "" && item.status != "deleted"){
            return true;
        }else if(filterBy === "deleted" && item.status === "deleted"){
            return true;
        }else if(filterBy === "completed" && item.status === "completed"){
            return true;
        }else if(filterBy === "favourite" && item.status === "favourite"){
            return true;
        }else{
            return true;
        }
    }
    return items.filter((item) => {
        const textMatch = text === "" || item.title.toLowerCase().includes(text.toLowerCase());
        let filterMatch = filterResult(item);

        return textMatch && filterMatch;
    })

}


export default getVisibleItems;