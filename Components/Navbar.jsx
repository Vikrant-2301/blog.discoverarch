"use client";

import Link from "next/link";
import { NavigationItems } from "./NaviagtionItems";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center">
      <div
        className={`fixed top-5 z-50 w-[94%] max-w-[1461px] mx-auto flex justify-between items-center
          px-4 sm:px-8 h-12 sm:h-14 backdrop-blur-md rounded-xl`}
        style={{
          backgroundColor: "rgba(33, 33, 33, 0.7)",
          color: "white",
          letterSpacing: "-0.16px",
          lineHeight: "24px",
        }}
      >
        {/* Logo */}
        <div className="flex space-x-4 sm:space-x-8">
          <Link href="/" className="flex items-center" id="logo">
            <p className="text-white font-medium text-sm sm:text-base">
              DISCOVERARCH
            </p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationItems />
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-center items-center">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
