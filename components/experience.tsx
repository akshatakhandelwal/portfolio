"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "HR Recruiter",
      company: "Rivera Manpower Services",
      location: "Bangalore, Karnataka",
      period: "Aug 2024 - Jan 2025",
      description:
        "Leading recruitment initiatives for IT and Non-IT roles, focusing on quality sourcing, candidate screening, and seamless onboarding processes.",
      achievements: [
        "Sourced quality profiles using Naukri.com and LinkedIn",
        "Created compelling job descriptions and posted on multiple platforms",
        "Conducted pre-employment assessments and coordinated interviews",
        "Maintained comprehensive recruitment reports and pipeline analysis",
        "Assisted with onboarding, orientation, and documentation processes",
      ],
    },
    {
      title: "Hospital & Retail Pharmacist Intern",
      company: "Ratna Memorial Hospital & Wellnezz Plus",
      location: "Pune, Maharashtra",
      period: "Jul 2023 - Jun 2024",
      description:
        "Gained valuable healthcare industry experience while developing strong attention to detail and customer service skills.",
      achievements: [
        "Dispensed prescribed medications and IV treatments",
        "Provided dosage and side effect guidance under supervision",
        "Monitored pharmacy inventory and ensured proper medication storage",
        "Maintained detailed records and reported adverse reactions",
        "Assisted in ward rounds and prescription reviews",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of success in building high-performing teams and creating positive workplace cultures across
            various industries.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && <div className="absolute left-6 top-16 w-0.5 h-32 bg-border" />}

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-background rounded-full" />
                </div>

                <div className="flex-1 bg-background p-6 rounded-lg border shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
