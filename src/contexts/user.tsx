import { createContext, useState } from "react";

export type UserProps = {
  name: string,
  token: string,
};

type AuthContextProps = {
  user: UserProps | null;
  login: (user: UserProps) => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  const login = (user: UserProps) => {
    setUser(user);

    console.log(user);
  }

  const logOut = () => {
    setUser(null);
    console.log('logOut')
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logOut 
    }}>
      <>{children}</>
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };