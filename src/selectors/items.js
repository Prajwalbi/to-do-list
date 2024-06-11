

const getVisibleItems = (items, {text="", filterBy="reset" }) => {
    const filterResult = (item) => {
        if(filterBy === "reset" && item.status != "deleted"){
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
    const filterResultt = (item) => {
        switch(filterBy){
            case "deleted": 
                return item.status === "deleted";
            case "completed":
                return item.status === "completed";
            case "favourite":
                return item.status === "favourite";
            case "reset":
                return item.status !== "deleted";
            default:
                return item.status !== "deleted";
        }
    }

    
    return items.filter((item) => {
        const textMatch = text === "" || item.title.toLowerCase().includes(text.toLowerCase());
        let filterMatch = filterResultt(item);

        return textMatch && filterMatch;
    })

}


export default getVisibleItems;