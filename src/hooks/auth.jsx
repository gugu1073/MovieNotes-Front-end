import { createContext, useContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}) {
  async function 
  
  return(
    <AuthContext.Provider value={{email: 'ga2157724@gmail.com'}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  
  return context;
}

export {AuthProvider, useAuth};