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
  const [checkUser, setCheckUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState("");

  // Auth
  const auth = getAuth();

  // GOOGLE AUT
  const googleProvider = new GoogleAuthProvider();
  const googleAccount = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(
          user.uid,
          user.displayName,
          user.email,
          (user.password = ""),
          "put"
        );
        const destination = location?.state?.from || "/dashboard";
        history.replace(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(setIsLoading(false));
  };

  // EMAIL PASSWORD AUTH
  const registerAccount = (name, email, password, history, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const uid = result.user.uid;
        const newUser = { uid, displayName: name, email, password };
        saveUser(
          uid,
          newUser.displayName,
          newUser.email,
          newUser.password,
          "put"
        );
        
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        setAlert("Account successfully created");
        // const destination = location?.state?.from || "/";
        history.replace("/");
        window.location.reload(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(setIsLoading(false));
  };

  // LOGIN USER
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setAlert("Successfully Logged In");
        const destination = location?.state?.from || "/dashboard";
        if (email === "admin@admin.com") {
          history.replace("/dashboard");
        } else {
          history.replace(destination);
        }
        window.location.reload(true);
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
        window.location.reload(true);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setIsLoading(true));
  };

  const deleteNewUser = (id) => {
    console.log(id, "Work in process....");
  };

  useEffect(() => {
    fetch(`https://quiet-savannah-39001.herokuapp.com/users/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setCheckUser(data));
  }, [user.uid]);

  // watch over user
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const saveUser = (uid, displayName, email, password, method) => {
    const user = { uid, displayName, email, password, role: "member" };
    fetch("https://quiet-savannah-39001.herokuapp.com/users", {
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
    deleteNewUser,
    checkUser,
    alert,
  };
};

export default useFirebase;
