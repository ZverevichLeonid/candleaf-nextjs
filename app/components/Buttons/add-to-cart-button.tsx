"use client"
import React from "react"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { addProduct } from "../../lib/slices/cart-slice"
import Link from "next/link"
export const AddButton = ({
  id,
  price,
  image,
  name,
}: {
  id: any
  price: any
  image: string
  name: string
}) => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector((state: any) => state.cart.cart)
  const isInCart = cart.some((cartItem: any) => id === cartItem.id)
  return (
    <>
      {isInCart ? (
        <Link
          href={"/cart"}
          className="block w-full rounded-md border border-[#56B280] bg-[#ffffff] px-9 py-4 text-center text-[#56B280] transition-colors hover:bg-[#84dbab] hover:text-white md:max-w-[160px]"
        >
          See cart
        </Link>
      ) : (
        <button
          onClick={() =>
            dispatch(
              addProduct({ id: id, price: price, image: image, name: name })
            )
          }
          className="block w-full  rounded-md bg-[#56B280] px-9 py-4 text-center text-white transition-colors hover:bg-[#84dbab] md:max-w-[160px]"
        >
          Add to cart
        </button>
      )}
    </>
  )
}
