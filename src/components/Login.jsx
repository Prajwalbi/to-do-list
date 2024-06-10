import { doSignInWithGoogle } from "./firebase/auth";
import { useAuth } from "./contexts/authContexts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./actions/auth";
import { useNavigate } from "react-router-dom";
import { startSetItems } from "./actions/items";
import "./styles/Login.css";

const Login = () => {
    const { userLoggedIn , loading , currentUser } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // useEffect(() => {
    //     if(userLoggedIn && currentUser){
    //         dispatch(login(currentUser.uid));
    //         dispatch(startSetItems());
    //     }
    // }, [userLoggedIn, currentUser, dispatch]);

    useEffect(() => {
        if (userLoggedIn) {
            navigate("/dashboard");
        }
    }, [userLoggedIn, navigate])
    
    const LoginHandler = async () => {
        try {
            console.log("Login function getting called")
            const result = await doSignInWithGoogle();
            console.log("logged in successfully ", result.user.uid );
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };
    return (<div >
    <button onClick={ LoginHandler }>Login through Google</button>
    <div className="div">
        <div>
            
        </div>
        <div className="img-parent">
             <img  className="rectangle-image" src="/src/assets/rect.svg"></img>
        </div>
    </div>

    </div>);
}

export default Login;