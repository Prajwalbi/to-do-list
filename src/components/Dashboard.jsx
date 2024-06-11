import { useNavigate } from "react-router-dom";
import AddList from "./AddList";
import ListFilters from "./ListFilters";
import { doSignOut } from "./firebase/auth";
import { useDispatch } from "react-redux";
import { logout } from "./actions/auth";
import "./styles/dashboard.css"
import DisplayList1 from "./DisplayList1";


const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (<div>
            <div className="parent-container">
                    <div className="left-container">
                        <div className="logo-container">
                             <img className="logo" src="/group.svg" alt="logo" />  
                        </div>
                        <AddList />
                    </div>
                    <div className="vertical-line"></div>
                        <div className="right-container">
                            <div className="button-container">
                                <button  className="button-26" onClick={() => { 
                                doSignOut()
                                // .then(() => dispatch(logout()))
                                .then(() => {navigate("/")})
                                }
                                }>Logout</button>
                        </div>
                        <ListFilters />
                        <DisplayList1 />
                    </div>
            </div>
    </div>);
}


export default Dashboard;