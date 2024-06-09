import AddList from "./AddList";
import DisplayList from "./DisplayList";
import ListFilters from "./ListFilters";

const Dashboard = () => {
    return (<div style={{ display:"flex" }}>
            <AddList />
            <div>
                <ListFilters />
                <DisplayList />
            </div>
    </div>);
}


export default Dashboard;