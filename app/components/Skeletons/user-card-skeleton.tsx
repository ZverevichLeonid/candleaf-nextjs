import React from "react"

export const UserCardSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg p-5 shadow-lg">
      <div className="flex gap-6 ">
        <div className="h-[150px] w-[150px] rounded-full bg-gray-100"></div>
        <p className="pt-4 text-4xl">Hello, ...</p>
      </div>
    </div>
  )
}
