'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"

const Contact = () => {
    const [name , SetYourName] = useState('');
    const [email , SetEmail] = useState('');
    const [message , SetMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(name,email,message);
        let data = await fetch('http://localhost:3000/api/add-contact',{
            method:'POST',
            body:JSON.stringify({name,email,message})
        });
        data = await data.json();
        if(data.success)
        {
            router.push('/');
        }
        else{
            alert("Try Again");
        }
    }
  return (
    <div className="py-2 text-white bg-[#232325] h-auto" id="contact">
        <div className="py-6 max-w-[1200px] mx-auto text-gray-900">
            <div className="mx-auto px-4 md:px-9">
                <div className=" flex items-center justify-between gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl lg:text-3xl text-white">Lets
                            <span> Connect</span>
                        </h2>
                        <p className="text-gray-500">
                            Hey There! Nice to Meet You!
                        </p>
                    </div>
                </div>
            </div>
            <form
                    method="POST"
                    className=" max-w-6xl p-5 md:p-12"
                    id="form"
                >
                <input
                    type="text"
                    placeholder="Your Name ..."
                    className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                    value={name}
                    onChange={(e)=>SetYourName(e.target.value)}
                />
                <input
                type="email"
                placeholder="Your Email ..."
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                value={email}
                onChange={(e)=>SetEmail(e.target.value)}
                />
                <textarea
                id="textarea"
                cols="30"
                rows="4"
                placeholder="Your Message ..."
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                value={message}
                onChange={(e)=>SetMessage(e.target.value)}
                />
                <button
                type="submit"
                className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
                onClick={handleSubmit}
                >
                Send Message
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact