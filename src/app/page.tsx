'use client'

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Cta from "./components/cta";
import Footer from "./components/footer";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  lightTheme
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'Ethereal',
  projectId: '9b0cce5602a157654004d222c1f5cff9',
  chains: [mainnet, polygon, optimism, arbitrum, base]
});

const queryClient = new QueryClient()

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={lightTheme({borderRadius: 'small', overlayBlur: 'small'})}>
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
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
