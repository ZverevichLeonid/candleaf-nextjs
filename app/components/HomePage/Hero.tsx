import { FC } from "react"
import backgroundImage from "@/public/hero-bg.png"
import Image from "next/image"
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
        <div className="rounded-sm bg-white/70 px-20 pt-8 text-center backdrop-blur-md ">
          <Image
            className="mx-auto mb-2"
            src={"/leaf.png"}
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
          <button className="pb-16">Discovery our collection</button>
        </div>
      </div>
    </section>
  )
}
// className="h- w-full bg-[url('/hero-bg.png')] bg-cover"
