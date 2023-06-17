"use client" // this is a client component
import React from 'react'
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Images",
    page: "images",
  },
]

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  // const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-gray-800 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="md:py-5 md:block">
            <h2 className="text-2xl font-bold">Krishna Vadgama</h2>
          </div>
        </div>
        <div className="md:flex md:space-x-6 justify-center items-center">
          {NAV_ITEMS.map((item, idx) => {
            return <a key={idx}>{item.label}</a>
          })}
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar