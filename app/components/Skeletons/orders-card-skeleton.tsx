import React from "react"

export const OrdersCardSkeleton = () => {
  return (
    <div className="mb-1 rounded-lg bg-gray-50 p-5 font-roboto">
      <div className="mb-2 flex justify-between px-2">
        <span className="mb-1">Order from ...</span>
        <div className="flex flex-col gap-1">
          <span>Status: ...</span>
          <span>Payment Method: ...</span>
        </div>
      </div>
      <div className="mb-2 flex h-[250px] flex-col gap-2">
        <div className="flex h-full justify-between gap-2 rounded-lg bg-gray-200 p-5"></div>
      </div>
      <p className="text-right">Total: ...</p>
    </div>
  )
}
