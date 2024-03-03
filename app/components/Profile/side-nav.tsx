"use client"
import React from "react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useCustomSession } from "@/app/lib/hooks/useCustomSession"
import { ArchiveBoxIcon } from "@heroicons/react/24/outline"
import { HeartIcon } from "@heroicons/react/24/outline"
import { Cog6ToothIcon } from "@heroicons/react/24/outline"
import { ArrowDownIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/outline"
import { usePathname } from "next/navigation"
import clsx from "clsx"
export const SideNavProfile = () => {
  const { isAdmin } = useCustomSession()
  const pathname = usePathname()
  return (
    <div className="flex flex-col gap-1 rounded-lg p-5 shadow-lg">
      <Link
        className={clsx(
          "flex w-full items-center gap-2 rounded-md border border-[#56B280] px-8 py-4 text-[#56b280] lg:w-[250px]",
          pathname === "/profile" && "bg-[#56b280] text-white"
        )}
        href={"/profile"}
      >
        <UserIcon width={25} height={25} /> Profile
      </Link>
      <Link
        className={clsx(
          "flex w-full items-center gap-2 rounded-md border border-[#56B280] px-8 py-4 text-[#56b280] lg:w-[250px]",
          pathname === "/profile/orders" && "bg-[#56b280] text-white"
        )}
        href={"/profile/orders"}
      >
        <ArchiveBoxIcon width={25} height={25} /> Orders
      </Link>
      <Link
        className={clsx(
          "flex w-full items-center gap-2 rounded-md border border-[#56B280] px-8 py-4 text-[#56b280] lg:w-[250px]",
          pathname === "/profile/wishlist" && "bg-[#56b280] text-white"
        )}
        href={"/profile/wishlist"}
      >
        <HeartIcon width={25} height={25} />
        Wishlist
      </Link>
      {isAdmin && (
        <Link
          className={clsx(
            "flex w-full items-center gap-2 rounded-md border border-[#56B280] px-8 py-4 text-[#56b280] lg:w-[250px]",
            pathname === "/dashboard" && "bg-[#56b280] text-white"
          )}
          href={"/dashboard"}
        >
          <Cog6ToothIcon width={25} height={25} />
          Dashboard
        </Link>
      )}
      <button
        className={clsx(
          "flex w-full items-center gap-2 rounded-md border border-[#56B280] px-8 py-4 text-[#56b280] lg:w-[250px]",
          pathname === "/sign-in" && "bg-[#56b280] text-white"
        )}
        onClick={() => signOut({ callbackUrl: "/sign-in" })}
      >
        <ArrowDownIcon width={25} height={25} />
        Sign out
      </button>
    </div>
  )
}
