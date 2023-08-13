import { createContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{} | null>(null);
  const [projects, setProjects] = useState({});

  return (
    <AuthContext.Provider value={{ 
      user, 
      setUser,
      projects,
      setProjects,
    }}>
      <>{children}</>
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };