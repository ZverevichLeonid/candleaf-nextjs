"use client"
import { UserCard } from "@/app/components/Profile/user-card"
import { UserCardSkeleton } from "@/app/components/Skeletons/user-card-skeleton"
import { useLoadingStatus } from "@/app/lib/hooks/useLoadingStatus"

export default function Page() {
  const isLoading = useLoadingStatus()
  return (
    <section className="min-h-[70vh] w-full font-poppins">
      {isLoading ? <UserCardSkeleton /> : <UserCard />}
    </section>
  )
}
