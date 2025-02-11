import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { PiLink } from 'react-icons/pi';

export const Wallet = () => {
  return (
    <ConnectButton.Custom>
      {({account, chain, openAccountModal, openChainModal, openConnectModal, mounted}) => {
        if (!mounted) {
          return (
            <button className="border border-zinc-950 bg-zinc-100 text-sm font-bold py-1.5 px-2 rounded-full mt-2 md:mt-0 md:ml-2">
              Unmounted
            </button>
          )
        }

        if (!account || !chain) {
          return (
            <button onClick={openConnectModal} 
            className="border border-zinc-950 hover:bg-zinc-100 text-sm font-bold cursor-pointer py-1.5 px-2 rounded-full mt-2 md:mt-0 md:ml-2">
              Connect Wallet
            </button>
          )
        }

        if (chain.unsupported) {
          return (
            <button onClick={openChainModal} 
            className="border border-zinc-950 hover:bg-zinc-100 text-sm font-bold cursor-pointer py-1.5 px-2 rounded-full mt-2 md:mt-0 md:ml-2">
              Unsupported
            </button>
          )
        }

        return (
          <div className='flex items-center gap-x-6 mt-2 md:mt-0 md:ml-2'>
            <button onClick={openAccountModal} 
            className="grow border border-zinc-950 hover:bg-zinc-100 text-sm font-bold cursor-pointer py-1.5 px-2 rounded-full">
              {account.displayName}
              {account.displayBalance ? <span className='text-xs font-semibold text-zinc-700 ml-2'>{account.displayBalance}</span> : ''}
            </button>
            {chain.hasIcon && chain.iconUrl ?
              <Image onClick={openChainModal} src={chain.iconUrl} alt={chain.name ?? 'Chain'} loading="lazy" width={20} height={20} 
              className='cursor-pointer' /> :
              <PiLink onClick={openChainModal} className="text-xl cursor-pointer" />
            }
          </div>            
        )
      }}
    </ConnectButton.Custom>
  )
}