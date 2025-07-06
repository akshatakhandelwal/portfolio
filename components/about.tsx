"use client"

import { motion } from "framer-motion"
import { Users, Award, Target, Heart } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Users, label: "Candidates Sourced", value: "200+" },
    { icon: Award, label: "Months Experience", value: "6+" },
    { icon: Target, label: "Successful Placements", value: "50+" },
    { icon: Heart, label: "Client Satisfaction", value: "95%" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating positive workplace cultures and helping organizations achieve their goals through
            strategic human resource management.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              With a unique background combining pharmaceutical sciences and human resources, I bring a detail-oriented
              approach to talent acquisition. My experience spans both healthcare and corporate recruitment, giving me
              valuable insights into diverse industry needs.
            </p>

            <p className="text-lg leading-relaxed">
              I specialize in sourcing quality profiles through platforms like Naukri.com and LinkedIn, conducting
              thorough screenings, and ensuring smooth onboarding processes. My goal is to help organizations build
              teams that drive success.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Talent Sourcing & Screening</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>IT & Non-IT Recruitment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Candidate Assessment & Onboarding</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Recruitment Analytics & Reporting</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg shadow-sm border text-center group hover:shadow-md transition-shadow"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
