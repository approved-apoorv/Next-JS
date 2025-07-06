import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-16 bg-[#32012F] flex px-8 justify-between items-center text-white' >
            <div className='font-bold font-sans text-xl'>
                <Link href={'/'}>QuikLinks</Link>
            </div>
            <ul className='flex justify-center gap-4 items-center'>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/shorten'}><li>Shorten URL</li></Link>
                <Link href={'/shorten'}><li>
                    <button className='bg-[#791d73] hover:bg-[#c475c0] text-white p-2.5 rounded-xl font-semibold'>
                        Try now
                    </button></li></Link>
            </ul>
        </nav>
    )
}

export default Navbar