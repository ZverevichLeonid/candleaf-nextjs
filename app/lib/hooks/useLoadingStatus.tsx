"use client"
import { useSession } from "next-auth/react"
import React, { useEffect, useState } from "react"
export const useLoadingStatus = () => {
  const session = useSession()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (session.status !== "loading") setIsLoading(false)
  }, [session])
  return isLoading
}
