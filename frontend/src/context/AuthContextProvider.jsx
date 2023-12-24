import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { getCurrentUser } from "../api/auth.api";

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState("loading");
    
    const onSetCurrentUser = (currentUser) => {
        setUser(currentUser);
    }
    useEffect(() => {
        (async () => {
            try {
                setStatus("loading")
                const { data } = await getCurrentUser();
                setUser(data.data);
                setStatus("success")
            } catch (error) {
                setStatus("failure");
                setUser(null);
            }
        })();
    }, [])
    return <AuthContext.Provider value={{
        onSetCurrentUser,
        user,
        status
    }}>{children}</AuthContext.Provider>
}