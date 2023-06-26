"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules"
import { BiDownArrow } from "react-icons/bi"
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes"

const HeroSection = () => {
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const color = currentTheme === "dark" ? "#52b788" : "#600414"
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot_01.jpg"
            alt="headshot"
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Krishna!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{"  "}
            <RoughNotation type="highlight" show={true} animate={true} color={color}>
              <span className="font-semibold text-wYellow dark:text-dBlack">
                Physiotherapist
              </span>
            </RoughNotation>
            {"  "}based in Savarkundla, Gujarat, India. Working towards treating and taking care of patients that
            makes their lives easier.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <BiDownArrow size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection