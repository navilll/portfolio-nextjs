import React from 'react'
import Image from 'next/image'
import ranger from '/public/ranger.jpg'
import iby from '/public/iby.jpg'
import cybersurance from '/public/cybersurance.jpg'

const Projects = () => {
  return (
    <div className="py-2 text-white h-auto" id='projects'>
        <div className="py-6 max-w-[1200px] mx-auto">
            <div className="mx-auto px-4 md:px-9">
                <div className="mb-4 flex items-center justify-between gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl lg:text-3xl text-white">
                            My <span>Projects</span>
                        </h2>
                        <p className="text-gray-500">
                            These are my latest Projects
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 m-3">
                <div className="bg-[#232325] border-[#A3099C] border rounded-lg overflow-hidden">
                    <Image
                    src={iby}
                    width={400}
                    height={300}
                    alt="Card Image"
                    loading="eager" priority={true}
                    className="object-cover w-full h-48 sm:h-64"
                    />
                    <div className="p-4 sm:p-6">
                        <h3 className="text-lg font-semibold text-white">Iby Outlet</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            This is a team project on laravel which I am working on since 
                            September laravel crud, validation, laravel search,login and sign 
                            up from laravel/breeze ,multi auth and pagination and many 
                            more
                        </p>
                    </div>
                </div>
                <div className="bg-[#232325] border-[#A3099C] border rounded-lg overflow-hidden">
                    <Image
                    src={ranger}
                    width={400}
                    height={300}
                    alt="Card Image"
                    className="object-cover w-full h-48 sm:h-64"
                    loading="eager" priority={true}
                    />
                    <div className="p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-white">Ranger Renovation</h3>
                    <p className="text-sm text-gray-400 mt-2">
                        It is an API project App name is Ranger Renovation It has 
                        Multi Auth Admin panel , Dependent dropdown , SweetAlert 
                        and it was an Individual project.
                    </p>
                    </div>
                </div>
                <div className="bg-[#232325] border-[#A3099C] border rounded-lg overflow-hidden">
                    <Image
                    src={cybersurance}
                    width={400}
                    height={300}
                    alt="Card Image"
                    className="object-cover w-full h-48 sm:h-64"
                    loading="eager" priority={true}
                    />
                    <div className="p-4 sm:p-6">
                        <h3 className="text-lg font-semibold text-white">Cybersurace.net</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            It is also individually made by me where validation was 
                            through ajax,php mailer,and many more
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Projects