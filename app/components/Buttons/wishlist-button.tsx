"use client"
import React from "react"
import { HeartIcon } from "@heroicons/react/24/outline"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { addProduct, deleteProduct } from "../../lib/slices/wishlist-slice"
export const WishListButton = ({
  id,
  price,
  discountPrice,
  image,
  name,
}: {
  id: string
  price: number
  discountPrice: string
  image: string
  name: string
}) => {
  const dispatch = useAppDispatch()
  const wishlistinfo = useAppSelector((state: any) => state.wishlist.wishlist)
  const isAdded = wishlistinfo.some((el: any) => el.id === id)
  console.log(wishlistinfo)
  return (
    <button
      onClick={() =>
        isAdded
          ? dispatch(deleteProduct({ id }))
          : dispatch(addProduct({ id, price, discountPrice, image, name }))
      }
      title={isAdded ? "Remove from wishlist" : "Add to wishlist"}
      className={
        isAdded
          ? "flex w-full max-w-[56px] items-center justify-center rounded-md border border-[#56b280] text-[#56b280] transition-all hover:border-gray-200 hover:text-gray-200"
          : "flex w-full max-w-[56px] items-center justify-center rounded-md border border-gray-200 text-gray-200 transition-all hover:bg-[#56B280] hover:text-white"
      }
    >
      <HeartIcon width={25} height={25} />
    </button>
  )
}
