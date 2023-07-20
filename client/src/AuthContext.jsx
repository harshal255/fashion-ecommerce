import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    //for state management

   
    const [isLoggedIN, setIsLoggedIn] = useState(() => {
        // Get the login status from local storage, default to false if not present
        const storedIsLoggedIn = localStorage.getItem('isLoggedIN');
        return storedIsLoggedIn === 'true';
      });

    useEffect(() => {
        localStorage.setItem('isLoggedIN', isLoggedIN.toString());
      }, [isLoggedIN]);

    return (
        <AuthContext.Provider value={{ isLoggedIN, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;