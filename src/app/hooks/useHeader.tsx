import { useState, useContext, createContext, ReactNode, useEffect } from "react";
import { useNotification } from "../context/notificationContext";
import { useRouter } from "next/navigation";

interface HeaderContextProps {
  firstName: string;
  setFirstName: (name: string) => void;
  setUserFirstName: (name: string) => void;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (bool: boolean) =>void;
  logout: () => void;
  userId: string 
  setUserId:(name: string) => void;
  adminPage: () => void;
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
  const [isUserLoggedIn, setIsUserLoggedIn ] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const router = useRouter()
  useEffect(() => {
    setUser()
  },[] )
  const { openNotificationWithIcon } = useNotification();
  const setUserFirstName = (name: string) => {
    setFirstName(name);
  };
  const setUser = () => {
    const storageToken = localStorage.getItem("token")
    const storageId = localStorage.getItem("id")
    if(storageToken && storageToken?.length > 0){
      setIsUserLoggedIn(true)
      setFirstName(localStorage.getItem("firstName") || "")
      if(storageId && storageId?.length > 0){
        setUserId(storageId)        
      }
    }else{
      setIsUserLoggedIn(false)
    }
  }
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("id");
    setUserId("")
    router.push('/signin');
    openNotificationWithIcon('info', 'Info', 'You are now logged out. Have a great day!');
    setUser()
  }
  const adminPage = () => {
    router.push('/admin');
  }
  return (
    <HeaderContext.Provider value={{ 
      firstName, 
      setFirstName, 
      setUserFirstName, 
      isUserLoggedIn, 
      setIsUserLoggedIn, 
      logout,
      userId, 
      setUserId,
      adminPage
     }}
      >
        {children}
    </HeaderContext.Provider>
  );
}
