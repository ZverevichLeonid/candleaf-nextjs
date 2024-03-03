declare module "next-auth/adapters" {
  interface AdapterUser {
    id: string
    email: string
    emailVerified: Date | null
    role?: "admin" | "user"
  }
}
