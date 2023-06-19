"use client"
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from 'next-themes'
import { Philosopher } from '@next/font/google'

const philosopher = Philosopher({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-philosopher',
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
      <body className={`${philosopher.variable} border-solid border-4 dark:bg-dBlack dark:border-dEmerald dark:text-dGreen`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
