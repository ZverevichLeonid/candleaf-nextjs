import Link from "next/link"
import React from "react"

export const BurgerMenu = ({
  refLink,
  active,
  setActive,
}: {
  active: boolean
  setActive: (active: boolean) => void
  refLink: any
}) => {
  return (
    <ul ref={refLink} className={active ? "burger-active burger" : "burger"}>
      <li className="burger__link">
        <Link onClick={() => setActive(false)} href={"/discovery"}>
          Discovery
        </Link>
      </li>
      <li className="burger__link">
        <Link onClick={() => setActive(false)} href={"/about"}>
          About
        </Link>
      </li>
      <li className="burger__link">
        <Link onClick={() => setActive(false)} href={"/contact-us"}>
          Contact us
        </Link>
      </li>
      <li className="burger__link">
        <Link onClick={() => setActive(false)} href={"/profile"}>
          Profile
        </Link>
      </li>
      <li className="burger__link">
        <Link onClick={() => setActive(false)} href={"/cart"}>
          Cart
        </Link>
      </li>
    </ul>
  )
}
