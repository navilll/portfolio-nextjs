import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-max-[800px] border-t border-gray-200 mx-auto flex justify-between p-4 text-sm md:text-lg'>
        <div className='space-y-4'>
            <h3 className='text-xl text-gray-200 font-semibold'>Navil Faisal</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-xl'>
                <a href="https://github.com/navilll"><FaGithubSquare /></a>
                <a href="https://in.linkedin.com/in/navil-faisal-824826214"><FaLinkedin /></a>
            </div>

        </div>
        
    </div>
  )
}

export default Footer