import React from "react";

import { IconContext } from "react-icons";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center bg-black text-stone-300">
      <div
        className="flex justify-center  bg-contain bg-bottom lg:bg-center  lg:bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8)), url(/src/assets/img/footer-bg.jpg)",
        }}
      >
        <section className="max-w-6xl grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-4  ">
          <div className="w-full">
            <h2 className="font-semibold text-stone-50 border-b-2 border-yellow-900 mb-2 py-2">
              ABOUT US
            </h2>
            <p className="text-sm leading-7">
              Integer cursus scelerisque ipsum id efficitur. Donec a dui
              fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac
              lectus a interdum. Vivamus semper posuere dui.
            </p>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-stone-50 border-b-2 border-yellow-900 mb-4 py-2">
              SUBSCRIBE
            </h2>
            <form action="">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email Adress..."
                className="w-full bg-transparent border border-stone-200 px-2 py-4 text-sm"
              />
              <button
                type="submit"
                className="w-full p-3 font-semibold bg-red-600 border-2 border-red-600 text-stone-100"
              >
                SUBSCRIBE
              </button>
            </form>
            <div className="flex gap-2 my-4">
              <a href="#" className="bg-stone-200 p-3 rounded">
                <IconContext.Provider
                  value={{ className: "w-4 h-4 text-red-600" }}
                >
                  <div>
                    <FaFacebookF />
                  </div>
                </IconContext.Provider>
              </a>
              <a href="#" className="bg-stone-200 p-3 rounded">
                <IconContext.Provider
                  value={{ className: "w-4 h-4 text-red-600" }}
                >
                  <div>
                    <FaTwitter />
                  </div>
                </IconContext.Provider>
              </a>
              <a href="#" className="bg-stone-200 p-3 rounded">
                <IconContext.Provider
                  value={{ className: "w-4 h-4 text-red-600" }}
                >
                  <div>
                    <FaLinkedinIn />
                  </div>
                </IconContext.Provider>
              </a>
              <a href="#" className="bg-stone-200 p-3 rounded">
                <IconContext.Provider
                  value={{ className: "w-4 h-4 text-red-600" }}
                >
                  <div>
                    <FaGooglePlusG />
                  </div>
                </IconContext.Provider>
              </a>
              <a href="#" className="bg-stone-200 p-3 rounded">
                <IconContext.Provider
                  value={{ className: "w-4 h-4 text-red-600" }}
                >
                  <div>
                    <FaInstagram />
                  </div>
                </IconContext.Provider>
              </a>
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-stone-50 border-b-2 border-yellow-900 mb-2 py-2">
              CONTACT INFORMATION
            </h2>
            <ul className="flex flex-col gap-3 font-light">
              <li>
                Ipsum Street, Lorem Tower, <br />
                MO, Columbia, 508000
              </li>
              <li>
                <a href="tel:+0120008009999">+01 2000 800 9999</a>
              </li>
              <li>
                <a href="mailto:info@admin.com" className="font-semibold">
                  info@admin.com
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-stone-50 border-b-2 border-yellow-900 mb-2 py-2">
              OPENING HOURS
            </h2>
            <ul className="flex flex-col gap-3 font-light">
              <li>Monday: Closed</li>
              <li>Tue-Wed: 9AM - 10PM</li>
              <li>Thu-Fri: 9AM - 10PM</li>
              <li>Sat-Sun: 5PM - 10PM</li>
            </ul>
          </div>
        </section>
      </div>
      <p className="text-center p-10">
        All Right Reserved. &copy; 2022{" "}
        <a href="#" className="font-semibold text-stone-100">
          Live Dinner Restaurant{" "}
        </a>
        Desing By{" "}
        <a href="#" className="font-semibold text-stone-100">
          html design
        </a>
      </p>
    </footer>
  );
};

export default Footer;
