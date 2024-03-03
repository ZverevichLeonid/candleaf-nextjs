import { Benefits } from "../components/HomePage/benefits"
import { Hero } from "../components/HomePage/hero"
import { Products } from "../components/HomePage/product-home-page"
import { Testimonials } from "../components/HomePage/testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Benefits />
      <Testimonials />
    </>
  )
}
