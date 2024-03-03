"use client"
import { useAppSelector } from "@/app/lib/hooks"
import React from "react"
import { ProductsWishlist } from "@/app/components/ItemsLists/wishlist-products-list"
export default function Page() {
  const wishlistArray = useAppSelector((state: any) => state.wishlist.wishlist)
  return (
    <section className="min-h-full w-full">
      <div className="min-h-full w-full rounded-lg p-5 shadow-2xl">
        <h1 className="mb-4 font-poppins text-3xl">Wishlist</h1>
        {wishlistArray.length >= 1 ? (
          <ProductsWishlist candles={wishlistArray} />
        ) : (
          <p className="min-h-full w-full text-center font-poppins text-xl">
            Wish list is empty
          </p>
        )}
      </div>
    </section>
  )
}
