import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";

export const AuthContext = createContext();

export const useAuth = () => {
    return (useContext(AuthContext));
} 

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, intializeUser)

        return () => unsubscribe();
    }, [])

     const  intializeUser = async (user) => {
        if(user){
            setCurrentUser(user);
            setUserLoggedIn(true);
        }
        else{
            setCurrentUser(null);
            setUserLoggedIn(false);
           
        }
        setLoading(false);
    }
    return (
        <AuthContext.Provider value = { {currentUser, userLoggedIn, loading}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}