'use client'
import React from 'react'
import Image from 'next/image'
import blob from '/public/blob.png'
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';

const page = () => {
  return (
    <div id='home'>
        <div className="my-7 sm:my-0 max-w-[1200px] h-[88vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center">
            <div className="flex-col my-auto mx-auto">
                <p className="md:text-5xl sm-text-4xl text-xl font-bold text-gray-200">Hi, I am Navil</p>
                <h1 className="md:text-7xl sm-text-4xl text-xl font-bold md:py-6">
                    <TypeAnimation 
                        sequence={[
                            "Backend Dev",
                            1000,
                            "Web Developer",
                            1000,
                            "Full Stack",
                            1000
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm-text-4xl text-xl font-bold text-gray-500">With 2+ Years Of Experience</p>
                </div>
                <div className="text-5xl flex justify-start gap-6 my-7 text-purple-600">
                    <a href="https://github.com/navilll" target='_blanck'><AiFillGithub/></a>
                    <a href="https://in.linkedin.com/in/navil-faisal-824826214" target='_blanck'><AiFillLinkedin/></a>
                </div>
                <div className="relative inline-flex group my-3">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-100 group-hover:duration-200">
                    </div>
                    <Link href="/cv.pdf" target='_blank' title='Download CV' role='button' className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" download>
                    Download CV</Link>
                </div>
            </div>
            <div className="my-auto">
                <Image src={blob} alt="Banner" width={500} height={500} className="w-[300px] sm:w-[500px] mx-auto h-auto rounded-full" loading="eager" priority={true}/>
            </div>
        </div>
    </div >
  )
}

export default page