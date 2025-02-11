import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Cta from "./components/cta";
import Footer from "./components/footer";
import Provider from "./components/provider";

export default function Home() {
  return (
    <Provider>
      <div className="bg-zinc-50 text-zinc-950 min-h-dvh relative">
        <Navbar />
        <div className="absolute h-dvh inset-x-0 top-16 bg-custom" />
        <div className="grid max-w-7xl px-6 sm:px-12 mx-auto divide-y divide-zinc-950">
          <Hero />
          <Features />
          <Cta />
        </div>
        <Footer />
      </div>
    </Provider>
  )
}
