"use client";
import Image from "next/image";
import React, { useState } from "react";

import "./Responsive.css";

import banner_1 from "asset/my11circle-banner-1.jpg";
import banner_2 from "asset/my11circle-banner-2.jpg";
import banner_3 from "asset/my11circle-banner-3.jpg";

import missed_call_banner from "asset/missed-call-top-banner.jpeg";
import user_rating from "asset/vector7.png";
import easy_create from "asset/3-easy-create-v2.png";
import easy_join from "asset/3-easy-join-free-v2.png";
import easy_select from "asset/3-easy-select-v2.png";
import se_3_image from "asset/real-fantsy-v1.png";
import call_fix from "asset/give-a-missed-call-fix.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
// import "./styles.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import Accordion from "./Accordion";

const HomePage = () => {
  const [changeData, setChnageData] = useState("cricket");
  const [select, setSelect] = useState(true);

  const accordionData = [
    {
      question: "What is Fantasy Cricket?",
      answer:
        "Fantasy cricket is a fantasy sports game where each player can make a team of 11 players. As the game starts, the users get points for the fantasy teams they have selected based on their performance in the real match. The points are given on the basis of runs, wickets and catches, among others.",
    },
    {
      question: "How to Download the Fantasy Cricket App?",
      answer:
        "Downloading the My11Circle fantasy cricket app is simple. My11Circle fantasy cricket app can be downloaded via multiple methods. You can follow any one of these steps to download and install the My11Circle fantasy cricket app:",
    },
    {
      question:
        "Play Daily Fantasy Cricket Tournaments & Win Real Cash on My11Circle",
      answer:
        "Even if you don't get the time to enjoy outdoor sports, fantasy cricket is one game that can still be your thing. With daily fantasy cricket tournaments, you can enjoy your favorite game from anywhere and win real cash! With in-game player selection, you are completely in the manager's seat and can pivot plans and strategies with just a few clicks and swipes. Just download the My11Circle fantasy cricket app from Google Play Store and you can get started with the online fantasy game in no time. We also have a fantasy cricket iOS app that you can install on your iOS device and enjoy the best in class game playing experience.Fantasy cricket has evolved over time, and yet the basic experience remains the same. You select your fantasy team, wait for the online fantasy games to be played and then watch and enjoy. Of course, the statistics will flow in and you will soon be able to see the victory in an online fantasy game.",
    },
    {
      question: "Benefits of Playing Fantasy Sports on My11Circle App",
      answer: "It’s Fast, Smooth and Effortless:",
    },
    {
      question: "Can I Play Practice Fantasy Cricket Games on My11circle?",
      answer:
        "With the ease and convenience that My11Circle provides for fantasy cricket and fantasy football players, practice games just come as a relief to players. It’s a no brainer, if you’re new to the world of fantasy cricket, practice games are going to be the best option for you.",
    },
    {
      question: "What Exactly Is Indian T20 League? How Do I Sign Up For it?",
      answer:
        "The Indian T20 league is something that every fantasy cricket lover looks forward to. My11Circle offers loads of cricket tournaments and matches within the league. The real cricket fans are extremely attached to the T20 league and are therefore emotional about choosing their fantasy teams. My11Circle’s fantasy cricket format helps them pick and choose players at their convenience and according to their choice. This helps players find their own set of favourite players by using skill, judgment, and strategies. Don’t wait, stay on the lookout for T20 league and make your fantasy cricket team!",
    },
    {
      question: "Any Quick Tips On Making The Best Fantasy Cricket Team?",
      answer:
        "There is not one, but multiple tips and tricks to make one of the excellent fantasy cricket teams. But first things first: it’s your own capabilities that would land you to a good fantasy team. You’ll need skill, analysis, cricket knowledge and strategies in equal parts to ace any fantasy cricket game. Here are a few pro tips from the makers of fantasy cricket app, My11Circle -",
    },
    {
      question: "How to play fantasy cricket?",
      answer:
        "Are you tired of the many challenging games in which you keep on playing but win little or nothing in the end? Come to the My11Circle fantasy app and participate in one of its games to re-experience the thrill of victory.",
    },
    {
      question: "Fantasy Cricket Winning techniques",
      answer:
        "As fantasy cricket continues to grow in popularity, more and more people are looking for ways to win. While there is no sure-fire way to guarantee a win, there are some tips that should help:",
    },
  ];

  const faq = [
    {
      question: "Why Fantasy Games?",
      answer:
        "Well, when it comes to fantasy games, we all are big fans. As a true fan, fantasy cricket and football or any fantasy gaming is something that you would absolutely love. It not only lets you use your knowledge for the game, but also improves your skills and strategy to put together to create your own team of 11 players for this fantasy sport. Of course, as you put the fantasy team together, you also win big cash prizes as the fantasy cricket game unfolds in its true glory.",
    },
    {
      question: "Unique Features of My11Circle",
      answer:
        "My11Circle fantasy cricket app gives you a unique platform to challenge the best of the best in cricket. And in doing so, win money! Let’s look at a few perks of playing fantasy cricket on My11Circle:",
    },
    {
      question: "Playing Fantasy Cricket & Football is Safe, Secure & Legal",
      answer:
        "Well, when it comes to fantasy games, we all are big fans. As a true fan, fantasy cricket and football or any fantasy gaming is something that you would absolutely love. It not only lets you use your knowledge for the game, but also improves your skills and strategy to put together to create your own team of 11 players for this fantasy sport. Of course, as you put the fantasy team together, you also win big cash prizes as the fantasy cricket game unfolds in its true glory.",
    },
  ];

  const football = [
    {
      question: "What is Fantasy Football?",
      answer:
        "Fantasy football is a sports game where each player can make a team of 11 players. As the game starts, the users get points for the players based on their performance in the real match. To be precise, this is the place where the thrill of real fantasy football comes into action.",
    },
    {
      question: "Daily Fantasy Football on My11Circle",
      answer:
        "With daily fantasy football games, you can enjoy your favorite game, right at your own comfort. In your game of fantasy football, you are the team manager and you can devise your own plans and strategies with just a few clicks and swipes. Just download My11Circle app and get started right away.",
    },
    {
      question:
        "What will you get when you download My11Circle app for fantasy football?",
      answer:
        "While it seems as exciting as it could, there are a lot of exciting things that you get once you download the My11Circle app for fantasy football on your phone. Enter the world of endless possibilities now, with one of the best fantasy sport platforms, My11Circle!",
    },
  ];

  return (
    <>
      <div className="call-fix fixed z-10 right-0 bottom-0 xl:inline lg:inline md:hidden xs:hidden">
        <Image src={call_fix} />
      </div>

      {/* Section-1 */}
      <div className="homePage">
        <div className="bg-image">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <Image src={banner_1} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner_2} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner_3} alt="image" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="missed-call-banner">
          <Image src={missed_call_banner} alt="image" />
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-3 my-7">
            <div className="useRating flex items-end xl:m-0 lg:flex-row lg:items-end lg:mx-5 md:flex-col md:items-center xs:flex-col xs:items-center">
              <div className="iamge border-2 border-gray-500">
                <Image
                  src={user_rating}
                  alt="image"
                  width={100}
                  height={100}
                  className="xs:w-20 xs:h-20"
                />
              </div>
              <div className="rating-text ms-4 lg:text-left md:text-center md:mt-3 xs:text-center xs:mt-3">
                <p className="text-2xl font-bold text-gray-500 lg:text-2xl md:text-xl xs:text-lg">
                  4.3 OUT OF 5
                </p>
                <h1 className="text-3xl font-bold lg:text-3xl md:text-2xl xs:text-xl">
                  USER RATING
                </h1>
              </div>
            </div>

            <div className="useRating flex items-end lg:flex-row lg:items-end md:flex-col md:items-center xs:flex-col xs:items-center">
              <div className="iamge border-2 border-gray-500 ">
                <Image
                  src={user_rating}
                  alt="image"
                  width={100}
                  height={100}
                  className="xs:w-20 xs:h-20"
                />
              </div>
              <div className="rating-text ms-4 lg:text-left md:text-center md:mt-3 xs:text-center xs:mt-3">
                <p className="text-2xl font-bold text-gray-500 lg:text-2xl md:text-xl xs:text-lg">
                  4+ CRORE
                </p>
                <h1 className="text-3xl font-bold lg:text-3xl md:text-2xl xs:text-xl">
                  TOTAL USERS
                </h1>
              </div>
            </div>

            <div className="useRating flex items-end lg:flex-row lg:items-end md:flex-col md:items-center xs:flex-col xs:items-center">
              <div className="iamge border-2 border-gray-500">
                <Image
                  src={user_rating}
                  alt="image"
                  width={100}
                  height={100}
                  className="xs:w-20 xs:h-20"
                />
              </div>
              <div className="rating-text ms-4 lg:text-left md:text-center md:mt-3 xs:text-center xs:mt-3">
                <p className="text-2xl font-bold text-gray-500 lg:text-2xl md:text-xl xs:text-lg">
                  ₹ 500 CRORE+
                </p>
                <h1 className="text-3xl font-bold lg:text-3xl md:text-2xl xs:text-xl">
                  PRIZES WON
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className="section-2 bg-red-700 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
            <div className="video xl:items-center lg:flex-none md:flex justify-center xs:flex">
              <iframe
                width="500"
                height="315"
                // className="w-96 h-60"
                src="https://www.youtube.com/embed/8nb01lT54_c"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <div className="easy-step xl:m-0 lg:m-10 md:mt-10 xs:mt-10">
              <h1 className="text-4xl font-bold text-white text-center">
                3 Easy Steps
              </h1>
              <div className="grid grid-cols-3 mt-10 lg:grid-cols-3 xs:grid-cols-1">
                <div className="select-match">
                  <div className="select_image flex justify-center">
                    <Image
                      src={easy_select}
                      alt="image"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="select_text text-center">
                    <h1 className="text-2xl font-bold text-white">
                      Select a Match
                    </h1>
                    <p className="text-md text-white">
                      Select an upcoming match of your choice
                    </p>
                  </div>
                </div>

                <div className="create-team mx-5">
                  <div className="select_image flex justify-center">
                    <Image
                      src={easy_create}
                      alt="image"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="select_text text-center">
                    <h1 className="text-2xl font-bold text-white">
                      Create your own team
                    </h1>
                    <p className="text-md text-white">
                      Use your sports knowledge and check player stats on the
                      platform to create a team using 100 credits
                    </p>
                  </div>
                </div>

                <div className="join-match ms-5">
                  <div className="select_image flex justify-center">
                    <Image
                      src={easy_join}
                      alt="image"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="select_text text-center">
                    <h1 className="text-2xl font-bold text-white">
                      Join Free & Cash Contests
                    </h1>
                    <p className="text-md text-white">
                      Participate in Cash or Practice Contests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-3 */}
      <div className="section-3 mt-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 lg:grid md:flex md:m-0 flex-col-reverse xs:flex xs:mx-7  ">
            <div className="play-fantasy xl:m-0 lg:mx-10 md:mt-10 xs:mt-10 ">
              <h1 className="text-3xl font-bold text-red-700 lg:text-left md:text-left xs:text-center">
                Play Fantasy Cricket on My11Circle App
              </h1>
              <p className="text-sm my-4">
                Want to enjoy fantasy games like cricket but just can't manage
                the time? Well, My11Circle.com is the answer you need. This is
                the place where your favorite fantasy sports come alive. Enjoy
                playing fantasy cricket, fantasy Football, and fantasy kabaddi
                right on your device. Pick teams of your choice and play the
                game.
              </p>
              <p className="text-sm my-4">
                My11Circle.com, a part of Games24x7, brings the best fantasy
                games at your fingertips. It is committed to offering the same
                gameplay experience as RummyCircle, India's largest rummy
                platform with 10+ Million players. Register with us, pick a game
                and win cash daily. Don't wait further. Join us now and enjoy
                the fantasy games.
              </p>
              <p className="text-sm my-4">
                Fantasy cricket and football or any fantasy games in general
                boost your skill and let you win real cash rewards. We offer a
                safe and secured platform to enjoy online fantasy sports at your
                leisure. Get started with the game right away and join India's
                fastest growing online fantasy cricket app and experience the
                real action and thrill.
              </p>
              <div className="todayMatchButton lg:justify-start xs:flex xs:justify-center xs:mb-5">
                <button className="border border-red-700 text-red-700 px-4 py-1 rounded-lg mt-3">
                  Today's Match Preview
                </button>
              </div>
            </div>

            <div className="se-3_image ms-24 xl:mx-auto lg:mx-auto md:mx-auto xs:mx-auto">
              <Image src={se_3_image} alt="image" />
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Section-4 */}
      <div className="section-4 my-14 ">
        <div className="container mx-auto flex xl:mx-auto lg:mx-10 lg:justify-start md:justify-start xs:justify-center">
          <div className="cricket mx-5 pb-2">
            <h1
              className={`text-2xl font-bold cursor-pointer ${
                changeData == "cricket" ? "text-red-700" : "text-black"
              }`}
              onClick={() => setChnageData("cricket")}
            >
              CRICKET
            </h1>
          </div>
          <div className="football mx-5 pb-2">
            <h1
              className={`text-2xl font-bold cursor-pointer ${
                changeData == "cricket" ? "text-black" : "text-red-700"
              }`}
              onClick={() => setChnageData("football")}
            >
              FOOTBALL
            </h1>
          </div>
        </div>
        <hr />
      </div>

      {/* FAQ Cricket */}
      <div className="FAQcricket">
        <div className="container mx-auto">
          <div className="faqCricket my-10 xl:m-0 lg:mx-10 md:m-0 xs:mx-5 ">
            {changeData === "cricket"
              ? accordionData.map((item) => {
                  return (
                    <Accordion
                      question={item.question}
                      answer={item.answer}
                      bg={"bg-gray-100"}
                      icon={1}
                    />
                  );
                })
              : football.map((item) => {
                  return (
                    <Accordion
                      question={item.question}
                      answer={item.answer}
                      bg={"bg-gray-100"}
                      icon={1}
                    />
                  );
                })}
          </div>
        </div>
      </div>
      <hr />

      {/* FAQ */}
      <div className="FAQ">
        <div className="container mx-auto">
          <div className="faq my-5 xl:m-0 lg:mx-10">
            {faq.map((item) => {
              return (
                <Accordion
                  question={item.question}
                  answer={item.answer}
                  bg={"bg-transparent"}
                  icon={2}
                />
              );
            })}
          </div>
        </div>
      </div>
      <hr />

      {/* Review */}
      <div className="review">
        <div className="container mx-auto">
          <div className="titleText text-center mt-10">
            <h1 className="text-4xl text-red-700 font-bold lg:text-4xl md:text-4xl xs:text-3xl">
              Players Love My11Circle
            </h1>
          </div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper  "
          >
            <SwiperSlide>
              <div className="grid grid-cols-2">
                <div className="review-1 flex my-10 items-center ms-16 lg:flex-row md:flex-col xs:flex-col">
                  <div className="image">
                    <Image
                      src={""}
                      alt="image"
                      height={100}
                      width={100}
                      className="border border-gray-200 rounded-full"
                    />
                  </div>
                  <div className="comment mx-7 lg:text-left md:text-center md:mt-5 xs:text-center xs:mt-5">
                    <p className="text-xl text-red-700">
                      Raja Deshwal, Aligarh, Uttar Pradesh Winnings ₹1 Crore
                    </p>
                    <p className="py-3">
                      “ I am so happy and thankful that I won this amount at
                      such a young age. Thank you My11Circle ”
                    </p>
                  </div>
                </div>

                <div className="review-1 flex my-10 items-center me-16 lg:flex-row md:flex-col xs:flex-col">
                  <div className="image">
                    <Image
                      src={""}
                      alt="image"
                      height={100}
                      width={100}
                      className="border border-gray-200 rounded-full"
                    />
                  </div>
                  <div className="comment mx-7 lg:text-left md:text-center md:mt-5 xs:text-center xs:mt-5">
                    <p className="text-xl text-red-700">
                      Raja Deshwal, Aligarh, Uttar Pradesh Winnings ₹1 Crore
                    </p>
                    <p className="py-3">
                      “ I am so happy and thankful that I won this amount at
                      such a young age. Thank you My11Circle ”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-2">
                <div className="review-1 flex my-10 items-center ms-16 lg:flex-row md:flex-col xs:flex-col">
                  <div className="image">
                    <Image
                      src={""}
                      alt="image"
                      height={100}
                      width={100}
                      className="border border-gray-200 rounded-full"
                    />
                  </div>
                  <div className="comment mx-7 lg:text-left md:text-center md:mt-5 xs:text-center xs:mt-5">
                    <p className="text-xl text-red-700">
                      Raja Deshwal, Aligarh, Uttar Pradesh Winnings ₹1 Crore
                    </p>
                    <p className="py-3">
                      “ I am so happy and thankful that I won this amount at
                      such a young age. Thank you My11Circle ”
                    </p>
                  </div>
                </div>

                <div className="review-1 flex my-10 items-center me-16 lg:flex-row md:flex-col xs:flex-col">
                  <div className="image">
                    <Image
                      src={""}
                      alt="image"
                      height={100}
                      width={100}
                      className="border border-gray-200 rounded-full"
                    />
                  </div>
                  <div className="comment mx-7 lg:text-left md:text-center md:mt-5 xs:text-center xs:mt-5">
                    <p className="text-xl text-red-700">
                      Raja Deshwal, Aligarh, Uttar Pradesh Winnings ₹1 Crore
                    </p>
                    <p className="py-3">
                      “ I am so happy and thankful that I won this amount at
                      such a young age. Thank you My11Circle ”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="buttonViewMore flex justify-center my-5 mb-10">
            <button className="text-red-700 border border-red-700 rounded-lg px-5 py-1">
              View More Testimonials
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
