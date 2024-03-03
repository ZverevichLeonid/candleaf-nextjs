import { CartItems } from "@/app/components/Cart/CartItems"
import Link from "next/link"

export default function Page() {
  return (
    <section className="min-h-[70vh] font-poppins">
      <div className="container mx-auto p-5">
        <h1 className="mb-4 text-center text-2xl">Your cart items</h1>
        <Link
          className="mb-5 block text-center font-roboto text-[#56b280] hover:underline"
          href={"/"}
        >
          Back to shopping
        </Link>
        <CartItems />
      </div>
    </section>
  )
}
