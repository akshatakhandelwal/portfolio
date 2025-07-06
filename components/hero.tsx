"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToContact = () => {
    if (!isClient) return

    try {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        return
      }

      const sections = document.querySelectorAll("section")
      let contactElement = null

      sections.forEach((section) => {
        if (section.id === "contact") {
          contactElement = section
        }
      })

      if (contactElement) {
        const headerHeight = 100
        const elementPosition = contactElement.offsetTop - headerHeight

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
        return
      }

      window.scrollTo({
        top: document.documentElement.scrollHeight - window.innerHeight,
        behavior: "smooth",
      })
    } catch (error) {
      console.error("Error scrolling to contact:", error)
    }
  }

  const scrollDown = () => {
    if (!isClient) return

    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Building
              <span className="text-primary block">High-Performing</span>
              Teams
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Motivated HR Recruiter with a background in pharmaceutical sciences and a passion for talent acquisition.
              Specialized in sourcing, screening, and onboarding candidates for IT and Non-IT roles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
                onClick={scrollToContact}
                type="button"
                style={{ cursor: "pointer" }}
              >
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 animate-pulse" />
              <Image
                src="/images/akshata-profile.png"
                alt="Akshata Khandelwal - HR Professional"
                width={320}
                height={320}
                className="rounded-full object-cover relative z-10 border-4 border-background shadow-2xl"
                priority
                quality={100}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollDown}
        style={{ cursor: "pointer" }}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  )
}
