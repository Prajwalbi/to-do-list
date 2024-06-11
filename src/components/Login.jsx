
import { useAuth } from "./contexts/authContexts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./actions/auth";
import { useNavigate } from "react-router-dom";
import { startSetItems } from "./actions/items";
import "./styles/LoginSignup.css";
import { doSignInWithGoogle } from "./firebase/auth";

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
    return (<>
    {/* <button onClick={ LoginHandler }>Login through Google</button> */}
    <div className="login-signup">
      <div className="desktop-1-wrapper">
        <div className="desktop-1">
          <img className="brands-instagram" alt="" />
          <div className="login">LOGIN</div>
          <img className="group-icon" alt="" src="/group.svg" />
          <button onClick={ LoginHandler } className="desktop-1-inner">
            <div className="button-parent">
              <div className="sign-in-using">Sign in using Google</div>
              <div className="group-child" />
              <img
                className="grommet-iconsgoogle"
                alt=""
                src="/grommeticonsgoogle.svg"
              />
            </div>
          </button>
          <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh dolor dui. `}</div>
          <img
            className="illustration-export-icon"
            alt=""
            src="/illustration-export@2x.png"
          />
        </div>
      </div>
    </div>
    </>);
}

export default Login;