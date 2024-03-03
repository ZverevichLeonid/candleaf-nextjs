import React from "react"
import Image from "next/image"
import Link from "next/link"
import { calculateDiscountPrice, createSlug } from "@/app/lib/utils"
import { Candle } from "@prisma/client"

export const ProductsList = ({
  candles,
}: {
  candles: {
    id: number
    name: string
    image: string
    price: number
    collection: {
      discount: boolean
      discountValue: number
    } | null
  }[]
}) => {
  return (
    <section className="mt-14 grid  grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {candles &&
        candles.map((candle) => {
          return (
            <article key={candle.id}>
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
                  {candle.collection?.discount ? (
                    <span className="float-right flex gap-2 font-roboto text-xl font-medium text-[#56B280]">
                      <span className="text-xs text-black line-through">
                        {candle.price}$
                      </span>
                      {calculateDiscountPrice(
                        candle.price,
                        candle.collection.discountValue
                      ).toFixed(2)}
                      $
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
