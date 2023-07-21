import { useState, useEffect, createContext } from "react";
import axios from "axios";

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

  const [userDetails, setUserDetails] = useState("");
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/me", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const userDetails = response.data.user;
      setUserDetails(userDetails); // Set the user profile details in the state variable
    } catch (error) {
      console.error("Failed to fetch user profile details:", error);
      alert(error.response.data.message);
    }
  };


  return (
    <AuthContext.Provider value={{ isLoggedIN, setIsLoggedIn, userDetails, fetchUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;