import React from "react"
import { fetchCollectionsData } from "@/app/lib/data"
import { Form } from "@/app/components/Dashboard/forms/create-product-form"

export default async function Page() {
  const collections = await fetchCollectionsData()
  return (
    <section>
      <h1 className="mb-14 font-roboto text-2xl">Add Product</h1>
      <div className="max-w-4xl rounded-md bg-gray-100">
        <Form collections={collections} />
      </div>
    </section>
  )
}
