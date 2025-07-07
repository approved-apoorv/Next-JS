import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-16 bg-[#176B87] flex px-8 justify-between items-center text-white' >
            <div className='font-bold font-sans text-xl'>
                <Link href={'/'}>QuikLinks</Link>
            </div>
            <ul className='hidden md:flex justify-center gap-4 items-center'>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/shorten'}><li>Shorten URL</li></Link>
                <Link href={'/shorten'}><li>
                    <button className='bg-[#EEF5FF] hover:bg-[#86B6F6] hover:text-gray-900 text-black p-2.5 rounded-xl font-semibold'>
                        Try now
                    </button></li></Link>
            </ul>
        </nav>
    )
}

export default Navbar