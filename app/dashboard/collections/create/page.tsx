import { Form } from "@/app/components/Dashboard/forms/create-collection-form"

export default function page() {
  return (
    <section>
      <h1 className="mb-14 font-roboto text-2xl">Add Collection</h1>
      <div className="max-w-4xl rounded-md bg-gray-100">
        <Form />
      </div>
    </section>
  )
}
