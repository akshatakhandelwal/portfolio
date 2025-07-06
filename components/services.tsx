"use client"

import { motion } from "framer-motion"
import { Search, Users, TrendingUp, Shield, BookOpen, MessageSquare } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Talent Sourcing",
      description: "Expert sourcing of quality profiles using platforms like Naukri.com, LinkedIn, and job boards.",
    },
    {
      icon: Users,
      title: "Candidate Screening",
      description: "Thorough screening and shortlisting of candidates based on specific job requirements.",
    },
    {
      icon: TrendingUp,
      title: "Pre-Employment Assessment",
      description: "Conducting comprehensive assessments and coordinating interview processes.",
    },
    {
      icon: Shield,
      title: "Documentation & Compliance",
      description: "Ensuring proper documentation and compliance throughout the recruitment process.",
    },
    {
      icon: BookOpen,
      title: "Onboarding Support",
      description: "Assisting with smooth onboarding, orientation, and new hire integration.",
    },
    {
      icon: MessageSquare,
      title: "Recruitment Analytics",
      description: "Maintaining detailed recruitment reports and analyzing candidate pipelines.",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive HR solutions tailored to meet your organization's unique needs and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-background rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
