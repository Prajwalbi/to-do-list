import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { doSignOut } from "../firebase/auth";
import { googleAuthProvider, auth } from "../firebase/firebase";
import { useNavigate } from 'react-router-dom';

export const login = (uid) => ({
    type: "LOGIN",
    uid
});

export const startLogin = () => {
    return () => {
        signInWithPopup(auth, googleAuthProvider)
    }
}

export const logout = () => ({
    type: "LOGOUT"
})

// export const startLogout = () => {
//     const navigate = useNavigate();
//     return () => { 
//         doSignOut()
//         .then(() => {navigate("/")})
//     }
// }
