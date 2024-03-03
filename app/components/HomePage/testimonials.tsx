import Image from "next/image"
import React from "react"
import { StarIcon } from "@heroicons/react/24/solid"
export const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#56B280]/10 font-medium tracking-tighter">
      <div className="container mx-auto p-5">
        <div className="">
          <h4 className="mb-4 pt-24 text-center font-poppins text-5xl">
            Testimonials
          </h4>
          <p className="mb-7 text-center font-poppins text-lg font-medium text-[#5E6E89]">
            Some quotes from our happy customers
          </p>
        </div>
        <div className="flex flex-col justify-between gap-8 pb-16 md:flex-row">
          <div className="flex min-h-52 w-full flex-col   items-center justify-between bg-white p-4 shadow-md md:w-1/3">
            <Image
              src={"/testimonials/lusia.png"}
              width={84}
              height={84}
              alt="Buyer's face"
            />
            <div className="flex justify-between">
              <StarIcon color="#56B280" height={20} width={20} />
              <StarIcon color="#56B280" height={20} width={20} />
              <StarIcon color="#56B280" height={20} width={20} />
              <StarIcon color="#56B280" height={20} width={20} />
              <StarIcon color="#56B280" height={20} width={20} />
            </div>
            <p className="text-center font-poppins text-xl font-medium text-[#1D293F]">
              “I love it! No more air fresheners”
            </p>
            <span className="font-roboto  font-normal text-[#7C8087]">
              Lusia
            </span>
          </div>
          <div className="flex min-h-52 w-full flex-col   items-center justify-between bg-white p-4 shadow-md md:w-1/3">
            <Image
              src={"/testimonials/edoardo.png"}
              width={84}
              height={84}
              alt="Buyer's face"
            />
            <div className="flex justify-between">
              <StarIcon color="#56B280" height={20} width={20} />
              <StarIcon color="#56B280" height={20} width={20} />
              <StarIcon color="#56B280" height={20} width={20} />
              <StarIcon color="#56B280" height={20} width={20} />
              <StarIcon color="#56B280" height={20} width={20} />
            </div>
            <p className="text-center font-poppins text-xl font-medium text-[#1D293F]">
              “Raccomended for everyone”
            </p>
            <span className="font-roboto  font-normal text-[#7C8087]">
              Edoardo
            </span>
          </div>
          <div className="flex min-h-52 w-full flex-col   items-center justify-between bg-white p-4 shadow-md md:w-1/3">
            <Image
              src={"/testimonials/mart.png"}
              width={84}
              height={84}
              alt="Buyer's face"
            />
            <div className="flex justify-between">
              <StarIcon color="#56B280" height={20} width={20} />
              <StarIcon color="#56B280" height={20} width={20} />
              <StarIcon color="#56B280" height={20} width={20} />
              <StarIcon color="#56B280" height={20} width={20} />
              <StarIcon color="#56B280" height={20} width={20} />
            </div>
            <p className="text-center font-poppins text-xl font-medium text-[#1D293F]">
              “Looks very natural, the smell is awesome”
            </p>
            <span className="font-roboto  font-normal text-[#7C8087]">
              Mart
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
