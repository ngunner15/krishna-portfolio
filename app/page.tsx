import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ImageSection from "@/components/ImageSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Krishna Vadgama 👋',
  description: 'Welcome to the homepage of Krishna Vadgama\'s website',
}
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ImageSection />
    </main>
  )
}
