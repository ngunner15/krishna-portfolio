"use client"
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'
import { Philosopher, Happy_Monkey } from '@next/font/google'

const philosopher = Philosopher({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-philosopher',
})

const happyMonkey = Happy_Monkey({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-monkey',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${philosopher.variable} ${happyMonkey.variable} scrollbar scrollbar-track-wBlack scrollbar-thumb-wRed hover:scrollbar-thumb-wHoverRed dark:scrollbar-track-dEmerald dark:scrollbar-thumb-dBlack dark:hover:scrollbar-thumb-dHoverBlack scrollbar-thumb-rounded-lg bg-wYellow text-wBlack border-wBlack dark:text-dGreen dark:bg-dBlack`}>
        <div className="top-0 right-0 left-0 bottom-0 fixed border-solid border-4 dark:border-dEmerald"></div>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
