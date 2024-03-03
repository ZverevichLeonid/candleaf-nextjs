import { FC } from "react"
import { ProductsList } from "../ItemsLists/products-list"
import Link from "next/link"
import { fetchProductsHomePage } from "@/app/lib/data"

export const Products: FC = async () => {
  const candles = await fetchProductsHomePage()
  return (
    <section className="bg-[#F7F8FA]">
      <div className="container mx-auto p-5">
        <h2 className="mb-4 pt-20 text-center font-poppins text-4xl font-medium text-[#0B254B]">
          Products
        </h2>
        <p className=" text-center font-poppins text-[#5E6E89]">
          Order it for you or for your beloved ones
        </p>
        <ProductsList candles={candles} />
        <Link
          className="mx-auto mt-6 block max-w-[170px] rounded-md bg-[#56B280] py-4 text-center font-poppins text-white transition-all hover:bg-[#c3f2d8]  sm:ml-auto sm:mr-0"
          href={"/discovery"}
        >
          See more
        </Link>
      </div>
    </section>
  )
}
