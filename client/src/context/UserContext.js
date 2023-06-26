import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}
export const AuthContextProvider = (props) => {
    const [authUser,setAuthUser]=useState(null);
    const [isLogged,setisLogged]=useState(false);
    const state={
        authUser,
        setAuthUser,
        isLogged,
        setisLogged
    }
 return(
    
    <AuthContext.Provider value={state}>
    {props.children}
    </AuthContext.Provider>
 )
}