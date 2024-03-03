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
      <main>{children}</main>
      <Footer />
    </StoreProvider>
  )
}
