import React, { useEffect } from "react"
import { fetchProductsData } from "@/app/lib/data"
import Image from "next/image"
import { DeleteButton } from "@/app/components/Buttons/delete-button"
import { EditProduct } from "@/app/components/Buttons/edit-product-button"
import { deleteProduct } from "@/app/lib/actions"
import { Search } from "../search"
export const CandlesTable = async ({
  currentPage,
  query,
}: {
  query: string
  currentPage: number
}) => {
  const candles = await fetchProductsData(query, currentPage)

  return (
    <div className="">
      <Search placeholder={"Search products"} />
      <div className="mb-8 overflow-x-auto rounded-md bg-gray-100 p-3">
        {candles.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="font-roboto font-medium *:px-8 ">
                <th className="">ID</th>
                <th className="">Image</th>
                <th className="">Name</th>
                <th className="">Collection Name</th>
                <th className="">Price</th>
                <th className="">Discount active</th>
                <th className="">Discount value %</th>
                <th className="w-48">Wax</th>
                <th className="w-48">Fragnance</th>
                <th className="">Burning time minimum</th>
                <th className="">Burning time maximum</th>
                <th className=" ">Height</th>
                <th className="">Width</th>
                <th className="">Weight</th>
                <th className=" ">Edit</th>
                <th className="">Delete</th>
              </tr>
            </thead>
            <tbody>
              {candles &&
                candles?.map((candle) => {
                  return (
                    <tr
                      className="w-full bg-white text-center hover:bg-gray-50"
                      key={candle.id}
                    >
                      <td className="">{candle.id}</td>
                      <td className="">
                        <Image
                          className="text-center"
                          alt="candle image"
                          src={candle.image}
                          width={150}
                          height={150}
                        ></Image>
                      </td>
                      <td className="">{candle.name}</td>
                      <td className="">
                        {candle.collection?.name
                          ? candle.collection.name
                          : "No collection"}
                      </td>
                      <td className="">{candle.price}$</td>
                      <td className="">
                        {candle.collection?.discount ? "YES" : "NO"}
                      </td>

                      <td className="">
                        {candle.collection?.discountValue
                          ? candle.collection.discountValue
                          : 0}
                      </td>
                      <td className="">{candle.wax}</td>
                      <td className="">{candle.fragrance}</td>
                      <td className="">{candle.burningTimeMin}</td>
                      <td className="">{candle.burningTimeMax}</td>
                      <td className="">{candle.height}</td>
                      <td className="">{candle.width}</td>
                      <td className="">{candle.weight}</td>
                      <td className="">
                        <EditProduct id={String(candle.id)} />
                      </td>
                      <td className="">
                        <DeleteButton
                          action={deleteProduct}
                          id={String(candle.id)}
                        />
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        ) : (
          <p className="font-roboto text-3xl">Products do not exist</p>
        )}
      </div>
    </div>
  )
}
