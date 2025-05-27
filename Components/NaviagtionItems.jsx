"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const navLinks = [
  { name: "Home", href: "https://www.discoverarch.org", external: true },
  {
    name: "Competition",
    href: "https://www.discoverarch.org/competitions/socialhub",
    external: true,
  },
];

export const NavigationItems = () => {
  const [hovered, setHovered] = useState(null);
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    try {
      const response = await axios.post("/api/email", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail("");
        setShowSubscribe(false);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error submitting form");
    }
  };

  return (
    <div className="flex space-x-6 items-center relative text-white">
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          target={link.external ? "_blank" : "_self"}
        >
          <div
            className="group relative h-6 overflow-hidden flex items-center cursor-pointer"
            onMouseEnter={() => setHovered(link.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              •
            </span>
            <div className="overflow-hidden h-6">
              <div
                className={`flex flex-col transition-transform duration-300 ${
                  hovered === link.name ? "animate-scroll-up" : ""
                }`}
              >
                <span>{link.name}</span>
                <span>{link.name}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}

      {/* Subscribe Button */}
      <div className="relative">
        <button
          className="bg-white text-black px-4 py-1 rounded-full border border-white hover:bg-black hover:text-white transition-all"
          onClick={() => setShowSubscribe(!showSubscribe)}
        >
          Subscribe
        </button>

        {showSubscribe && (
          <div className="absolute right-0 top-12 w-72 bg-white text-black p-4 rounded-xl border border-gray-200 z-50 space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated!</h3>
            <p className="text-sm text-gray-600 leading-tight">
              Get the latest blogs and competition updates directly to your
              inbox.
            </p>
            <form onSubmit={onSubmitHandler} className="space-y-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-black"
                required
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
