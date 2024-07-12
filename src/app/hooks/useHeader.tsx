import { useState, useContext, createContext, ReactNode } from "react";

interface HeaderContextProps {
  firstName: string;
  setFirstName: (name: string) => void;
  setUserFirstName: (name: string) => void;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (bool: boolean) =>void
}

const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

export function useHeader() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
}

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [firstName, setFirstName] = useState<string>("");
  const [isUserLoggedIn, setIsUserLoggedIn ] = useState<boolean>(false)

  const setUserFirstName = (name: string) => {
    setFirstName(name);
  };

  return (
    <HeaderContext.Provider value={{ firstName, setFirstName, setUserFirstName, isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </HeaderContext.Provider>
  );
}
