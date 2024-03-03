import { ProductsList } from "@/app/components/ItemsLists/products-list"
import { fetchProductsDataByCollections } from "@/app/lib/data"
import { createSlug } from "@/app/lib/utils"
import Link from "next/link"

export default async function Page() {
  const collectionsWithProducts = await fetchProductsDataByCollections()
  return (
    <section>
      <div className="container mx-auto p-5">
        {collectionsWithProducts.map((collection) => {
          return (
            collection.products.length >= 1 && (
              <div key={collection.name}>
                <h1 className="pt-10 text-center text-2xl normal-case">
                  <Link
                    href={`/discovery/${createSlug(collection.name)}/${collection.id}`}
                  >
                    {collection.name}
                  </Link>
                </h1>
                <ProductsList candles={collection.products} />
              </div>
            )
          )
        })}
      </div>
    </section>
  )
}
