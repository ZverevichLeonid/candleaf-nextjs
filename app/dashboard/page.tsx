"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
export default function Dashboard() {
  const session = useSession()
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <section>
      <h1 className="mb-14 font-roboto text-2xl">
        Hello, {session.data?.user?.name}
      </h1>
      <div className="mb-4">
        <p className="font-poppins text-xl">This is the admin panel.</p>
        <p className="font-poppins text-xl">
          Here you can view products, edit, delete or add your own.
        </p>
        <p className="font-poppins text-xl">
          Here you can view collections and discounts, edit, delete or add your
          own.
        </p>
        <p className="font-poppins text-xl">
          Here you can see all users and their data.
        </p>
      </div>
      <div>
        <p> Current Date {value.toLocaleDateString()} </p>
        <p> Curremt Time {value.toLocaleTimeString()} </p>
      </div>
    </section>
  )
}
