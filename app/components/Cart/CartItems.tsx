"use client"
import React, { useEffect, useState } from "react"
import { useAppSelector } from "@/app/lib/hooks"
import { useAppDispatch } from "@/app/lib/hooks"
import Image from "next/image"
import Link from "next/link"
import { createSlug } from "@/app/lib/utils"
import {
  decreaseQuantityProduct,
  deleteProduct,
  increaseQuantityProduct,
} from "@/app/lib/slices/cart-slice"
import { FaceFrownIcon } from "@heroicons/react/24/outline"
export const CartItems = () => {
  const cartItems = useAppSelector((state: any) => state.cart.cart)
  const dispatch = useAppDispatch()
  const [totalPrice, setTotalPrice] = useState(0)
  function calculateTotalPrice() {
    const temp = cartItems.map((item: any) => item.quantity * item.price)
    if (temp.length >= 1) {
      const temp2 = temp.reduce((acc: any, item: any) => acc + item)
      setTotalPrice(temp2)
    } else {
      setTotalPrice(0)
    }
  }
  useEffect(() => {
    calculateTotalPrice()
  }, [cartItems])
  return (
    <div className="container mx-auto p-5 font-poppins">
      <section>
        {cartItems.map((item: any) => {
          return (
            <article
              key={item.id}
              className="mb-4 grid grid-cols-3 items-center rounded-lg bg-gray-50 sm:grid-cols-4"
            >
              <div className="col-span-2 flex items-center gap-3">
                <Link href={`/products/${createSlug(item.name)}/${item.id}`}>
                  <Image
                    className="h-[100px] max-w-[100px] object-contain sm:h-[100px] sm:max-w-[150px]"
                    src={item.image}
                    alt="Candle image"
                    width={150}
                    height={150}
                  />
                </Link>
                <div>
                  <Link
                    className="transition-all hover:text-[#56b280] hover:underline sm:text-xl"
                    href={`/products/${createSlug(item.name)}/${item.id}`}
                  >
                    <p>{item.name}</p>
                  </Link>
                  <button
                    onClick={() => dispatch(deleteProduct({ id: item.id }))}
                    className="pt-3 text-sm text-[#56B280] underline hover:text-red-900"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="flex w-[70px] justify-between gap-1 justify-self-center border border-[#56b280]">
                <button
                  onClick={() =>
                    dispatch(increaseQuantityProduct({ id: item.id }))
                  }
                  className="block w-1/3  text-[#56b280] hover:bg-gray-100 "
                >
                  +
                </button>
                {item.quantity}
                <button
                  onClick={() =>
                    dispatch(decreaseQuantityProduct({ id: item.id }))
                  }
                  className="block w-1/3 hover:bg-gray-100 "
                >
                  -
                </button>
              </div>
              <p className="col-start-3 mb-2 flex flex-col items-center gap-1 justify-self-center sm:col-start-4 ">
                {item.quantity * item.price} $
                {item.quantity > 1 && (
                  <span className="text-sm text-gray-400">
                    {item.price} $ / pcs{" "}
                  </span>
                )}
              </p>
            </article>
          )
        })}
        {cartItems.length < 1 && (
          <div className="h-[60vh]">
            <p className="mb-4 pt-12 text-center text-3xl">Empty for now</p>
            <FaceFrownIcon width={100} height={100} className="mx-auto" />
          </div>
        )}
        {cartItems.length >= 1 && (
          <div className="flex flex-col justify-end gap-5 sm:flex-row sm:items-center">
            <div className="flex flex-col font-roboto">
              <span className="text-right text-xl font-medium ">
                Sub-total: ${totalPrice}
              </span>
              <span className="text-right text-[#9e9e9e]">
                Tax and shipping cost will be calculated later
              </span>
            </div>
            <Link
              href={"/cart/checkout"}
              className="whitespace-pre rounded-md bg-[#56B280] px-8 py-2 text-center text-white"
            >
              Check-out
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
