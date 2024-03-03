"use client"
import { createProduct } from "@/app/lib/actions"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Collection } from "@prisma/client"
import { useEdgeStore } from "../../../lib/providers/edge-store-provider"
export const Form = ({ collections }: { collections: Collection[] }) => {
  const router = useRouter()
  const [file, setFile] = useState("")
  const { edgestore } = useEdgeStore()
  return (
    <form
      action={createProduct}
      className="flex min-w-[600px] flex-col gap-5 p-5 font-roboto"
    >
      <div className="flex justify-between gap-5">
        <label className="" htmlFor="productImage">
          Image url
        </label>
        <input
          type="file"
          onChange={async (e) => {
            let file: File = e.target.files?.[0]!!
            const uploadedImage = await edgestore.publicFiles.upload({
              file: file,
            })
            setFile(uploadedImage.url)
          }}
        />
        <input
          defaultValue={file}
          className="hidden"
          id="productImage"
          name="productImage"
        />
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">Name</label>
        <input
          className="w-[300px] rounded-md p-1"
          id="productName"
          name="productName"
          type="text"
          placeholder="Enter the candle name"
          required
        />
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">Collection Name</label>
        <select
          className="w-[300px] rounded-md p-1"
          id="productCollectionId"
          name="productCollectionId"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select Collection
          </option>

          {collections.map((collection) => (
            <option key={collection.id} value={collection.id}>
              {collection.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">Price ($)</label>
        <input
          className="w-[300px] rounded-md p-1"
          id="productPrice"
          name="productPrice"
          type="number"
          step={0.01}
          placeholder="Enter price in dollars"
          required
        />
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">Wax</label>
        <textarea
          className="min-h-[100px] w-[300px] rounded-md p-1"
          id="productWax"
          name="productWax"
          placeholder="Enter wax info"
          required
        />
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">Fragnance</label>
        <input
          className="w-[300px] rounded-md p-1"
          id="productFragnance"
          name="productFragnance"
          type="text"
          placeholder="Enter fragnance info"
          required
        />
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">Burning Time min (h)</label>
        <input
          className="w-[300px] rounded-md p-1"
          id="productBurningTimeMin"
          name="productBurningTimeMin"
          type="number"
          step={1}
          placeholder="Enter minimum burning time"
          required
        />
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">Burning Time max (h)</label>
        <input
          className="w-[300px] rounded-md p-1"
          id="productBurningTimeMax"
          name="productBurningTimeMax"
          type="number"
          step={1}
          placeholder="Enter maximum burning time"
          required
        />
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">Height (cm)</label>
        <input
          className="w-[300px] rounded-md p-1"
          id="productHeight"
          name="productHeight"
          type="number"
          step={1}
          placeholder="Enter height in centimeters"
          required
        />
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">Width (cm)</label>
        <input
          className="w-[300px] rounded-md p-1"
          id="productWidth"
          name="productWidth"
          type="number"
          step={1}
          required
          placeholder="Enter width in centimeters"
        />
      </div>
      <div className="flex justify-between gap-5">
        <label htmlFor="">Weight (g)</label>
        <input
          className="w-[300px] rounded-md p-1"
          id="productWeight"
          name="productWeight"
          type="number"
          step={1}
          placeholder="Enter weight in grams"
          required
        />
      </div>
      <div className="flex w-full justify-between gap-5 text-center ">
        <button
          className="w-full rounded-lg bg-[#56B280] p-2 text-white transition-colors hover:bg-[#80dca9]"
          type="submit"
        >
          Create Candle
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
