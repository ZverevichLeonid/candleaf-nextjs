import { SideNavProfile } from "@/app/components/Profile/side-nav"

export default function profileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto p-5">
      <div className="flex w-full flex-col gap-2 lg:flex-row">
        <SideNavProfile />
        {children}
      </div>
    </div>
  )
}
