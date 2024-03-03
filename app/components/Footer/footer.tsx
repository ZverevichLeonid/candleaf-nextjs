import Image from "next/image"
import Link from "next/link"
import React from "react"
import { createSlug, getCollectionsDataForFooter } from "../../lib/utils"

export const Footer = async () => {
  const collections = await getCollectionsDataForFooter()
  return (
    <footer className="bg-[#272727]">
      <div className="container mx-auto p-5">
        <div className=" relative my-10 flex flex-col justify-between gap-5 before:absolute before:left-0 before:top-[-15px] before:h-[1px] before:w-full before:bg-white before:content-[''] md:my-20 md:flex-row md:before:top-[-30px] ">
          <div>
            <Link href={"/"}>
              <Image
                className="mb-3"
                src={"/logos/footer-logo.svg"}
                alt="logo"
                width={250}
                height={100}
              />
            </Link>
            <p className="mb-4 font-poppins font-normal text-white">
              Your natural candle made for your home and for your wellness.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-4 font-normal text-[#E1E1E1] md:grid-cols-3">
            <ul className="flex flex-col gap-3 font-poppins text-lg ">
              <li className="mb-2 font-medium text-[#56B280] hover:text-white lg:mb-6">
                <Link href={"/discovery"}>Discovery</Link>
              </li>
              {collections.map((collection) => {
                return (
                  collection.products.length >= 1 && (
                    <li className="hover:text-[#56B280]" key={collection.id}>
                      <Link
                        href={`/discovery/${createSlug(collection.name)}/${collection.id}`}
                      >
                        {collection.name}
                      </Link>
                    </li>
                  )
                )
              })}
            </ul>
            <ul className="flex flex-col gap-3 font-poppins text-lg ">
              <li className="mb-2 font-medium text-[#56B280] lg:mb-6">About</li>
              <Link className="hover:text-[#56B280]" href={"/about"}>
                <li>About us</li>
              </Link>
              <Link className="hover:text-[#56B280]" href={"/about#shipping"}>
                <li>Shipping</li>
              </Link>
              <Link className="hover:text-[#56B280]" href={"/about#afiliate"}>
                <li>Afiiliate</li>
              </Link>
            </ul>
            <ul className="flex flex-col gap-3 font-poppins text-lg ">
              <li className="mb-2 font-medium text-[#56B280] lg:mb-6">Info</li>
              <Link className="hover:text-[#56B280]" href={"/contact-us"}>
                <li>Contact us</li>
              </Link>
              <Link className="hover:text-[#56B280]" href={"/privacy-policies"}>
                <li>Privacy Policies</li>
              </Link>
              <Link className="hover:text-[#56B280]" href={"/terms-conditions"}>
                <li>Terms & Conditions</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
