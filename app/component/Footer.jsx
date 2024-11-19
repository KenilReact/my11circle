import Image from "next/image";
import React from "react";
import logoImage from "asset/logo.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import respo_play from "asset/respo-play-v1.png";
import plus_18 from "asset/18plus-v1.png";
import facebook from "asset/facebook.png";
import twitter from "asset/twitter.png";
import instagram from "asset/instagram.png";
import linkedin from "asset/linkedin.png";
import telegram from "asset/telegram.png";

const Footer = () => {
  return (
    <>
      <div className="footerPage bg-red-700 pt-10 pb-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 lg:m-10 md:m-0 xs:mx-5">
            <div className="connect text-center me-7">
              <div className="logoImage flex justify-center">
                <Image src={logoImage} alt="logoImage" />
              </div>
              <div className="copyRight my-7">
                <p className="text-white xs:text-xs">
                  &copy; 2022 Play Games24*7 PVT. LTD. All Right Reserved.
                </p>
              </div>
              <div className="sayText my-7">
                <h1 className="text-3xl text-white">Stay Connected</h1>
              </div>
              <div className="icone flex justify-center">
                <Image
                  src={facebook}
                  alt="image"
                  height={50}
                  width={50}
                  className="mx-2"
                />
                <Image
                  src={twitter}
                  alt="image"
                  height={50}
                  width={50}
                  className="mx-2"
                />
                <Image
                  src={instagram}
                  alt="image"
                  height={50}
                  width={50}
                  className="mx-2"
                />
                <Image
                  src={linkedin}
                  alt="image"
                  height={50}
                  width={50}
                  className="mx-2"
                />
                <Image
                  src={telegram}
                  alt="image"
                  height={50}
                  width={50}
                  className="mx-2"
                />
              </div>
            </div>

            <div className="QuickLink lg:m-0 md:mt-10 xs:mt-10">
              <h1 className="text-2xl text-white font-semibold">Quick Links</h1>
              <div className="grid grid-cols-2">
                <div className="list-1 text-white text-sm me-5">
                  <ul>
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Home
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      How To Play
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      How To Download
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Points System
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Tips & Tricks
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Promotions
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Fantasy Cricket League{" "}
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Help
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Withdraw Cash
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Today's Match Predicion
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      T20 World Cup
                    </li>
                    <hr />
                  </ul>
                </div>

                <div className="list-1 text-white text-sm ms-5">
                  <ul>
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Fantasy Cricket on iOS
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Fantasy Cricket on Android
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Indian T20 League
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      About Us
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Hacking Awareness
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Legality
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Terms of Service
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Privacy Policy
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Blog
                    </li>
                    <hr />
                    <li className="py-2 flex items-center hover:text-yellow-500 duration-500">
                      <MdKeyboardDoubleArrowRight className="pe-1 text-xl" />
                      Contact Us
                    </li>
                    <hr />
                  </ul>
                </div>
              </div>
            </div>

            <div className="security_payment ms-10 xs:mt-10">
              <div className="securityText text-white lg:m-0 md:mt-10">
                <h1 className="text-2xl font-semibold lg:text-2xl md:text-2xl xs:text-xl">
                  Security & Game Integrity
                </h1>
              </div>
              <div className="security_plus-18 mt-3">
                <ul className="flex">
                  <li className="me-2">
                    <Image src={respo_play} alt="image" />
                  </li>
                  <li className="ms-2">
                    <Image src={plus_18} alt="image" />
                  </li>
                </ul>
              </div>

              <div className="securityText text-white mt-5 ">
                <h1 className="text-2xl font-semibold lg:text-2xl md:text-2xl xs:text-xl">
                  Our Payment Partners
                </h1>
              </div>
              <div className="security_plus-18 mt-3">
                <ul className="flex">
                  <li className="me-2">
                    <Image src={respo_play} alt="image" />
                  </li>
                  <li className="ms-2">
                    <Image src={plus_18} alt="image" />
                  </li>
                  <li className="ms-2">
                    <Image src={respo_play} alt="image" />
                  </li>
                  <li className="ms-2">
                    <Image src={plus_18} alt="image" />
                  </li>
                  <li className="ms-2">
                    <Image src={respo_play} alt="image" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="note text-center mt-5">
            <p className="text-xs text-white">
              *You must be 18 years to play real money skill games
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
