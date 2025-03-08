"use client"
import Link from "next/link"
export default function Navbar() {
    return(
        <div className="w-1/2 h-1/10 bg-[#1B1B1B] flex justify-center items-center gap-6 fixed rounded-b-2xl">
            <Link href={'/'} className="text-white cursor-pointer">Home</Link>
            <Link href={'/recent-work'} className="text-white cursor-pointer">Recent Work</Link>
            <Link href={'/skills'} className="text-white cursor-pointer">Skills show off</Link>
        </div>
    )
}