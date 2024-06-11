import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { googleAuthProvider } from "./firebase";
const auth = getAuth();

  export const doSignInWithGoogle =async () => {
    try{
      const result = await signInWithPopup(auth, googleAuthProvider);
      return result; //here promise is returned , so that we can handle it efficiently in Login.jsx
    }catch(err){
      console.log("The error during siging in ", err);
      throw err;
    }
  }


export const doSignOut = async () => {
   try{
    console.log("Logout function is getting called")
    const result = await auth.signOut();
    console.log("Logged out succcessfully!")
    return result;
   }catch(err){
      console.log("error during sign out", err);
   }
}