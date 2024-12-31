'use client';  // Ensure this line is at the top of your component

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.png";
import FacebookOutlinedIcon from "../../../public/facebook-outlined-icon.png";
import FacebookMessengerIcon from "../../../public/facebook-messenger-icon.png";

import Link from "next/link";
import Image from "next/image";
import { init, send } from "emailjs-com";  // Import EmailJS SDK

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Initialize EmailJS with your User ID from environment variables
  init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      from_name: e.target.email.value, // Sender's email
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      // Send the email using the send method
      const response = await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID
        data // Email data
      );

      // Check if the response is successful
      if (response.status === 200) {
        setEmailSubmitted(true);
        console.log("Message sent successfully.");
      } else {
        console.error("Error sending email:", response);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <div className="pt-1 w-10 h-12"> <Link href="https://facebook.com/mrHeinrichh/">
            <Image src={FacebookMessengerIcon} alt="Facebook Messenger" />
          </Link></div>
          <div className="pt-0.5 w-11 h-12"> <Link href="https://facebook.com/mrHeinrichhh/">
            <Image src={FacebookOutlinedIcon} alt="Facebook Icon" />
          </Link></div>
          <div className="pt-0.5 w-11 h-12"> <Link href="https://www.instagram.com/mrheinrichhh/">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link></div>
          <Link href="https://github.com/mrHeinrichh">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/john-heinrich-fabros-636502220/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
