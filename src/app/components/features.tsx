import Image from "next/image"

export default function Features() {
    const data = [
        {
            img: 'cart.svg',
            title: 'Buy anything',
            sub: `Offers a seamless and secure way to purchase NFT's from a wide range of categories, 
            including art, music, collectibles, and virtual assets. Whether you're a first-time buyer or a seasoned collector, 
            Ethereal makes the process simple and hassle-free.`
        },
        {
            img: 'coin.svg',
            title: 'Sell to all',
            sub: `Unlock the power of your digital creations and turn them into valuable assets by listing them on Ethereal. 
            Whether you're an artist, creator, or collector looking to sell, 
            Ethereal makes the selling process straightforward, secure, and rewarding.`
        },
        {
            img: 'paint.svg',
            title: 'Create your own',
            sub: `Bring your digital creations to life and enter the world of NFT's by using our simple, easy and
            user-friendly creation tools. Whether you're an artist, designer, or innovator,
            Ethereal lets you create, showcase and sell your unique digital assets effortlessly.`
        }
    ]

    return (
        <div className="grid gap-y-4 py-12 md:py-24 relative">
            <a className="absolute -top-16 invisible" id="features" />
            <h1 className="text-4xl tracking-tighter text-balance">Enjoy the Features</h1>
            <p className="text-lg font-medium text-zinc-700">
                Learn how to buy and sell NFT&apos;s safely and also don&apos;t forget to create your own art easily.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-2">
                {data.map((item, i) => 
                    <div key={i} className="grid content-start gap-y-4 rounded-md bg-zinc-100 border border-zinc-950 p-6 
                    relative animate-card overflow-hidden cursor-pointer">
                        <div className="grid justify-items-center text-center gap-y-6">
                            <Image src={item.img} alt={item.title} loading="lazy" width={100} height={100} />
                            <h1 className="text-xl font-semibold tracking-tighter uppercase">{item.title}</h1>
                        </div>
                        <p className="text-sm text-center font-medium">{item.sub}</p>
                    </div>
                )}
            </div>
        </div>
    )
}