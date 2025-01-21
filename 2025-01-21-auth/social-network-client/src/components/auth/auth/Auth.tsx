import { createContext, PropsWithChildren, useState } from 'react';
import './Auth.css'

interface AuthContextInterface {
    jwt: string;
    setJwt: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextInterface | null>(null)

function Auth({ children }: PropsWithChildren): JSX.Element {

    const [jwt, setJwt] = useState<string>('');

    return (
        <AuthContext.Provider value={{ jwt, setJwt }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth;