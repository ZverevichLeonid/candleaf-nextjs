import Link from "next/link"
import React, { Suspense } from "react"
import { CollectionsTable } from "@/app/components/Dashboard/tables/collections-table"
import { TableCollectionsSkeleton } from "@/app/components/Skeletons/table-collections-skeleton"

export default async function page() {
  return (
    <section>
      <h1 className="mb-14 font-roboto text-2xl">Collections</h1>
      <Suspense fallback={<TableCollectionsSkeleton />}>
        <CollectionsTable />
      </Suspense>
      <div className="">
        <Link
          className=" rounded-lg bg-[#56b280] px-12 py-4 text-sm font-medium text-white transition-colors hover:bg-[#88c4a7]"
          href={"/dashboard/collections/create"}
        >
          Add collection
        </Link>
      </div>
    </section>
  )
}
