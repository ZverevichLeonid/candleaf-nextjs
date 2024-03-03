"use client"
import { useCustomSession } from "./useCustomSession"
import { redirect } from "next/navigation"

export const useAdminStatus = () => {
  const { isAdmin, isLoading, email, image, name } = useCustomSession()
  if (!isAdmin && !isLoading) redirect("/")
  return { isAdmin, isLoading, email, image, name }
}
