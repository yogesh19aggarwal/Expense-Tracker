import { createContext } from "react";

const AuthContext = createContext({
    user: null,
    onSetCurrentUser: undefined,
    status : "loading"
});

export default AuthContext;