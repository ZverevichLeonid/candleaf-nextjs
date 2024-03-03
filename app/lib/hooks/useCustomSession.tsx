import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import React, { useEffect, useState } from "react"

type useCustomSessionType = () => {
  name: string
  image: string
  email: string
  isAdmin: boolean
  isLoading: boolean
}
export const useCustomSession: useCustomSessionType = () => {
  const session = useSession()
  const [name, setName] = useState("User")
  const [image, setImage] = useState("/profile.svg")
  const [email, setEmail] = useState("gmail.com")
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    if (session.status === "unauthenticated") redirect("/sign-in")
    if (session.status === "authenticated") {
      setIsloading(false)
      setName(session.data.user.name)
      setImage(session.data.user.image)
      setEmail(session.data.user.email)
      setIsAdmin(session.data.user.role === "admin")
    }
  }, [session])

  return {
    name,
    image,
    email,
    isAdmin,
    isLoading,
  }
}
