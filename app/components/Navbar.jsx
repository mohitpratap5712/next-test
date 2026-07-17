import Link from "next/link"
export default function Navbar() {
    return (

        <div className="flex bg-black text-amber-50 text-3xl h-[5%] w-full gap-6 justify-between  " >
            <div className="brand ml-4">OYSTERPLS</div>

            <div className="flex gap-5 mr-9">
                <Link href="/contact" >Contact</Link>
                <Link href="/about" >About</Link>
                <Link href="/home" >Home</Link>
            </div>

        </div>
    )
}