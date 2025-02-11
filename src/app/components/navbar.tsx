'use client'

import { useState } from "react";
import { PiList, PiX } from "react-icons/pi";
import { Wallet } from "./wallet";
import Link from "next/link";

export default function Navbar() {
    const [show, setShow] = useState(false)

    const Menu = () => {
        const data = [
            {
                name: 'Home',
                link: '#home'
            },
            {
                name: 'Features',
                link: '#features'
            },
            {
                name: 'Explore',
                link: '#explore'
            }
        ]

        return (<>
            {data.map((item, i) => 
                <Link key={i} href={item.link} onClick={() => setShow(false)} 
                className="font-medium cursor-pointer">{item.name}</Link>
            )}
            <Wallet />
        </>)
    }
    
    const Modal = () => {
        return (
            <div onClick={() => setShow(false)} 
            className={`${show ? 'md:hidden' : 'hidden'} p-6 sm:px-12 fixed inset-0 top-16 backdrop-blur-xs z-30`}>
                <div onClick={(e) => e.stopPropagation()} 
                className="grid gap-y-4 p-6 border border-zinc-950 bg-zinc-100 rounded-md animate-modal">
                    <Menu />
                </div>
            </div>
        )
    }

    return (<>
        <div className="bg-zinc-50 border-b border-zinc-950 h-16 sticky top-0 z-20">
            <div className="flex items-center justify-between gap-x-8 max-w-7xl mx-auto h-full px-6 sm:px-12">
                <Link href='#home' className="font-bold text-xl italic cursor-pointer">Ethereal.</Link>
                <PiList onClick={() => setShow(true)} 
                className={`${show ? 'hidden' : 'md:hidden'} text-xl cursor-pointer`} />
                <PiX onClick={() => setShow(false)} 
                className={`${show ? 'md:hidden' : 'hidden'} text-xl cursor-pointer`} />
                <div className="hidden md:flex items-center gap-x-6">
                    <Menu />
                </div>
            </div>
        </div>
        <Modal />
    </>)
}