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
        saveUser(
          user.uid,
          user.displayName,
          user.email,
          (user.password = ""),
          "put"
        );

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
        history.push("/login");
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
        setUser(userCredential.user);
        fetch(`http://localhost:5000/users/${userCredential.user.uid}`)
          .then((res) => res.json())
          .then((data) => setCheckUser(data));
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

  const saveUser = (uid, displayName, email, password, method) => {
    const user = { uid, displayName, email, password, role: "member" };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    setCheckUser(user);
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
  };
};

export default useFirebase;
