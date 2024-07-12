import { useState } from "react";

export function useHeader () {
  const [firstName, setFirstName] = useState<string>("dsf");

  const setUserFirstName = (fName:string) => {
    setFirstName(fName)
  }
  return {
    firstName,
    setFirstName,
    setUserFirstName
  }
}