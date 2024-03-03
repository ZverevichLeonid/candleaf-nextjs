"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React from "react"
import { useDebouncedCallback } from "use-debounce"

export const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", "1")
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
  }, 500)

  return (
    <input
      className="peer mb-4 block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
      placeholder={placeholder}
    />
  )
}
