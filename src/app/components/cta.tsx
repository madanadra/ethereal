import Image from "next/image";

export default function Cta() {
    return (
        <div className="grid md:grid-cols-2 items-center gap-12 py-12 md:py-24 relative">
            <a className="absolute -top-16 invisible" id="explore" />
            <div className="overflow-hidden rounded-full">
                <div className="relative aspect-video md:aspect-square scale-150">
                    <Image src='square.svg' alt='Square' fill className="object-cover object-center" />
                </div>
            </div>
            <div className="grid gap-y-6">
                <h1 className="text-4xl tracking-tighter text-balance">Explore More</h1>
                <p className="text-lg font-medium text-zinc-700">
                    Explore millions of unique, luxurious, and meaningful assets. 
                    Make it exclusive to yourself or find inspiration to create your own art, showcase it, 
                    and become a part of a world beyond imagination.
                </p>
                <button className="border border-zinc-950 hover:bg-zinc-100 font-bold cursor-pointer py-3 px-4 rounded-full mt-2 w-max">
                    Explore Now
                </button>
            </div>
        </div>
    )
}