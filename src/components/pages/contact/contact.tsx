import React from 'react'


function Contact() {
  return (
        <div className="bg-white flex flex-col items-center max-w-[1440px] mx-auto">
          {/* Get In Touch Section */}
          <div className="text-center py-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">
              Get In Touch With Us
            </h2>
            <p className="text-sm sm:text-base text-[#9f9f9f] mt-4">
              For More Information About Our Product &amp; Services, please feel
              free to <br /> drop us an email. Our staff will always be there to help you out.
            </p>
          </div>

          {/* Address and Form Section */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 px-4">
            {/* Address Section */}
            <div className="bg-white shadow-md p-6 rounded-lg w-full sm:w-[405px]">
              <div className="flex items-center mb-6">
                <img
                  className="w-6 h-6 mr-4"
                  alt="Vector"
                  src="/images/contact/location.jpeg"
                />
                <h3 className="text-2xl font-medium text-black">Address</h3>
              </div>
              <p className="text-base text-black">
                236 5th SE Avenue, New York NY10000, United States
              </p>

              <div className="flex items-center mt-8 mb-6">
                <img
                  className="w-6 h-6 mr-4"
                  alt="Phone"
                  src="/images/contact/phone.jpeg"
                />
                <h3 className="text-2xl font-medium text-black">Phone</h3>
              </div>
              <p className="text-base text-black">
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>

              <div className="flex items-center mt-8 mb-6">
                <img
                  className="w-6 h-6 mr-4"
                  alt="Clock"
                  src="/images/contact/watch.jpeg"
                />
                <h3 className="text-2xl font-medium text-black">Working Time</h3>
              </div>
              <p className="text-base text-black">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>

            {/* Form Section */}
            <div className="bg-white shadow-md p-6 rounded-lg w-full sm:w-[635px]">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-medium text-black"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Abc"
                    className="w-full mt-2 p-3 border border-[#9f9f9f] rounded-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-medium text-black"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Abc@def.com"
                    className="w-full mt-2 p-3 border border-[#9f9f9f] rounded-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-base font-medium text-black"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="This is optional"
                    className="w-full mt-2 p-3 border border-[#9f9f9f] rounded-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-medium text-black"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Hi! I’d like to ask about..."
                    className="w-full mt-2 p-3 border border-[#9f9f9f] rounded-lg"
                    rows={4}
                  />
                </div>

                {/* Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full sm:w-[237px] h-[55px] bg-[#B88E2F] border-[1px] border-[#B88E2F] rounded-[5px] text-white text-[16px] leading-[24px]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
    </div>
  )
}

export default Contact