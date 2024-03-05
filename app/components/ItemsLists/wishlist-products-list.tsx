import React from "react"
import Image from "next/image"
import Link from "next/link"
import { createSlug } from "@/app/lib/utils"
import { HeartIcon } from "@heroicons/react/24/solid"
import { useAppDispatch } from "../../lib/hooks"
import { deleteProduct, wishlistItem } from "../../lib/slices/wishlist-slice"
export const ProductsWishlist = ({ candles }: { candles: wishlistItem[] }) => {
  const dispatch = useAppDispatch()
  return (
    <section className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {candles &&
        candles.map((candle) => {
          return (
            <article className="relative" key={candle.id}>
              <button
                onClick={() => dispatch(deleteProduct({ id: candle.id }))}
                className="absolute right-2 top-2"
              >
                <HeartIcon
                  className="text-[#56b280] transition-all hover:text-gray-300"
                  width={20}
                  height={20}
                />
              </button>
              <Link
                className="flex flex-col bg-[#F7F8FA] shadow-xl transition-all hover:shadow-2xl"
                href={`/products/${createSlug(candle.name)}/${candle.id}`}
              >
                <Image
                  className="max-h-[225px] min-h-[225px] w-full object-cover"
                  src={candle.image}
                  alt={candle.name}
                  width={300}
                  height={225}
                />
                <div className="bg-white p-6 ">
                  <span className="block font-poppins text-base font-medium tracking-tighter text-[#1D293F]">
                    {candle.name}
                  </span>
                  {candle.discountPrice ? (
                    <span className="float-right flex gap-2 font-roboto text-xl font-medium text-[#56B280]">
                      <span className="text-xs text-black line-through">
                        {candle.price}$
                      </span>
                      {candle.discountPrice}$
                    </span>
                  ) : (
                    <span className="float-right flex gap-2 font-roboto text-xl font-medium text-[#56B280]">
                      {candle.price.toFixed(2)}$
                    </span>
                  )}
                </div>
              </Link>
            </article>
          )
        })}
    </section>
  )
}
