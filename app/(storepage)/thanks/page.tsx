"use client"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    async function redirect() {
      setTimeout(() => {
        router.push("/")
      }, 4000)
    }
    redirect()
  }, [])
  return (
    <section className="py-40">
      <h1 className="pt-10 text-center font-poppins text-3xl">
        Thank you for the order!
      </h1>
    </section>
  )
}
