"use client"
import Image from "next/image"
import Link from "next/link"
import { FC, useEffect, useRef, useState } from "react"
import { useAppSelector } from "../../lib/hooks"
import { cartItem } from "../../lib/slices/cart-slice"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { BurgerMenu } from "./burger-menu"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useOnClickOutside } from "../../lib/hooks/useOnClickOutside"
import { useSession } from "next-auth/react"
export const Header: FC = () => {
  const cart = useAppSelector((state: any) => state.cart.cart)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [burgerActive, setBurgerActive] = useState(false)
  const session = useSession()
  useEffect(() => {
    if (cart.length >= 1) {
      const quantityByProduct = cart.map((item: cartItem) => item.quantity)
      setTotalQuantity(
        quantityByProduct.reduce((acc: number, item: number) => acc + item)
      )
    } else setTotalQuantity(0)
  }, [cart])

  const node = useRef<HTMLUListElement>(null)

  useOnClickOutside(node, () => setBurgerActive(false))

  return (
    <header className="relative">
      <div className="container mx-auto p-5">
        <nav className="flex items-center justify-between">
          {burgerActive ? (
            <XMarkIcon
              onClick={() => setBurgerActive(!burgerActive)}
              className="block md:hidden"
              width={25}
              height={25}
            />
          ) : (
            <Bars3Icon
              onClick={() => setBurgerActive(!burgerActive)}
              className="block md:hidden"
              width={25}
              height={25}
            />
          )}

          <Link href={"/"}>
            <Image
              src={"/logos/logo.svg"}
              alt="candleaf logo"
              width={126}
              height={34}
              priority
            />
          </Link>
          <ul className="hidden items-end justify-between gap-5 font-roboto md:flex">
            <li className="header__nav-link">
              <Link href={"/discovery"}>Discovery</Link>
            </li>
            <li className="header__nav-link">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="header__nav-link">
              <Link href={"/contact-us"}>Contact us</Link>
            </li>
          </ul>
          <BurgerMenu
            refLink={node}
            setActive={setBurgerActive}
            active={burgerActive}
          />
          <div className="flex gap-1 ">
            <Link
              href={
                session.status === "authenticated" ? "/profile" : "/sign-in"
              }
            >
              <Image
                className="transition-all hover:scale-105"
                src={"/utils/profile.svg"}
                alt="profile"
                width={30}
                height={30}
              />
            </Link>
            <Link
              className="flex items-center justify-center transition-all  hover:scale-105 "
              href={"/cart"}
            >
              <div className="relative">
                <Image
                  className=""
                  src={"/utils/cart.svg"}
                  alt="cart"
                  width={24}
                  height={24}
                />
                <span className="absolute -right-2 -top-1 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#56B280] px-1 py-[1px] font-poppins text-xs text-white">
                  {totalQuantity}
                </span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
