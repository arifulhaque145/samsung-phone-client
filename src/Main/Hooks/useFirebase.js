import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initalizeApp from "../Firebase/initializeFirebase";

initalizeApp();

const useFirebase = () => {
  // SPECIAL STATES
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Auth
  const auth = getAuth();

  // GOOGLE AUT
  const googleProvider = new GoogleAuthProvider();
  const googleAccount = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.displayName, user.email, (user.password = ""), "put");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(setIsLoading(false));
  };

  // EMAIL PASSWORD AUTH
  const registerAccount = (name, email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { displayName: name, email, password };
        console.log(newUser);
        setUser(user);
        saveUser(newUser.displayName, newUser.email, newUser.password, "put");
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        history.replace("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(setIsLoading(false));
  };

  // LOGIN USER
  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(setIsLoading(false));
  };

  // LOGOUT USER
  const logoutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setIsLoading(true));
  };

  // watch over user
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      }
    });
    return unsubscribe;
  }, [auth]);

  const saveUser = (displayName, email, password, method) => {
    const user = { displayName, email, password, role: "member" };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
  };

  return {
    user,
    error,
    isLoading,
    registerAccount,
    googleAccount,
    loginUser,
    logoutUser,
  };
};

export default useFirebase;
