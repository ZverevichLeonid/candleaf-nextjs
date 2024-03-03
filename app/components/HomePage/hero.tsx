import { FC } from "react"
import backgroundImage from "@/public/utils/hero-bg.webp"
import Image from "next/image"
import Link from "next/link"
export const Hero: FC = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="rounded-sm bg-white/70 px-4 py-4 text-center backdrop-blur-md md:px-20 md:py-8">
          <Image
            className="mx-auto mb-2"
            src={"/utils/leaf.png"}
            alt={"leaf image"}
            width={30}
            height={30}
          />
          <h1 className="font-poppins text-4xl font-bold">The nature candle</h1>
          <p className="pb-12 text-lg">
            All handmade with natural soy wax, Candleaf is a companion for all
            <br />
            your pleasure moments
          </p>
          <Link
            href={"/discovery"}
            className="inline-block bg-[#56b280] px-14 py-2 font-poppins font-bold  text-white shadow-md shadow-slate-500 transition-all hover:bg-[#78c99d]"
          >
            Discovery our collection
          </Link>
        </div>
      </div>
    </section>
  )
}
