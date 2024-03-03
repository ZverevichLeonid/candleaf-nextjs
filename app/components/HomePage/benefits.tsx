import Image from "next/image"
import React, { FC } from "react"

export const Benefits: FC = () => {
  return (
    <section className=" bg-[#F7F8FA]">
      <div className="container mx-auto p-5">
        <div className="flex flex-col justify-between gap-10 py-10 lg:flex-row lg:gap-2 lg:py-36">
          <div className="">
            <h2 className="mb-4 font-poppins text-4xl font-medium leading-10 text-[#1D252C] ">
              Clean and <br />
              fragrant soy wax
            </h2>
            <p className="mb-9 font-poppins text-[#56B280]">
              Made for your home and for your wellness
            </p>
            <ul className="font-poppins">
              <li className="relative pl-5 after:absolute after:left-0 after:top-[50%] after:h-4 after:w-4 after:translate-y-[-50%] after:bg-[url('/utils/benefit-pic.png')] after:bg-no-repeat after:content-['']">
                <span className="font-bold">Eco-sustainable: </span>All
                recyclable materials, 0% CO2 emissions
              </li>
              <li className="relative pl-5 after:absolute after:left-0 after:top-[50%] after:h-4 after:w-4 after:translate-y-[-50%] after:bg-[url('/utils/benefit-pic.png')] after:bg-no-repeat after:content-['']">
                <span className="font-bold">Hyphoallergenic: </span>100%
                natural, human friendly ingredients
              </li>
              <li className="relative pl-5 after:absolute after:left-0 after:top-[50%] after:h-4 after:w-4 after:translate-y-[-50%] after:bg-[url('/utils/benefit-pic.png')] after:bg-no-repeat after:content-['']">
                <span className="font-bold">Handmade: </span>All candles are
                craftly made with love.
              </li>
              <li className="relative pl-5 after:absolute after:left-0 after:top-[50%] after:h-4 after:w-4 after:translate-y-[-50%] after:bg-[url('/utils/benefit-pic.png')] after:bg-no-repeat after:content-['']">
                <span className="font-bold">Long burning: </span>No more waste.
                Created for last long.
              </li>
            </ul>
          </div>
          <Image
            className="bg-white object-cover drop-shadow-lg"
            src={"/candles/mockups.png"}
            alt="candles images"
            width={540}
            height={370}
          />
        </div>
      </div>
    </section>
  )
}
