"use client"
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps"
import React, { useRef, useState } from "react"
import { IMaskInput } from "react-imask"
import { useSession } from "next-auth/react"
import { createOrder } from "@/app/lib/actions"
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks"
import { deleteAllProducts } from "@/app/lib/slices/cart-slice"
export default function Page() {
  const ref = useRef(null)
  const inputRef = useRef(null)
  const properties = {
    balloonContentHeader: "Candleaf",
    balloonContentBody: "st. Solyanka, 1/2 building 1, Moscow, 101000",
  }
  const [paymentMethod, setPaymentMethod] = useState<"online" | "upon-receipt">(
    "upon-receipt"
  )
  const session = useSession()
  const createOrderWithEmail = createOrder.bind(
    null,
    session.data?.user.email ? session.data?.user.email : ""
  )
  const dispatch = useAppDispatch()
  const cartData = useAppSelector((state: any) => state.cart.cart)
  const productsIdsWithQuantity = cartData.map((item: any) => ({
    id: Number(item.id),
    quantity: item.quantity,
  }))

  const totalPrice = cartData.reduce(function (
    acc: number,
    obj: { price: number; quantity: number }
  ) {
    return acc + obj.price * obj.quantity
  }, 0)

  return (
    <section className="font-poppins">
      <div className="container mx-auto p-5">
        <h1 className="mb-8 text-2xl">Buyer details</h1>
        <div className="">
          <form
            action={(formData) => {
              createOrderWithEmail(
                formData,
                productsIdsWithQuantity,
                paymentMethod,
                totalPrice
              )
              dispatch(deleteAllProducts())
            }}
          >
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:gap-1">
              <IMaskInput
                className="w-[300px] rounded-lg border border-gray-300 p-2"
                mask={"+{7}(000)000-00-00"}
                radix="."
                placeholder="Tel number"
                ref={ref}
                inputRef={inputRef}
                name="userTel"
                id="userTel"
                required
              />

              <input
                className="w-[300px] rounded-lg border border-gray-300 p-2"
                placeholder="E-mail (optional)"
                type="email"
                name="userEmail"
                id="userEmail"
                defaultValue={session.data?.user.email}
              />
            </div>
            <h2 className="mb-8 text-2xl">Pickup location</h2>
            <div className="mb-8 flex flex-col justify-between gap-1 rounded-lg p-4 shadow-lg sm:flex-row">
              <div className="py-4 sm:py-14">
                <h5 className="text-3xl">Candleaf</h5>
                <div className="mb-4 flex flex-col gap-1">
                  <span>Mon-Fri: 10:00 - 20:00 </span>
                  <span>Sat: 10:00 - 18:00</span>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-600">
                      You can pick up your order:
                    </span>
                    <span>Tomorrow (from 14:00)</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-600">Shelf life:</span>
                    <span>3 days</span>
                  </div>
                </div>
              </div>
              <YMaps>
                <Map
                  className="min-h-[250px] w-full sm:w-1/2"
                  defaultState={{
                    center: [55.75425635316869, 37.6372484920505],
                    zoom: 18,
                    controls: ["zoomControl", "fullscreenControl"],
                  }}
                  modules={[
                    "control.ZoomControl",
                    "control.FullscreenControl",
                    "geoObject.addon.balloon",
                    "geoObject.addon.hint",
                  ]}
                >
                  <Placemark
                    on
                    defaultGeometry={[55.75425635316869, 37.6372484920505]}
                    properties={properties}
                  ></Placemark>
                </Map>
              </YMaps>
            </div>
            <h2 className="mb-8 text-2xl">Select payment method</h2>
            <div className="mb-8 flex gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setPaymentMethod("online")
                }}
                className={
                  paymentMethod === "online"
                    ? " rounded-lg bg-gray-100 px-2 py-3 font-bold"
                    : "rounded-lg bg-gray-100 px-2 py-3"
                }
              >
                Online
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setPaymentMethod("upon-receipt")
                }}
                className={
                  paymentMethod === "upon-receipt"
                    ? " rounded-lg bg-gray-100 px-2 py-3 font-bold"
                    : "rounded-lg bg-gray-100 px-2 py-3"
                }
              >
                Upon receipt
              </button>
            </div>
            <div className="mb-8 rounded-lg p-5 shadow-lg">
              {paymentMethod === "upon-receipt"
                ? "You can pay in the store in cash, bonuses, card or credit"
                : "Pay by credit card (not working yet)"}
            </div>
            <button
              className="h-[60px] w-full  rounded-md bg-[#56b280] px-2 py-2 font-poppins font-bold  text-white  transition-all hover:bg-[#78c99d] sm:w-[250px]"
              type="submit"
              value={paymentMethod}
            >
              {paymentMethod === "upon-receipt"
                ? "Confirm the order"
                : "Pay online"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
