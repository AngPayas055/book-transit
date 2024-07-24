"use client"
import { useAdmin } from "../hooks/useAdmin"
export default function Admin () {
  const {users} = useAdmin()
  return (
    <div>
    {users.length > 0 && users.map((user) => (
      <div key={user._id}> {/* Add unique key here */}
        {user.firstName} <br />
      </div>
    ))}
    </div>
  )
}