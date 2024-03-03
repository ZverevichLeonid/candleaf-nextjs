"use client"
import React from "react"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
export default function SignIn() {
  return (
    <section>
      <div className="container mx-auto p-5">
        <div className="mb-40 mt-10 flex flex-col items-center font-poppins  text-white">
          <div className="flex  max-w-[400px] flex-col items-center justify-center gap-5 rounded-md bg-[#56b280] p-5">
            <h1 className=" text-2xl">Sign in</h1>
            <div className="flex flex-col gap-2">
              <button
                className=" rounded-md bg-[#171515] p-5 text-white transition-colors hover:bg-[#262626]"
                onClick={() => signIn("github", { callbackUrl: "/profile" })}
              >
                Sign in with github{" "}
              </button>
              <button
                className=" rounded-md bg-[#ffffff] p-5 text-black transition-colors hover:bg-blue-300"
                onClick={() => signIn("google", { callbackUrl: "/profile" })}
              >
                Sign in with google{" "}
              </button>
            </div>
            <p className="text-center text-sm">
              By clicking continue you agree to{" "}
              <Link
                className="underline"
                target="_blank"
                href={"/privacy-policies"}
              >
                the privacy policy{" "}
              </Link>
              and{" "}
              <Link
                className="underline"
                target="_blank"
                href={"/terms-conditions"}
              >
                terms of conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
