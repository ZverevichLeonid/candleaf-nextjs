import { PrismaAdapter } from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import { db } from "./services/db"
import { AuthOptions, Session } from "next-auth"
import Google from "next-auth/providers/google"
import type { AdapterUser } from "next-auth/adapters"
import { JWT } from "next-auth/jwt"

export const nextAuthConfig = {
  pages: {
    signIn: "/sign-in",
  },
  adapter: PrismaAdapter(db) as AuthOptions["adapter"],
  providers: [
    GithubProvider({
      profile(profile) {
        return {
          role: "admin",
          id: String(profile.id),
          name: profile.name,
          image: profile.avatar_url,
          email: profile.email,
        }
      },
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    Google({
      profile(profile) {
        return {
          role: "user",
          id: String(profile.id),
          name: profile.name,
          image: profile.picture,
          email: profile.email,
        }
      },
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  callbacks: {
    session({ session, user }: { session: Session; user: AdapterUser }) {
      session.user.role = user.role!!
      return session
    },
  },
}
