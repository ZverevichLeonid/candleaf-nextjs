import { Form } from "@/app/components/Dashboard/forms/edit-product-form"
import { fetchProduct } from "@/app/lib/data"

export default async function page({ params }: { params: { id: string } }) {
  const candle = await fetchProduct(params.id)
  return (
    <section>
      <h1 className="mb-14 font-roboto text-2xl">
        Edit Product <br />
        {candle?.name}
      </h1>
      <div className="max-w-4xl rounded-md bg-gray-100 ">
        <Form id={params.id} candle={candle} />
      </div>
    </section>
  )
}
