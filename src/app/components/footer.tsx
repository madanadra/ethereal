'use client'

import Link from "next/link"

export default function Footer() {
    const data = [
        {
            title: 'Section',
            sub: [
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
        },
        {
            title: 'Developers',
            sub: [
                {
                    name: 'Documentation',
                    link: '#home'
                },
                {
                    name: 'Version',
                    link: '#home'
                },
                {
                    name: 'Resources',
                    link: '#home'
                },
                {
                    name: 'Blog',
                    link: '#home'
                }
            ]
        },
        {
            title: 'Policies',
            sub: [
                {
                    name: 'Privacy',
                    link: '#home'
                }, 
                {
                    name: 'Terms of use',
                    link: '#home'
                }, 
                {
                    name: 'Cookies',
                    link: '#home'
                }
            ]
        },
        {
            title: 'Social',
            sub: [
                {
                    name: 'Instagram',
                    link: '#home'
                }, 
                {
                    name: 'Facebook',
                    link: '#home'
                }, 
                {
                    name: 'X/Twitter',
                    link: '#home'
                },
                {
                    name: 'Youtube',
                    link: '#home'
                }
            ]
        },
    ]

    return (
        <div className="mt-12 border-t border-zinc-950">
            <div className="grid gap-y-12 max-w-7xl py-12 px-6 sm:px-12 mx-auto">
                <div className="grid items-start grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
                    {data.map((item, i) => 
                        <div key={i} className="grid gap-y-2">
                            <h1 className="text-sm font-semibold">{item.title}</h1>
                            {item.sub.map((sub, i) => 
                                <Link key={i} href={sub.link}>
                                    <h1 className="text-sm hover:underline cursor-pointer w-max">{sub.name}</h1>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
                <div className="grid md:grid-cols-2 items-center gap-4">
                    <Link href='#home' className="font-bold text-3xl italic cursor-pointer md:text-right md:order-2">Ethereal.</Link>
                    <h1 className="text-sm text-zinc-700">
                        &copy; {new Date().getFullYear()} Ethereal by Madanadra. All rights reserved.
                    </h1>
                </div>
            </div>
        </div>
    )
}