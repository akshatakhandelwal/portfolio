"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Linkedin } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akshatakhandelwal1411@gmail.com",
      href: "mailto:akshatakhandelwal1411@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, Karnataka",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/akshata-khandelwal-020021321",
      href: "https://linkedin.com/in/akshata-khandelwal-020021321",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to find the perfect talent for your organization? Let's discuss how I can help you build
            high-performing teams through strategic recruitment and talent acquisition.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 text-center">
                I'm always interested in discussing new opportunities and how I can help your organization find the
                right talent. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-6 bg-background rounded-lg border hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
