import { useCustomSession } from "@/app/lib/hooks/useCustomSession"
import Image from "next/image"
import React from "react"

export const UserCard = () => {
  const { name, image, email, isAdmin } = useCustomSession()
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg p-5 shadow-2xl">
      <div className="flex flex-col gap-1 md:flex-row md:gap-6">
        <Image
          src={image}
          alt="user image"
          width={150}
          height={150}
          className="mx-auto rounded-full sm:mx-0"
        />
        <p className="pt-4 text-4xl">Hello, {name}</p>
      </div>
      <div className="flex flex-col gap-2">
        <span>Email: {email}</span>
        {isAdmin ? <span>Role: Admin</span> : null}
      </div>
    </div>
  )
}
