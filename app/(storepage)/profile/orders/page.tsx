"use client"
import { OrdersCardSkeleton } from "@/app/components/Skeletons/orders-card-skeleton"
import { fetchOrdersDataByUser } from "@/app/lib/actions"
import { useAppSelector } from "@/app/lib/hooks"
import { useCustomSession } from "@/app/lib/hooks/useCustomSession"
import { calculateDiscountPrice } from "@/app/lib/utils"
import { Candle, Collection, Order, OrderItem } from "@prisma/client"
import Image from "next/image"
import React, { useEffect, useState } from "react"

export default function Page() {
  interface OrderWithProductsAndItems extends Order {
    products: Candle[]
    items: OrderItem[]
  }
  const { email, isLoading } = useCustomSession()
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [orders, setOrders] = useState<any>()
  const [collection, setCollection] = useState<any>()
  const fetchOrdersDataByUserWithEmail = fetchOrdersDataByUser.bind(null, email)
  useEffect(() => {
    async function fetchOrdersAndCollections() {
      if (!isLoading) {
        const data = await fetchOrdersDataByUserWithEmail()
        if (data) {
          setOrders(data[0])
          setCollection(data[1])
          setIsLoadingData(false)
        }
      }
    }
    fetchOrdersAndCollections()
  }, [isLoading])

  return (
    <section className="min-h-[70vh] w-full font-poppins">
      <div className="min-h-full w-full rounded-lg p-2 shadow-2xl sm:p-5">
        <h1 className="mb-4 text-3xl">Orders</h1>
        {isLoadingData ? (
          <OrdersCardSkeleton />
        ) : orders.length > 0 ? (
          orders.map((order: OrderWithProductsAndItems) => {
            let date = new Date(order.createdAt)
            return (
              <div
                key={order.id}
                className="mb-1 rounded-lg bg-gray-50 p-2 font-roboto sm:p-5"
              >
                <div className="mb-2 flex flex-col justify-between sm:flex-row sm:px-2">
                  <span className="mb-1">
                    Order from {date.toLocaleDateString()}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span>Status: {order.status}</span>
                    <span>Payment Method: {order.paymentMethod}</span>
                  </div>
                </div>
                <div className="mb-2 flex flex-col gap-2">
                  {order.products.map((product: Candle) => {
                    return (
                      <div
                        key={product.id}
                        className="flex flex-row gap-2 rounded-lg bg-white p-2 sm:justify-between sm:p-5 "
                      >
                        <Image
                          className="h-[100px] w-[100px] object-contain sm:h-[150px] sm:w-[150px]"
                          src={product.image}
                          alt={product.name}
                          width={150}
                          height={150}
                        />
                        <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
                          <span className="text-lg">{product.name}</span>
                          <span>
                            Quantity:{" "}
                            {order.items.map((item: OrderItem) => {
                              if (item.productId === product.id)
                                return (
                                  <span key={item.id}>{item.quantity}</span>
                                )
                            })}
                          </span>
                          <span>
                            Price:{" "}
                            {collection.map((collection: Collection) => {
                              if (collection.id === product.collectionId) {
                                return (
                                  <span key={collection.id}>
                                    {collection.discount
                                      ? calculateDiscountPrice(
                                          product.price,
                                          collection.discountValue
                                        ).toFixed(2)
                                      : product.price.toFixed(2)}
                                  </span>
                                )
                              }
                            })}
                            {""}$
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <p className="text-right">Total: {order.totalPrice}$ </p>
              </div>
            )
          })
        ) : (
          <p className="min-h-full w-full text-center font-poppins text-xl">
            No orders
          </p>
        )}
      </div>
    </section>
  )
}
