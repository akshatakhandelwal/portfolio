"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Akshata Khandelwal
          </p>
          <p className="text-sm text-muted-foreground mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
