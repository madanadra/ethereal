'use client'

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
})

const queryClient = new QueryClient()

export default function Provider({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={lightTheme({borderRadius: 'small', overlayBlur: 'small'})}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
