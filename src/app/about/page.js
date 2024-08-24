import React from 'react'
import Image from 'next/image'
import about from '/public/about.jpeg'

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto" id='about'>
        <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 px-10 max-w-6xl mx-auto">
            <div>
                <div className="w-[350px] h-full mt-4">
                    <Image alt='About Us' src={about} className='rounded-xl h-[300px] filter brigtness-50' loading="eager" priority={true}/>
                </div>
            </div>

            <div>
                <div className="p-2">
                    <div className="text-gray-300 my-3">
                        <h3 className='text-4xl font-semibold mb-5'>About <span className='primary-text'>Me</span></h3>
                        <p className="text-justify leading-7 w-11/12 mx-auto">
                            Web developer with over 2 years of experience analyzing, designing, developing,
                            and integrating front-end & back-end-based applications, Possesses knowledge
                            of web of web applications using HTML, CSS, JavaScript, Laravel, and PHP. 
                            Eager to tackle challenging projects, having led teams and successfully 
                            deployed innovative web applications, positively impacting business growth
                            and user engagement.
                        </p>
                    </div>
                </div>

                <div className="flex mt-10 items-center gap-2">
                    <div className="bg-[#333333] p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">11
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-sm">Fullstack Projects</span></p>
                    </div>
                    <div className="bg-[#333333] p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">2
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-sm">Years of Experience</span></p>
                    </div>
                    <div className="bg-[#333333] p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">10
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-sm">Programming Skills</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About