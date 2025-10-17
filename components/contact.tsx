"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageSquare } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "needahmedwork@gmail.com",
      href: "mailto:needahmedwork@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 333 5394643",
      href: "tel:+923335394643",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: null,
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/needahmed", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/youneedahmed/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/zedgaghost", label: "Twitter" },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-6 h-6 text-cyan-400" />
            <span className="font-mono text-cyan-400 text-sm">Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="gradient-text">Contact Me</span>
          </h2>

          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 100 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400"
            />
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open
            to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold font-mono gradient-text mb-6">
                Let's Connect
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                      <info.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-mono mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors font-mono"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 font-mono">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4 font-mono">Follow me on:</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-lg glass-card hover:bg-cyan-500/10 transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-cyan-400" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-cyan-400">Name</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-white/5 border-white/10 text-gray-100 placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-cyan-400">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="bg-white/5 border-white/10 text-gray-100 placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-cyan-400">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Discussion"
                  className="bg-white/5 border-white/10 text-gray-100 placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-cyan-400">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-white/5 border-white/10 text-gray-100 placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 font-mono resize-none"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-cyber font-mono text-sm py-6 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
