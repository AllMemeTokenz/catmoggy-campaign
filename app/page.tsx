"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { telegramLink, twitterLink } from "@/config";

// Define proper types for the button and line items

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <main className="flex flex-col max-w-[100vw] w-screen overflow-y-auto mt-[96px] lg:mt-0 overflow-x-hidden justify-center items-center h-full ">
        <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 flex-col items-center justify-between lg:px-[111px] px-5 xl:px-[190px]">
          <div className="flex my-10 xl:mx-9 w-full flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#483f3b]">
              Our Fundraising
            </h2>

            <div className="w-full border-2 border-[#483f3b] shadow-[3px_3px_0_#483f3b] rounded-xl overflow-hidden bg-[#e5e3dc]">
              <div className="flex flex-col lg:flex-row p-6">
                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="relative w-full h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/deeyw3apd/image/upload/v1742203039/2f23c8d6-3dc3-4b93-9ef0-8e0305a93f88_zeidhj.jpg"
                      alt="SCATMOGGY Fundraising"
                      fill
                      className="object-cover rounded-xl"
                      draggable={false}
                      unoptimized
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center lg:pl-8 mt-6 lg:mt-0">
                  <h3 className="text-3xl font-bold mb-4 text-[#483f3b]">
                    $CATMOGGY : The Meme Coin with a Heart for Stray Cats
                  </h3>
                  <p className="text-xl mb-6 text-[#483f3b]">
                    $CATMOGGY isn’t just another memecoin it’s a movement with
                    purpose. Built on the spirit of compassion, CatMoggy is a
                    fundraising-driven token created to help sick and abandoned
                    Moggy cats through donations made directly via our coin.
                  </p>
                  <p className="text-lg mb-8 text-[#483f3b]">
                    Each transaction you make supports real world care, shelter,
                    and medical aid for our furry friends in need. Join the
                    mission, hold the coin, and make a difference one paw at a
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row space-x-2 items-center justify-center mt-10 mb-16">
            <a
              id="twitterButton"
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#978d78]/80 border border-[#483f3b] shadow-[2px_2px_0_#483f3b] active:shadow-[0.5px_0.5px_0_#483f3b] active:translate-x-[1px] active:translate-y-[1px] active:bg-[#afa895]/90 bg-[#afa895]/70 rounded-xl active:scale-[0.99] transition-all ease-linear duration-100"
            >
              <svg
                width="43"
                height="43"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_45_5124)">
                  <path
                    d="M21.5222 18.2441L27.4785 11.3203H26.0671L20.8952 17.3321L16.7644 11.3203H12L18.2466 20.4113L12 27.6719H13.4115L18.8732 21.3232L23.2356 27.6719H28L21.5218 18.2441H21.5222ZM19.5889 20.4914L18.956 19.5861L13.9201 12.3829H16.0882L20.1522 18.1961L20.7851 19.1014L26.0677 26.6576H23.8997L19.5889 20.4917V20.4914Z"
                    fill="#483f3b"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_45_5124">
                    <rect
                      width="16"
                      height="16.36"
                      fill="#483f3b"
                      transform="translate(12 11.3203)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              id="telegramButton"
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#978d78]/80 border border-[#483f3b] shadow-[2px_2px_0_#483f3b] active:shadow-[0.5px_0.5px_0_#483f3b] active:translate-x-[1px] active:translate-y-[1px] active:bg-[#afa895]/90 bg-[#afa895]/70 rounded-xl active:scale-[0.99] transition-all ease-linear duration-100"
            >
              <svg
                width="43"
                height="43"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4621 21.0913L9.80904 19.5753C9.80904 19.5753 9.25295 19.3496 9.43201 18.838C9.46887 18.7325 9.54323 18.6428 9.76566 18.4885C10.7967 17.7699 28.8485 11.2816 28.8485 11.2816C28.8485 11.2816 29.3582 11.1098 29.6588 11.2241C29.7331 11.2471 29.8 11.2894 29.8527 11.3468C29.9053 11.4042 29.9417 11.4745 29.9583 11.5506C29.9907 11.6849 30.0043 11.8232 29.9986 11.9613C29.9972 12.0807 29.9827 12.1915 29.9718 12.3651C29.8618 14.1391 26.5717 27.3785 26.5717 27.3785C26.5717 27.3785 26.3748 28.1532 25.6695 28.1797C25.4962 28.1853 25.3235 28.156 25.1618 28.0934C25.0001 28.0308 24.8526 27.9363 24.7281 27.8156C23.3441 26.6251 18.5605 23.4102 17.5034 22.7032C17.4796 22.6869 17.4595 22.6658 17.4445 22.6411C17.4296 22.6164 17.4201 22.5888 17.4167 22.5602C17.4019 22.4857 17.4829 22.3934 17.4829 22.3934C17.4829 22.3934 25.8125 14.9894 26.0342 14.2122C26.0513 14.1519 25.9865 14.1222 25.8994 14.1486C25.3462 14.3521 15.7557 20.4086 14.6972 21.077C14.621 21.1001 14.5405 21.105 14.4621 21.0913Z"
                  fill="#483f3b"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
