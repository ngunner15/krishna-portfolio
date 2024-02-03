import React from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-full px-4 sm:px-6 border-t-2 mt-8 md:mt-12">
      <hr className="w-full h-0.5 mx-auto mt-1 border-0"></hr>
      <div className="mx-auto p-4 md:px-16 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © {currentYear} Nisarg Vadgama<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/ngunner15" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ngunner15/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
      <hr className="fixed bottom-0 left-0 w-full mx-auto mt-1 border-4 dark:border-dEmerald"></hr>
    </footer>
  )
}

export default Footer