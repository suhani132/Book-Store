import React from "react";

function Contact() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-20 items-center justify-center flex ">
      <div className="  modal-box space-y-2 flex flex-col items-center justify-center text-black">
        <h1 className=" text-2xl font-semibold text-black">Contact Us</h1>

        <div className="mt-4 space-y-2">
          <span >Name</span>
          <br />
          <input
            type="text"
            placeholder="Your Name"
            className="w-80 px-3 py-1 border rounded-md outline-none"
          />
        </div>
        <div className="mt-4 space-y-2">
          <span >Email</span>
          <br />
          <input
            type="email"
            placeholder="Email Address"
            className="w-80 px-3 py-1 border rounded-md outline-none"
          />
        </div>
        <div className="mt-4 space-y-2">
          <span>Message</span>
          <br />
          <input
            type="text"
            placeholder="Enter your Message"
            className="w-80 h-20 px-3 py-1 border rounded-md outline-none"
          />
        </div>
        <button className="bg-blue-500 text-white border rounded-md px-2 py-1">Submit</button>
      </div>
    </div>
    </>
  );
}

export default Contact;
