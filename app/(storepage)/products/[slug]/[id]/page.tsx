import { AddButton } from "@/app/components/Buttons/add-to-cart-button"
import { ProductItem } from "@/app/components/ProductPage/product-item"
import { ProductPageSkeleton } from "@/app/components/Skeletons/product-page-skeleton"
import { WishListButton } from "@/app/components/Buttons/wishlist-button"
import { fetchProduct, fetchProductsData } from "@/app/lib/data"
import { calculateDiscountPrice, createSlug } from "@/app/lib/utils"
import Image from "next/image"
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
