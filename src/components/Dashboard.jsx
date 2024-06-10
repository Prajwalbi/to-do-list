import { useNavigate } from "react-router-dom";
import AddList from "./AddList";
import DisplayList from "./DisplayList";
import ListFilters from "./ListFilters";
import { doSignOut } from "./firebase/auth";
import { useDispatch } from "react-redux";
import { logout } from "./actions/auth";

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (<div>
            <button className="button button--link" onClick={() => { 
                doSignOut()
                .then(() => dispatch(logout()))
                .then(() => {navigate("/")})
                }
                }>Logout</button>
            <div style={{ display:"flex" }}>
                    <AddList />
                    <div>
                        <ListFilters />
                        <DisplayList />
                    </div>
            </div>
    </div>);
}


export default Dashboard;