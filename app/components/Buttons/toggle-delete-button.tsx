"use client"
import { TrashIcon } from "@heroicons/react/24/outline"
import React from "react"
import { useFormStatus } from "react-dom"
import { XMarkIcon } from "@heroicons/react/24/solid"
export const ToggleDeleteButton = () => {
  const status = useFormStatus()
  return (
    <button disabled={status.pending}>
      {status.pending ? (
        <XMarkIcon className="h-6 w-6 text-red-600 " />
      ) : (
        <TrashIcon className="h-6 w-6 text-black transition-transform hover:scale-110 " />
      )}
    </button>
  )
}
