import { AuthContext } from "./AuthContext";

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
  return (
    <AuthContext value={{ }}>
        {children}
    </AuthContext>
  );
}
