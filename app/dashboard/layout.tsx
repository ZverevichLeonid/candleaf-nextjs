"use client"
import { SideNav } from "../components/Dashboard/dashboard-side-nav"
import { EdgeStoreProvider } from "../lib/providers/edge-store-provider"
import { useAdminStatus } from "../lib/hooks/useAdminStatus"
import { ComputerDesktopIcon } from "@heroicons/react/24/outline"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isLoading } = useAdminStatus()
  if (!isLoading) {
    return (
      <EdgeStoreProvider>
        <div className="flex h-screen flex-col md:flex-row">
          <div className="">
            <SideNav />
          </div>
          <div className="w-full overflow-x-auto p-6">{children}</div>
        </div>
      </EdgeStoreProvider>
    )
  } else {
    return (
      <div className="flex h-screen w-screen items-center justify-center gap-2">
        <h1 className="font-roboto text-4xl">Dashboard loading</h1>
        <ComputerDesktopIcon width={50} height={50} />
      </div>
    )
  }
}
