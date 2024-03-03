"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { PowerIcon } from "@heroicons/react/24/outline"
import { signOut } from "next-auth/react"
import { HomeIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/outline"
import { GiftIcon } from "@heroicons/react/24/outline"
import { CircleStackIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { usePathname } from "next/navigation"
export const SideNav = () => {
  const pathname = usePathname()
  return (
    <div className="flex h-full px-3 py-3 font-roboto">
      <div className="flex w-full flex-row items-center gap-1 md:flex-col md:gap-2">
        <div className="flex rounded-md bg-[#56B280] px-1 py-3 md:h-40 md:w-64 md:items-end md:p-3">
          <Link href={"/"}>
            <Image
              className="min-w-[70px]"
              alt="link to store page"
              src={"/logos/dashboard-logo.svg"}
              width={200}
              height={120}
            />
          </Link>
        </div>
        <Link
          className={clsx(
            pathname === "/dashboard"
              ? "flex h-full w-full items-center justify-center gap-1 rounded-md bg-[#56b280] p-2 text-white md:h-auto md:justify-start "
              : "flex h-full w-full items-center justify-center gap-1 rounded-md bg-gray-100 p-2 md:h-auto md:justify-start"
          )}
          href={"/dashboard"}
        >
          <HomeIcon width={25} height={25} />
          <span className="hidden md:block">Home</span>
        </Link>
        <Link
          className={clsx(
            pathname === "/dashboard/products"
              ? "flex h-full w-full items-center justify-center gap-1 rounded-md bg-[#56b280] p-2 text-white md:h-auto md:justify-start "
              : "flex h-full w-full items-center justify-center gap-1 rounded-md bg-gray-100 p-2 md:h-auto md:justify-start"
          )}
          href={"/dashboard/products"}
        >
          <CircleStackIcon width={25} height={25} />
          <span className="hidden md:block">Products</span>
        </Link>
        <Link
          className={clsx(
            pathname === "/dashboard/collections"
              ? "flex h-full w-full items-center justify-center gap-1 rounded-md bg-[#56b280] p-2 text-white md:h-auto md:justify-start "
              : "flex h-full w-full items-center justify-center gap-1 rounded-md bg-gray-100 p-2 md:h-auto md:justify-start"
          )}
          href={"/dashboard/collections"}
        >
          <GiftIcon width={25} height={25} />
          <span className="hidden md:block">Collections</span>
        </Link>
        <Link
          className={clsx(
            pathname === "/dashboard/users"
              ? "flex h-full w-full items-center justify-center gap-1 rounded-md bg-[#56b280] p-2 text-white md:h-auto md:justify-start "
              : "flex h-full w-full items-center justify-center gap-1 rounded-md bg-gray-100 p-2 md:h-auto md:justify-start"
          )}
          href={"/dashboard/users"}
        >
          <UserIcon width={25} height={25} />
          <span className="hidden md:block">Users</span>
        </Link>
        <div className="hidden w-full grow rounded-md bg-gray-100 md:block "></div>
        <button
          onClick={() => {
            signOut()
          }}
          className="flex h-full w-full items-center justify-center gap-2 rounded-md bg-gray-100 p-2 md:h-auto md:justify-start"
        >
          <PowerIcon width={25} height={25} />
          <span className="hidden md:block">Sign Out</span>
        </button>
      </div>
    </div>
  )
}
