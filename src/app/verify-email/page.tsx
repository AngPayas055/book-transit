"use client"
import { useVerifyEmail } from "../hooks/useVerifyEmail"

export default function VerifyEmail() {
  const { token } = useVerifyEmail()

  return (
    <div>
      {token}
    </div>
  )
}