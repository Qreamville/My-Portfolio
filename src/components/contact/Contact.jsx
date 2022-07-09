import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert(`Message sent ${result.text}`);
          window.location.reload(false);
        },
        () => {
          alert("Fail to send message, Please try again");
        }
      );
  };

  // Array of Navigation
  const links = [
    { href: "https://github.com/Qreamville", icon: <FaGithub /> },
    { href: "https://twitter.com/Balqees_Oyeleye", icon: <FaTwitter /> },
    {
      href: "https://www.linkedin.com/in/balikis-oyeleye-3624a6191/",
      icon: <FaLinkedin />,
    },
    { href: "https://www.codewars.com/users/Qreamville", icon: <SiCodewars /> },
  ];

  const navLinks = links.map((link, _idx) => {
    return (
      <li className="my-3 hover:text-tomato" key={_idx}>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          {link.icon}
        </a>
      </li>
    );
  });

  return (
    <section id="contact" className="bg-bg-blue">
      <div className="container mx-auto py-8">
        <h2 className="text-6xl text-center text-tomato font-bold">
          Contact Me
        </h2>
        <div className="contact flex">
          <div className="contact-text">
            <p>
              Let's make something new, different and more meaningful or make
              something visually pleasing.
              <span className="text-tomato"> Just Say Hello!</span>
            </p>
            <ul className="list-disc">
              <li>07037079464</li>
              <li>oyeleyebalikis@yahoo.com</li>
              <li>Lagos, Nigeria</li>
            </ul>
            <ul className="flex gap-4">{navLinks}</ul>
          </div>
          <div className="contact-form">
            <form className="pt-4" ref={form} onSubmit={sendEmail}>
              <ul className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <li className="w-1/2">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      className="w-full"
                      required
                    />
                  </li>
                  <li className="w-1/2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full"
                      required
                    />
                  </li>
                </div>
                <li className="w-full">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full"
                    required
                  />
                </li>
                <li className="w-full">
                  <textarea
                    name="message"
                    placeholder="Your Message..."
                    className="w-full"
                    required
                  ></textarea>
                </li>
                <li>
                  <button className="contact-btn">Send</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
