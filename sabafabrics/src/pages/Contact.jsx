import React from "react";
import Button from "../components/Button";

function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder={0}
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Shop # 10, 1st Floor, Saba Commercial, Light House, Karachi.
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <p className="leading-relaxed">customercare@sabafabrics.com</p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">0340-2196848</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            GET IN TOUCH WITH US
          </h2>
          <p className="leading-relaxed mb-4 text-gray-600">
            We'd love to hear from you! Whether you have a question, need
            assistance, or just want to share your feedback, our team is ready
            to help. Reach out and we'll get back to you as soon as possible.
          </p>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block mx-2 text-sm text-medium font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded-none focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
              required=""
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block mx-2 text-sm text-medium font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded-none focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
              required=""
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block mx-2 text-sm text-medium font-medium text-gray-900 dark:text-white"
            >
              Your Phone Number
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded-none focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
              required=""
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="block mx-2 text-sm text-medium font-medium text-gray-900 dark:text-white"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-50 rounded-none border border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <Button text={"Send"}/>
        </div>
      </div>
    </section>
  );
}

export default Contact;
