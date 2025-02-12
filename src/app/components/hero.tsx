import Link from "next/link";

export default function Hero() {
    return (
        <div className="grid gap-y-8 py-12 md:py-24 z-10 relative">
            <a className="absolute -top-16 invisible" id="home" />
            <h1 className="text-4xl md:text-7xl tracking-tighter text-balance">
                Discover the Future of Decentralized Art & Finance
            </h1>
            <p className="text-lg font-medium text-zinc-700 md:w-1/2">
                Unlock a world of possibilities with true ownership and transparent provenance, all secured on the blockchain.
            </p>
            <Link href='#features' className="w-max">
                <button className="border border-zinc-950 hover:bg-zinc-100 font-bold cursor-pointer py-3 px-4 rounded-full mt-2 w-max">
                    Get Started
                </button>
            </Link>
        </div>
    )
}