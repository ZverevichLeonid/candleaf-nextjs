import { fetchProduct } from "@/app/lib/data"
import { calculateDiscountPrice } from "@/app/lib/utils"
import Image from "next/image"
import React from "react"
import { WishListButton } from "../Buttons/wishlist-button"
import { AddButton } from "../Buttons/add-to-cart-button"

export const ProductItem = async ({
  params,
}: {
  params: { slug: string; id: string }
}) => {
  const candle = await fetchProduct(params.id)
  return (
    candle && (
      <div className="flex flex-col gap-2 md:flex-row md:gap-8">
        <div className="">
          <h1 className="mb-4 font-poppins text-2xl font-medium md:hidden">
            {candle.name}
          </h1>
          <Image
            className="mb-4 w-full max-w-none rounded-lg bg-gray-100 md:max-w-[400px] lg:max-w-none"
            src={candle.image}
            alt={candle.name}
            width={540}
            height={430}
            priority
          />
          <p className=" mx-auto hidden max-w-[400px] text-center font-poppins text-xl font-medium md:block">
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
          </p>
        </div>
        <div className="">
          <h2 className="mb-4 hidden font-poppins text-2xl font-medium md:block">
            {candle.name}
          </h2>
          {candle.collection?.discount ? (
            <span className="flex gap-2 font-roboto text-2xl font-medium text-[#56B280]">
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
            <span className="flex gap-2 font-roboto text-2xl font-medium text-[#56B280]">
              {candle.price.toFixed(2)}$
            </span>
          )}
          <div className="mb-1 rounded-lg border p-5 md:mb-9">
            <ul className="flex flex-col gap-2">
              <li className="text-gray-400">
                <span className="font-roboto font-bold text-black">
                  Wax:&nbsp;
                </span>
                {candle.wax}
              </li>
              <li className="text-gray-400">
                <span className="font-roboto font-bold text-black">
                  Fragnance:&nbsp;
                </span>
                {candle.fragrance}
              </li>
              <li className="text-gray-400">
                <span className="font-roboto font-bold text-black">
                  Burning Time:&nbsp;
                </span>
                {candle.burningTimeMin}-{candle.burningTimeMax} hours
              </li>
              <li className="text-gray-400">
                <span className="font-roboto font-bold text-black">
                  Dimension:&nbsp;
                </span>
                {candle.height}cm x {candle.width}cm
              </li>
              <li className="text-gray-400">
                <span className="font-roboto font-bold text-black">
                  Weight:&nbsp;
                </span>
                {candle.weight}g
              </li>
            </ul>
          </div>
          <p className=" mx-auto mb-2 block text-center font-poppins text-xl font-medium md:hidden">
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
          </p>
          <div className="flex gap-1">
            <WishListButton
              discountPrice={
                candle.collection?.discount
                  ? calculateDiscountPrice(
                      candle.price,
                      candle?.collection?.discountValue!!
                    ).toFixed(2)
                  : candle.price.toFixed(2)
              }
              id={candle.id.toString()}
              image={candle.image}
              name={candle.name}
              price={candle.price}
            />
            <AddButton
              id={candle.id}
              price={
                candle.collection?.discount
                  ? calculateDiscountPrice(
                      candle.price,
                      candle?.collection?.discountValue!!
                    ).toFixed(2)
                  : candle.price.toFixed(2)
              }
              image={candle.image}
              name={candle.name}
            />
          </div>
        </div>
      </div>
    )
  )
}
