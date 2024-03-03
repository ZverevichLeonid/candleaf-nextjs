import { PencilIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import React from "react"

export const EditProduct = ({ id }: { id: string }) => {
  return (
    <Link
      className="flex items-center justify-center"
      href={`/dashboard/products/${id}/edit`}
    >
      <PencilIcon className="h-6 w-6 text-black transition-transform hover:scale-110 " />
    </Link>
  )
}
