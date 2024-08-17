'use client';
import React, { useState } from 'react'
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Header = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }

    return (

        <div className='bg-[#20242d] sticky top-0'>
            <div className='text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-1 text-1'>
                <h1 className='text-3xl font-bold primary-color ml-4'>// Navil //</h1>
                <ul className='hidden md:flex'>
                    <Link href="/"><li className='p-5'>Home</li></Link>
                    <Link href="/about"><li className='p-5'>About</li></Link>
                    <Link href="/skills"><li className='p-5'>Skills</li></Link>
                    <Link href="/experience"><li className='p-5'>Experience</li></Link>
                    <Link href="/projects"><li className='p-5'>Projects</li></Link>
                    <Link href="/contact"><li className='p-5'>Contact</li></Link>
                </ul>

                <div onClick={handleNav} className="block md:hidden m-3">
                    { nav ? <AiOutlineClose size={30}/>  : <AiOutlineMenu size={30}/> }
                </div>

            <div className={nav ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121]  duration-500  ease-in-out' 
                    : 'fixed left-[-100%] top-0  h-full ease-in-out duration-500' }>
                    <h1 className='text-3xl primary-color ml-4 my-4'>// Navil //</h1>
                    <ul className='p-8 text-2xl'>
                        <Link href="/"><li className='p-5'>Home</li></Link>
                        <Link href="/about"><li className='p-5'>About</li></Link>
                        <Link href="/skills"><li className='p-5'>Skills</li></Link>
                        <Link href="/experience"><li className='p-5'>Experience</li></Link>
                        <Link href="/projects"><li className='p-5'>Projects</li></Link>
                        <Link href="/contact"><li className='p-5'>Contact</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header