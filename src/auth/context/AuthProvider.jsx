import { useReducer } from "react";

import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
    logged: false,
}

const init = () => {
  const user = JSON.parse( localStorage.getItem('user'));
  return {
    logged: !!user,
    user: user,
  }
}
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [authState, dispatch] =  useReducer(authReducer, initialState);

    const login = (name = '') => {
      const action = {
        type: types.login,
        payload: {
          id: 'ABC',
          name: name
        }
      }
      dispatch(action);
    }
  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login
     }}>
        {children}
    </AuthContext.Provider>
  );
}
