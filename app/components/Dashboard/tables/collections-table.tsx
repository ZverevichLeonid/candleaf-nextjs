import { fetchCollectionsData } from "@/app/lib/data"
import React from "react"
import { EditCollection } from "../../Buttons/edit-collection-button"
import { DeleteButton } from "../../Buttons/delete-button"
import { deleteCollection } from "@/app/lib/actions"

export const CollectionsTable = async () => {
  const collections = await fetchCollectionsData()
  return (
    <div className="mb-8 overflow-x-auto rounded-md bg-gray-100 p-3">
      {collections.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr className="font-roboto font-medium *:px-8 ">
              <th className="">ID</th>
              <th className="">Name</th>
              <th className="">Discount active</th>
              <th className="">Discount Value</th>
              <th className="">Edit</th>
              <th className="">Delete</th>
            </tr>
          </thead>
          <tbody>
            {collections &&
              collections.map((collection) => {
                return (
                  <tr
                    className="w-full bg-white text-center hover:bg-gray-50"
                    key={collection.id}
                  >
                    <td className="">{collection.id}</td>
                    <td className="">{collection.name}</td>
                    <td className="">{collection.discount ? "YES" : "NO"}</td>
                    <td className="">{collection.discountValue}%</td>
                    <td className="">
                      <EditCollection id={String(collection.id)} />
                    </td>
                    <td className="">
                      <DeleteButton
                        action={deleteCollection}
                        id={String(collection.id)}
                      />
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      ) : (
        <p className="font-roboto text-3xl">Collections do not exist</p>
      )}
    </div>
  )
}
