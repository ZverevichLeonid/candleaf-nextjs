import { HeartIcon } from "@heroicons/react/24/outline"
import React from "react"

export const ProductPageSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-8">
      <div className="">
        <h1 className="mb-4 font-poppins text-2xl font-medium md:hidden">
          ...
        </h1>
        <div className="mb-4 min-h-[400px] w-full max-w-none rounded-lg bg-gray-100 md:max-w-[400px] lg:max-w-none" />
        <p className=" mx-auto hidden max-w-[400px] text-center font-poppins text-xl font-medium md:block">
          All hand-made with natural soy wax, Candleaf is made for your pleasure
          moments.
        </p>
      </div>
      <div className="">
        <h2 className="mb-4 hidden font-poppins text-2xl font-medium md:block">
          ....{" "}
        </h2>

        <span className="flex gap-2 font-roboto text-2xl font-medium text-[#56B280]">
          .... $
        </span>
        <div className="mb-1 rounded-lg border p-5 md:mb-9">
          <ul className="flex flex-col gap-2">
            <li className="text-gray-400">
              <span className="font-roboto font-bold text-black">
                Wax:&nbsp;
              </span>
              ....{" "}
            </li>
            <li className="text-gray-400">
              <span className="font-roboto font-bold text-black">
                Fragnance:&nbsp;
              </span>
              ....{" "}
            </li>
            <li className="text-gray-400">
              <span className="font-roboto font-bold text-black">
                Burning Time:&nbsp;
              </span>
              ....-.... hours
            </li>
            <li className="text-gray-400">
              <span className="font-roboto font-bold text-black">
                Dimension:&nbsp;
              </span>
              ....cm x ....cm
            </li>
            <li className="text-gray-400">
              <span className="font-roboto font-bold text-black">
                Weight:&nbsp;
              </span>
              ....g
            </li>
          </ul>
        </div>
        <p className=" mx-auto mb-2 block text-center font-poppins text-xl font-medium md:hidden">
          All hand-made with natural soy wax, Candleaf is made for your pleasure
          moments.
        </p>
        <div className="flex gap-1">
          <button className="flex w-full max-w-[56px] items-center justify-center rounded-md border border-gray-200 text-gray-200 transition-all hover:bg-[#56B280] hover:text-white">
            <HeartIcon width={25} height={25} />
          </button>
          <button className="block w-full  rounded-md bg-[#56B280] px-9 py-4 text-center text-white transition-colors hover:bg-[#84dbab] md:max-w-[160px]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
