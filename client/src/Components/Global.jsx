import { createContext } from 'react';

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
    return <Global.Provider value={{}}>{children}</Global.Provider>;
};
