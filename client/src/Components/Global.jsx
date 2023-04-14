import { createContext, useState } from 'react';

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
    const [users, setUsers] = useState();
    const [authName, setAuthName] = useState(null);
    const [logged, setLogged] = useState(null);
    const [authRole, setAuthRole] = useState(null);
    const [route, setRoute] = useState('home');

    return (
        <Global.Provider
            value={{
                users,
                setUsers,
                authName,
                setAuthName,
                logged,
                setLogged,
                authRole,
                setAuthRole,
                route,
                setRoute,
            }}
        >
            {children}
        </Global.Provider>
    );
};
