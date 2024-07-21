import { useState } from "react";

export function useWrite () {
  
  const [selectedKey, setSelectedKey] = useState<string>('1');
  const handleMenuClick = (e:any) => {
    setSelectedKey(e.key);
  };
  return {
    handleMenuClick,selectedKey
  }
}