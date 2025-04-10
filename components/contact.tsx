"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react"

// --- Reusable Animation Variants ---
const containerStaggerVariants = {
  hidden: { opacity: 0 },
  visible: (delayChildren = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: delayChildren,
    },
  }),
};

const itemSlideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemSlideInLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } }, // Add stagger for children
};

const itemSlideInRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } }, // Add stagger for children
};

const iconScaleInVariant = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 200, damping: 10, delay: 0.1 } }
}

const socialIconVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 12 } }
}

// --- Contact Component ---
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
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerStaggerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemSlideUpVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#c66461] to-[#a682b0] mx-auto mb-6 origin-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: titleInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          />
          <motion.p variants={itemSlideUpVariants} className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerStaggerVariants} // Stagger left and right columns
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          custom={0.2} // Add slight delay before columns start
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact Info Column */}
          <motion.div variants={itemSlideInLeftVariants} >
            <motion.h3 
              variants={itemSlideUpVariants}
              className="text-2xl lg:text-3xl font-semibold mb-6 inline-block"
            >
               <span className="bg-gradient-to-r from-[#c66461] via-[#a682b0] to-[#eca17a] bg-clip-text text-transparent">
                 Get In Touch
               </span>
            </motion.h3>

            <motion.div variants={containerStaggerVariants} className="space-y-6">
              {[ // Array for easier mapping and staggering
                { icon: Mail, text: "needahmedwork@gmail.com", label: "Email", color: "primary", iconBg: "bg-blue-100", iconColor: "text-blue-500" },
                { icon: Phone, text: "+92 333 5394643", label: "Phone", color: "accent", iconBg: "bg-purple-100", iconColor: "text-purple-500" },
                { icon: MapPin, text: "Islamabad, Pakistan", label: "Location", color: "secondary", iconBg: "bg-green-100", iconColor: "text-green-500" },
              ].map((item, index) => (
                <motion.div key={index} variants={itemSlideUpVariants} className="flex items-center space-x-4">
                  <motion.div variants={iconScaleInVariant} className={`p-3 rounded-full ${item.iconBg}`}>
                    <item.icon className={item.iconColor} size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-100 text-sm">{item.label}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemSlideUpVariants} className="mt-10">
              <h4 className="font-medium mb-4 text-gray-800 dark:text-gray-100">Connect with me</h4>
              <motion.div variants={containerStaggerVariants} className="flex space-x-3">
                {[ // Array for easier mapping and staggering
                  { icon: Linkedin, href: "https://www.linkedin.com/in/youneedahmed/", label: "LinkedIn", color: "blue" },
                  { icon: Github, href: "https://github.com/needahmed", label: "GitHub", color: "gray" },
                  { icon: Twitter, href: "https://x.com/zedgaghost", label: "Twitter", color: "sky" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialIconVariant}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-${social.color}-100 p-3 rounded-full text-${social.color}-600 hover:bg-${social.color}-200 hover:text-${social.color}-700 transition-colors duration-200 shadow-sm dark:bg-${social.color}-900/30 dark:text-${social.color}-400 dark:hover:bg-${social.color}-900/50`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            variants={itemSlideInRightVariants}
            className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <form onSubmit={handleSubmit}>
              <motion.div variants={containerStaggerVariants} className="space-y-5">
                <motion.div variants={itemSlideUpVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary/50"
                    aria-label="Your Name"
                  />
                </motion.div>

                <motion.div variants={itemSlideUpVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary/50"
                    aria-label="Your Email"
                  />
                </motion.div>

                <motion.div variants={itemSlideUpVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="w-full bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary/50"
                    aria-label="Subject"
                  />
                </motion.div>

                <motion.div variants={itemSlideUpVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Ahmed, I'd like to discuss a project..."
                    required
                    className="w-full min-h-[120px] bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary/50"
                    aria-label="Your Message"
                  />
                </motion.div>

                <motion.div variants={itemSlideUpVariants}>
                  <motion.div // Wrap the button for animation
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#c66461] to-[#a682b0] hover:opacity-95 text-white flex items-center justify-center gap-2 rounded-lg py-3 shadow-md transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Sending...</motion.span>
                      ) : (
                        <motion.span 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          className="flex items-center gap-2"
                        >
                          Send Message 
                          <motion.div 
                            initial={{ x: 0 }} 
                            animate={{ x: [0, 3, 0] }} 
                            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                          >
                            <Send size={16} />
                          </motion.div>
                        </motion.span>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
