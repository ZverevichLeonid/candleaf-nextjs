import { ProductsList } from "@/app/components/ItemsLists/products-list"
import {
  fetchCollectionWithProducts,
  fetchCollectionsData,
} from "@/app/lib/data"
import { createSlug } from "@/app/lib/utils"

export async function generateStaticParams() {
  const collections = await fetchCollectionsData()
  return collections.map((collection) => ({
    collectionSlug: createSlug(collection.name),
    collectionId: String(collection.id),
  }))
}

export default async function Page({
  params,
}: {
  params: {
    collectionSlug: string
    collectionId: string
  }
}) {
  const collectionWithProducts = await fetchCollectionWithProducts(
    params.collectionId
  )
  return (
    <section>
      <div className="container mx-auto p-5">
        {collectionWithProducts ? (
          <div>
            <h1 className="text-center font-poppins text-2xl">
              {collectionWithProducts.name}
            </h1>
            <ProductsList candles={collectionWithProducts.products} />
          </div>
        ) : (
          <p>Collection not found</p>
        )}
      </div>
    </section>
  )
}
