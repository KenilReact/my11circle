import React from "react";
import logo from "asset/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black py-10 lg:px-16 md:py-3 xs:px-5">
        <div className="container mx-auto flex justify-between">
          <div className="logo">
            <Link href="/" >
            <Image
              src={logo}
              alt="logo"
              className="w-52 h-12 xl:w-52 xl:h-10 lg:w-48 lg:h-10 md:w-36 md:h-10 xs:w-32 xs:h-10 "
            />
            </Link>
          </div>
          <div className="login flex items-center">
            <p className="text-lg text-white mx-2 md:inline lg:text-lg md:text-base xs:hidden">
              Not a Member Yet?
            </p>
            <Link href="#" className="text-lg text-red-400 mx-2 lg:text-lg md:text-base xs:text-sm">
              Register Now
            </Link>
            <Link
              href="#"
              className="text-lg text-white border border-white rounded-lg px-4 py-1 mx-2 lg:text-lg md:text-base xs:text-sm"
            >
              Log In
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
