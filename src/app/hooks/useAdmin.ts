import { useEffect, useState } from "react";
import { getUsers } from "../services/api/user"
import { IUser } from "../interface/user";

export function useAdmin () {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    handleGetUsers()
  },[] )
  useEffect(() => {
    console.log('j',users)
  },[users] )

  const handleGetUsers = async () => {
    const users = await getUsers()
    setUsers(users.users)
    console.log(users)
  }
  return{
    users
  }
}