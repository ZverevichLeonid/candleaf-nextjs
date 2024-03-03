import { fetchUsers } from "@/app/lib/data"
import React from "react"
import { UserTable } from "./user-table"

export const UserTableWrapper = async ({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}) => {
  const users = await fetchUsers(query, currentPage)
  return <UserTable users={users} />
}
