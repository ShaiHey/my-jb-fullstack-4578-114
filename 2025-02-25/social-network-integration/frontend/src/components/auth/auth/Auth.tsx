import { createContext, PropsWithChildren, useState } from 'react';
import './Auth.css'

interface AuthContextInterface {
    jwt: string;
    newLogin (jwt: string): void;
    logout (): void;
}

export const AuthContext = createContext<AuthContextInterface | null>(null)

function Auth({ children }: PropsWithChildren): JSX.Element {

    const JWT_KEY_NAME = 'jwt'

    const [jwt, setJwt] = useState<string>(localStorage.getItem(JWT_KEY_NAME) || '');

    function newLogin(jwt: string) {
        setJwt(jwt)
        localStorage.setItem(JWT_KEY_NAME, jwt)
    }

    function logout() {
        localStorage.removeItem(JWT_KEY_NAME)
        setJwt('')
    }

    return (
        <AuthContext.Provider value={{ jwt, newLogin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth;