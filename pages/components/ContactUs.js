import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  console.log(form.current);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kk3osvk",
        "template_43w6etb",
        form.current,
        "Z4DFcUs_I1LCmg9g8"
      )
      .then(
        function (response) {
          alert("SUCCESS!", response.status, response.text);
        },
        function (error) {
          alert("FAILED...", error);
        }
      );
  };

  return (
    <>
      <div class="container my-10 px-6 mx-auto">
        <section class="mb-32 text-center text-gray-800">
          <div class="max-w-[700px] mx-auto px-3 lg:px-6">
            <h2 class="text-3xl font-bold mb-12">Contact us</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div class="form-group mb-6">
                <input
                  type="text"
                  name="from_name"
                  class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="form-group mb-6">
                <input
                  name="email_id"
                  type="email"
                  class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                  required
                />
              </div>
              <div class="form-group mb-6">
                <textarea
                  name="message"
                  class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                value="Send"
                class="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
