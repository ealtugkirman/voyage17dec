'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
}

function CtaFooter() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
        >
          {/* Left Column */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold">
                Have an idea?
                <br />
                Let's build it.
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white hover:text-black transition-colors"
              >
                Start your project
              </Button>
              <p className="text-lg">
                <a href="mailto:contact@digitalvoyage.agency" className="hover:text-gray-300 transition-colors">
                  contact@digitalvoyage.agency
                </a>
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <nav className="flex gap-6">
                <Link href="https://twitter.com/digitalvoyageag" className="hover:text-gray-300 transition-colors">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://instagram.com/digitalvoyage.agency" className="hover:text-gray-300 transition-colors">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://youtube.com/@digitalvoyageagency" className="hover:text-gray-300 transition-colors">
                  <Youtube className="w-6 h-6" />
                  <span className="sr-only">Youtube</span>
                </Link>
                <Link href="https://linkedin.com/company/digitalvoyage-agency" className="hover:text-gray-300 transition-colors">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </nav>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={containerVariants} className="space-y-12">
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="font-semibold">Turkey</h3>
                <p className="text-gray-400">
                  Maslak, Büyükdere Cd. No:255
                  <br />
                  Nurol Plaza B02, Sarıyer/İstanbul
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">United States</h3>
                <p className="text-gray-400">
                  2035 Sunset Lake Road, Suite B-2
                  <br />
                  Newark, Delaware 19702
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Certifications/Awards */}
                <div className="relative aspect-square">
                  <Image
                    src="/awards/aws-certified.png"
                    alt="AWS Certified"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/awards/google-partner.png"
                    alt="Google Partner"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/awards/microsoft-partner.png"
                    alt="Microsoft Partner"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/awards/clutch-badge.png"
                    alt="Clutch Badge"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg">
                <div className="relative w-8 h-8">
                  <Image
                    src="/awards/clutch-logo.png"
                    alt="Clutch Rating"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold">4.9</span>
                  <span className="text-sm text-gray-400">
                    Client satisfaction rate
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaFooter;