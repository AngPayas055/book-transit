import { useState, useContext, createContext, ReactNode, useEffect } from "react";
import { useNotification } from "../context/notificationContext";

interface HeaderContextProps {
  firstName: string;
  setFirstName: (name: string) => void;
  setUserFirstName: (name: string) => void;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (bool: boolean) =>void;
  logout: () => void
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
  useEffect(() => {
    setUser()
  },[] )
  const { openNotificationWithIcon } = useNotification();
  const setUserFirstName = (name: string) => {
    setFirstName(name);
  };
  const setUser = () => {
    const storageToken = localStorage.getItem("token")
    if(storageToken && storageToken?.length > 0){
      setIsUserLoggedIn(true)
      setFirstName(localStorage.getItem("firstName") || "")
    }else{
      setIsUserLoggedIn(false)
    }
  }
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    openNotificationWithIcon('info', 'Info', 'You are now logged out. Have a great day!');
    setUser()
  }

  return (
    <HeaderContext.Provider value={{ firstName, setFirstName, setUserFirstName, isUserLoggedIn, setIsUserLoggedIn, logout }}>
      {children}
    </HeaderContext.Provider>
  );
}
