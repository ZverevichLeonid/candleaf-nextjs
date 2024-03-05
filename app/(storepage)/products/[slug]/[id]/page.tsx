import { ProductItem } from "@/app/components/ProductPage/product-item"
import { ProductPageSkeleton } from "@/app/components/Skeletons/product-page-skeleton"
import { fetchProductsData } from "@/app/lib/data"
import { createSlug } from "@/app/lib/utils"
import { Suspense } from "react"

export async function generateStaticParams() {
  const candles = await fetchProductsData("", 1)
  return candles.map((candle) => ({
    slug: createSlug(candle.name),
    id: String(candle.id),
  }))
}

export default async function Page({
  params,
}: {
  params: { slug: string; id: string }
}) {
  return (
    <section className="">
      <div className="container mx-auto p-5">
        <Suspense fallback={<ProductPageSkeleton />}>
          <ProductItem params={params} />
        </Suspense>
      </div>
    </section>
  )
}
