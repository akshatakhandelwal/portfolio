"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Business Administration (BBA)",
      specialization: "HR Management",
      institution: "Jain (Deemed-to-be University)",
      period: "Jul 2024 - Jun 2027",
      status: "Currently Pursuing",
    },
    {
      degree: "Diploma in Pharmacy",
      specialization: "",
      institution: "Sanjay Ghodawat University, Maharashtra",
      period: "Oct 2021 - Mar 2023",
      status: "Completed - 81.64%",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A strong educational foundation combining business administration with pharmaceutical sciences, providing
            unique insights into both healthcare and corporate environments.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {edu.degree}
                        {edu.specialization && <span className="text-primary"> - {edu.specialization}</span>}
                      </h3>
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {edu.status}
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
