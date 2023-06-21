import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
    logged: false,
}
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [state, dispatch] =  useReducer(authReducer, {});
  return (
    <AuthContext value={{ }}>
        {children}
    </AuthContext>
  );
}