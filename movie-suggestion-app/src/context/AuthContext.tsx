import { createContext, useState, useEffect, PropsWithChildren } from 'react';
type User = {
    username: string;
    password: string;
};
const data: User = {
    username: '',
    password: '',
};
const AuthContext = createContext<User>(data);

export default AuthContext;

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [auhtTokens, setAuthTokens] = useState();
    const [user, setUser] = useState();

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
