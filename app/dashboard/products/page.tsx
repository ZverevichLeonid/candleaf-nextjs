import Link from "next/link"
import { CandlesTable } from "@/app/components/Dashboard/tables/candles-table"
import { Suspense } from "react"
import { TableProductsSkeleton } from "@/app/components/Skeletons/table-products-skeleton"
import Pagination from "@/app/components/Dashboard/pagination"
import { fetchProductsPages } from "@/app/lib/data"
export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ""
  const totalPages = await fetchProductsPages(query)
  const currentPage = Number(searchParams?.page) || 1
  return (
    <section>
      <h1 className="mb-14 font-roboto text-2xl">Products</h1>
      <Suspense fallback={<TableProductsSkeleton />}>
        <CandlesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="flex items-center justify-between gap-5">
        <Pagination totalPages={totalPages} />
        <Link
          className=" rounded-lg bg-[#56b280] px-12 py-4 text-sm font-medium text-white transition-colors hover:bg-[#88c4a7]"
          href={"/dashboard/products/create"}
        >
          Add product
        </Link>
      </div>
    </section>
  )
}
