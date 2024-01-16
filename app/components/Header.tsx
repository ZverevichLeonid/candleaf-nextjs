import Image from "next/image"
import { FC } from "react"
export const Header: FC = () => {
  return (
    <header>
      <div className="container mx-auto p-5">
        <nav className="flex items-center justify-between">
          <Image
            src={"/logo.svg"}
            alt="candleaf logo"
            width={126}
            height={34}
            priority
          />
          <ul className="flex items-center justify-between gap-5 font-roboto">
            <li>Discovery</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
          <div className="flex gap-1">
            <Image src={"/profile.svg"} alt="profile" width={30} height={30} />
            <Image src={"/cart.svg"} alt="cart" width={24} height={24} />
          </div>
        </nav>
      </div>
    </header>
  )
}
