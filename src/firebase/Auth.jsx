import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./utils";


const AuthContext = createContext();

const useAuth=()=>{
    return useContext(AuthContext);
}

export function createUserWithEmailPassword(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function signInUserWithEmailPassword(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(userCredential);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

export function createUserWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
//   console.log();
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export function logout(){
  let isSuccess=false;
  auth.signOut().then(()=>{
    isSuccess=true;
    console.log("Logged out successfully");
  }).catch((console.log))
  return isSuccess;
}


function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [uid, setUid] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [profilePic, setProfilePic] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [isEmailProvider, setIsEmailProvider] = useState(false);
    const [isGoogleProvider, setIsGoogleProvider] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    onAuthStateChanged(auth, setAuthState);

    function setAuthState(user){
      if(user){
        setUser(user);  
        setUid(user.uid);
        setName(user.displayName);
        setEmail(user.email);
        setProfilePic(user.photoURL);
        setIsLoggedIn(true);
        setIsVerified(user.emailVerified);
        setIsEmailProvider(user.providerData[0].providerId === 'password');
        setIsGoogleProvider(user.providerData[0].providerId === 'google.com');
      }else{
        setUser(null);
        setUid(null);
        setName("");
        setEmail("");
        setProfilePic("");
        setIsLoggedIn(false);
        setIsVerified(false);
        setIsEmailProvider(false);
        setIsGoogleProvider(false);
      }
      setIsLoading(false);
    }

    const authConfig = {user, uid, name, email, profilePic,
       isLoggedIn, isVerified, isEmailProvider, isGoogleProvider, 
       isLoading};

       console.log(authConfig);

    return (
      <AuthContext.Provider value={authConfig}>
          {children}
      </AuthContext.Provider>
    )
}

export default AuthProvider;

export {useAuth};

// // import { getAuth, onAuthStateChanged } from "firebase/auth";

// // const auth = getAuth();
// // onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
