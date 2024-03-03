import Image from "next/image"

export default function Page() {
  return (
    <section>
      <div className="container mx-auto p-5">
        <article id="about-us">
          <h1 className="mb-6 text-center font-poppins text-4xl lg:text-6xl">
            About us
          </h1>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-3xl bg-[#56b280] p-4 text-white md:p-10">
              <ul className="flex flex-col gap-2 font-poppins text-xl">
                <li>
                  Welcome to Candleaf, your haven for all-natural candles
                  crafted with care and passion. Nestled in the heart of town,
                  Candleaf offers an enchanting array of hand-poured candles
                  that illuminate your space with warmth and tranquility.
                </li>
                <li>
                  Step into our inviting store, where you're greeted by the
                  soothing aroma of natural fragrances. Each candle at Candleaf
                  is meticulously crafted using only the finest,
                  sustainably-sourced ingredients, ensuring a clean burn and a
                  guilt-free indulgence for your senses.
                </li>
                <li>
                  Explore our diverse collection, featuring an eclectic mix of
                  scents inspired by nature's bounty. From the refreshing citrus
                  notes of lemon verbena to the earthy embrace of lavender
                  fields, there's a fragrance to suit every mood and occasion.
                </li>
                <li>
                  At Candleaf, we prioritize quality and authenticity, which is
                  why our candles are free from harsh chemicals and artificial
                  additives. Whether you're looking to unwind after a long day
                  or create a cozy ambiance for a special gathering, our candles
                  provide the perfect accent to any space.
                </li>
                <li>
                  Indulge in the timeless allure of candlelight and embrace the
                  natural beauty of Candleaf. Let our candles ignite your senses
                  and illuminate your moments with warmth and serenity.
                </li>
              </ul>
            </div>
            <div className="grid w-full grid-cols-2 grid-rows-[300px] gap-4">
              <Image
                src={"/about/candle-aboutpage.jpg"}
                alt="candle mockup"
                width={900}
                height={600}
                style={{
                  borderRadius: 24,
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
              <Image
                src={"/about/candle-aboutpage-two.jpg"}
                alt="candle mockup"
                width={900}
                height={600}
                style={{
                  borderRadius: 24,
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </article>
        <article id="shipping">
          <h2 className="my-6 text-center font-poppins text-4xl lg:text-6xl">
            Shipping
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-3xl bg-[#56b280] p-4 text-white md:p-10">
              <ul className="flex flex-col gap-2 font-poppins text-xl">
                <li>
                  Welcome to Candleaf, your haven for all-natural candles
                  crafted with care and passion. Nestled in the heart of town,
                  Candleaf offers an enchanting array of hand-poured candles
                  that illuminate your space with warmth and tranquility.
                </li>
                <li>
                  Step into our inviting store, where you're greeted by the
                  soothing aroma of natural fragrances. Each candle at Candleaf
                  is meticulously crafted using only the finest,
                  sustainably-sourced ingredients, ensuring a clean burn and a
                  guilt-free indulgence for your senses.
                </li>
                <li>
                  Explore our diverse collection, featuring an eclectic mix of
                  scents inspired by nature's bounty. From the refreshing citrus
                  notes of lemon verbena to the earthy embrace of lavender
                  fields, there's a fragrance to suit every mood and occasion.
                </li>
                <li>
                  At Candleaf, we prioritize quality and authenticity, which is
                  why our candles are free from harsh chemicals and artificial
                  additives. Whether you're looking to unwind after a long day
                  or create a cozy ambiance for a special gathering, our candles
                  provide the perfect accent to any space.
                </li>
                <li>
                  Indulge in the timeless allure of candlelight and embrace the
                  natural beauty of Candleaf. Let our candles ignite your senses
                  and illuminate your moments with warmth and serenity.
                </li>
              </ul>
            </div>
            <div className="grid w-full grid-cols-2 grid-rows-[300px] gap-4">
              <Image
                src={"/about/candle-aboutpage-3.jpg"}
                alt="candle mockup"
                width={900}
                height={600}
                style={{
                  borderRadius: 24,
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
              <Image
                src={"/about/candle-aboutpage-4.jpg"}
                alt="candle mockup"
                width={900}
                height={600}
                style={{
                  borderRadius: 24,
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </article>
        <article id="afiliate">
          <h3 className="my-6 text-center font-poppins text-4xl lg:text-6xl">
            Afiliate
          </h3>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-3xl bg-[#56b280] p-4 text-white md:p-10">
              <ul className="flex flex-col gap-2 font-poppins text-xl">
                <li>
                  Welcome to Candleaf, your haven for all-natural candles
                  crafted with care and passion. Nestled in the heart of town,
                  Candleaf offers an enchanting array of hand-poured candles
                  that illuminate your space with warmth and tranquility.
                </li>
                <li>
                  Step into our inviting store, where you're greeted by the
                  soothing aroma of natural fragrances. Each candle at Candleaf
                  is meticulously crafted using only the finest,
                  sustainably-sourced ingredients, ensuring a clean burn and a
                  guilt-free indulgence for your senses.
                </li>
                <li>
                  Explore our diverse collection, featuring an eclectic mix of
                  scents inspired by nature's bounty. From the refreshing citrus
                  notes of lemon verbena to the earthy embrace of lavender
                  fields, there's a fragrance to suit every mood and occasion.
                </li>
                <li>
                  At Candleaf, we prioritize quality and authenticity, which is
                  why our candles are free from harsh chemicals and artificial
                  additives. Whether you're looking to unwind after a long day
                  or create a cozy ambiance for a special gathering, our candles
                  provide the perfect accent to any space.
                </li>
                <li>
                  Indulge in the timeless allure of candlelight and embrace the
                  natural beauty of Candleaf. Let our candles ignite your senses
                  and illuminate your moments with warmth and serenity.
                </li>
              </ul>
            </div>
            <div className="grid w-full grid-cols-2 grid-rows-[300px] gap-4">
              <Image
                src={"/about/candle-aboutpage-5.jpg"}
                alt="candle mockup"
                width={900}
                height={600}
                style={{
                  borderRadius: 24,
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
              <Image
                src={"/about/candle-aboutpage-6.jpg"}
                alt="candle mockup"
                width={900}
                height={600}
                style={{
                  borderRadius: 24,
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

// ЗАМЕНИТЬ КАРТИНКИ, ОПИСАНИЕ, ОПТИМИЗАЦИЯ
