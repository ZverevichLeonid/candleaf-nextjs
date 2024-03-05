import { Footer } from "../components/Footer/footer"
import { Header } from "../components/Header/header"
import StoreProvider from "../lib/providers/redux-store-provider"

export default function storeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </StoreProvider>
  )
}
