import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [favs, setFavs] = useState([]);

  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (response) => {
        await setDoc(doc(db, "users", `${response.user}`), {});
      }
    );
  };

  const logIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    signOut(auth);
    setUser(null);
  };

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).then(async (response) => {
      await setDoc(doc(db, "users", `${response.user}`), {});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser(currentUser.uid);
    });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    if (!user) return setFavs([]);
    const favRef = doc(db, `users/${user}`);
    getDoc(favRef).then((doc) => {
      const userFavs = doc.data().favorites;
      if (userFavs) {
        setFavs(() => userFavs);
      }
    });
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ signUp, logIn, loginWithGoogle, logOut, user, favs, setFavs }}
    >
      {children}
    </AuthContext.Provider>
  );
}
