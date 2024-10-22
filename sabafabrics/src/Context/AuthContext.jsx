import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../pages/utils/firebase";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => subscribe();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
