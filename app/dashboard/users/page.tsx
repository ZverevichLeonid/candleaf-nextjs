import { fetchUsersPages } from "@/app/lib/data"
import React, { Suspense } from "react"
import { TableUsersSkeleton } from "@/app/components/Skeletons/table-users-skeleton"
import Pagination from "@/app/components/Dashboard/pagination"
import { UserTableWrapper } from "@/app/components/Dashboard/tables/user-table-wrapper"
export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ""
  const totalPages = await fetchUsersPages(query)
  const currentPage = Number(searchParams?.page) || 1
  return (
    <section>
      <h1 className="mb-14 font-roboto text-2xl">Users</h1>
      <Suspense fallback={<TableUsersSkeleton />}>
        <UserTableWrapper currentPage={currentPage} query={query} />
      </Suspense>
      <div className="flex items-center justify-between gap-5">
        <Pagination totalPages={totalPages} />
      </div>
    </section>
  )
}
