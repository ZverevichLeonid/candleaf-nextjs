"use client"
import { useEdgeStore } from "@/app/lib/providers/edge-store-provider"
import { editProduct } from "@/app/lib/actions"
import { Candle } from "@prisma/client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

export const Form = ({ id, candle }: { id: string; candle: Candle | null }) => {
  const router = useRouter()
  const editProductWithId = editProduct.bind(null, id)
  const [file, setFile] = useState("")
  const { edgestore } = useEdgeStore()
  return (
    <form
      action={editProductWithId}
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
          defaultValue={candle?.name}
        />
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
          defaultValue={candle?.price}
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
          defaultValue={candle?.wax}
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
          defaultValue={candle?.fragrance}
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
          defaultValue={candle?.burningTimeMin}
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
          defaultValue={candle?.burningTimeMax}
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
          defaultValue={candle?.height}
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
          defaultValue={candle?.width}
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
          defaultValue={candle?.weight}
        />
      </div>
      <div className="flex w-full justify-between gap-5 text-center ">
        <button
          className="w-full rounded-lg bg-[#56B280] p-2 text-white transition-colors hover:bg-[#80dca9]"
          type="submit"
        >
          Edit Candle
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
