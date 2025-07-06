import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}
