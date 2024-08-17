import React from "react"

const Contact = () => {
  return (
    <div className="py-2 text-white bg-[#232325] h-auto" id="contact">
        <div className="py-6 max-w-[1200px] mx-auto text-gray-900">
            <div className="mx-auto px-4 md:px-9">
                <div className=" flex items-center justify-between gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl lg:text-3xl text-white">Let's
                            <span> Connect</span>
                        </h2>
                        <p className="text-gray-500">
                            Hey There! Nice to Meet You!
                        </p>
                    </div>
                </div>
            </div>
            <form
                    action=""
                    method="POST"
                    className=" max-w-6xl p-5 md:p-12"
                    id="form"
                >
                <input
                    type="text"
                    id="name"
                    placeholder="Your Name ..."
                    name="name"
                    className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                />
                <input
                type="email"
                id="email"
                placeholder="Your Email ..."
                name="email"
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                />
                <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="4"
                placeholder="Your Message ..."
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                />
                <button
                type="submit"
                className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
                >
                Send Message
                </button>
                
            </form>
        </div>
    </div>
  )
}

export default Contact