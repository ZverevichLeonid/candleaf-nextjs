"use client"
import { editCollection, editProduct } from "@/app/lib/actions"
import { Candle, Collection } from "@prisma/client"
import { useRouter } from "next/navigation"
import React from "react"

export const Form = ({
  id,
  collection,
}: {
  id: string
  collection: Collection | null
}) => {
  const router = useRouter()
  const editCollectionWithId = editCollection.bind(null, id)
  return (
    <form
      action={editCollectionWithId}
      className="flex min-w-[600px] flex-col gap-5 p-5 font-roboto"
    >
      <div className="flex justify-between gap-5">
        <label className="" htmlFor="collectionImage">
          Image url
        </label>
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">Name</label>
        <input
          className="w-[300px] rounded-md p-1"
          id="collectionName"
          name="collectionName"
          type="text"
          placeholder="Enter the collection name"
          required
          defaultValue={collection?.name}
        />
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">
          Discount (Enter whether the discount is active)
        </label>
        <input
          className="w-[300px] rounded-md p-1"
          id="collectionDiscount"
          name="collectionDiscount"
          type="checkbox"
          step={0.01}
          defaultChecked={collection?.discount}
        />
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">Discount value</label>
        <input
          className="w-[300px] rounded-md p-1"
          id="collectionDiscountValue"
          name="collectionDiscountValue"
          type="number"
          step={0.01}
          max={99}
          placeholder="Enter the discount amount as a percentage"
          required
          defaultValue={collection?.discountValue}
        />
      </div>

      <div className="flex w-full justify-between gap-5 text-center ">
        <button
          className="w-full rounded-lg bg-[#56B280] p-2 text-white transition-colors hover:bg-[#80dca9]"
          type="submit"
        >
          Edit Collection
        </button>
        <button
          type="button"
          className="hover:bg- w-full rounded-lg bg-red-600 p-2 text-center text-white transition-colors hover:bg-red-400"
          onClick={() => router.back()}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
