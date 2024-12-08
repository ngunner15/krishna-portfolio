"use client"
import React from "react";
import Image from "next/image"
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes"

const skills = [
  { skill: "Paediatric Physiotherapy" },
  { skill: "Orthopedic Physiotherapy" },
  { skill: "Geriatric Physiotherapy" },
  { skill: "Heat Therapy" },
  { skill: "Electrotherapy" },
  { skill: "Interpersonal skills" },
  { skill: "Teamwork" },
  { skill: "Observational skills" },
]

const AboutSection = () => {
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const colorSkill = currentTheme === "dark" ? "#52b788" : "#9F2145"
  const colorText = currentTheme === "dark" ? "#52b788" : "#9F2145"
  
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-16">
        <h1 className="text-center font-bold text-5xl mb-8">
          About Me
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h2 className="text-center text-3xl font-bold mb-6 md:text-left">
              Get to know me!
            </h2>
            <p className="text-lg">
              Hi, my name is Krishna and I am a
              <br />
              <RoughNotation type="box" show={true} animate={true} color={colorText} strokeWidth={2}> highly ambitious</RoughNotation>,
              <RoughNotation type="box" show={true} animate={true} color={colorText} strokeWidth={2}> self-motivated</RoughNotation>, and
              <RoughNotation type="box" show={true} animate={true} color={colorText} strokeWidth={2}> driven</RoughNotation> physiotherapist
              based in Victoria, British Columbia, Canada.
            </p>
            <br />
            <p className="text-lg">
              I graduated from The Maharaja Sayajirao University of Baroda in 2017
              with a Bachelor of Physiotherapy and have been working in the
              field ever since.
            </p>
            <br />
            <p className="text-lg">
              I have a wide range of hobbies and passions that keep me busy.
              From reading, traveling, photography, to making Instagram reels,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p className="text-lg">
              I believe that you should{" "}
              <br className="md:hidden"/>
              <RoughNotation type="underline" show={true} animate={true} color={colorText} strokeWidth={2}>
                <span className="font-bold">never stop growing</span>
              </RoughNotation>
              {" "}
              and that&#39;s what I strive to do, I have a passion for
              learning and a desire to always push the limits of what is
              possible. Right now I am focused on getting my Physiotherapist license in Canada 🙂.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h2 className="text-3xl font-bold mb-6">My Skills</h2>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="px-4 py-2 mr-2 mt-2 rounded font-semibold text-wYellow dark:text-dBlack text-xl"
                  >
                    <RoughNotation type="highlight" show={true} animate={true} color={colorSkill}>
                      {item.skill}
                    </RoughNotation>
                  </p>
                )
              })}
            </div>
            <Image
              src="/about-section-image-transparent.png"
              alt="about section image"
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
