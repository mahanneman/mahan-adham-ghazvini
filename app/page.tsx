"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/navigation"
import WelcomeModal from "@/components/welcome-modal"
import EngineeringBackground from "@/components/engineering-background"

const poems = [
  { text: "تواضع ز گردن‌فرازان نکوست، گدا گر تواضع کند، خوی اوست", author: "سعدی" },
  {
    text: "افتادگی آموز اگر طالب فیضی، هرگز نخورد آب، زمینی که بلند است",
    author: "مولوی",
  },
  { text: "تواضع سر رفعت افرازدت، تکبر به خاک اندر اندازدت", author: "حافظ" },
]

const randomPoem = poems[Math.floor(Math.random() * poems.length)]

export default function HomePage() {
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />
      <AnimatePresence>{showModal && <WelcomeModal onClose={() => setShowModal(false)} />}</AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <EngineeringBackground />

        <div className="absolute inset-0 opacity-10">
          <img
            src="/cybernetic-mechanical-circuit-pattern-dark-blue.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-engineering-primary text-balance">خوش آمدید</h1>
            <p className="text-2xl md:text-3xl font-normal text-engineering-accent mb-2">مهندس ماهان ادهم قزوینی</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-6xl mb-6"
          >
            🌹
          </motion.div>

          <div className="bg-muted/50 backdrop-blur-sm px-8 py-6 rounded-xl border border-engineering-primary/30 mb-8">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-3 italic">
              «آن‌که چراییِ کاری را بداند، با هر چگونه‌ای کنار می‌آید.»
            </p>
            <p className="text-sm text-muted-foreground">— فریدریش نیچه</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-engineering-accent text-background font-semibold rounded-lg hover:bg-engineering-accent/90 transition-colors"
            >
              مشاهده پروفایل
            </motion.a>
            <motion.a
              href="#analysis"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              نمونه تحلیل‌ها
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-4">
        <div className="absolute inset-0 opacity-5">
          <img src="/mechanical-gears-circuit-pattern-blueprint.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">معرفی</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            مهندس مکانیک متخصص در تحلیل اجزای محدود، طراحی پیشرفته و شبیه‌سازی سیستم‌های دینامیکی. با سال‌ها تجربه در
            پروژه‌های صنعتی و آکادمیک، آماده ارائه خدمات مهندسی با کیفیت بالا هستم.
          </p>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            اطلاعات بیشتر
          </motion.a>
        </div>
      </section>

      {/* Analysis Section */}
      <section id="analysis" className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-muted/30">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/mechanical-blueprint-technical-drawing-pattern.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-engineering-accent">تحلیل‌ها</h2>
          <div className="bg-muted/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-engineering-primary/20 mb-6">
            <p className="text-lg text-foreground italic mb-2">«آن‌که چراییِ کاری را بداند، با هر چگونه‌ای کنار می‌آید.»</p>
            <p className="text-xs text-muted-foreground">— فریدریش نیچه</p>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            تحلیل تنش، کرنش، ارتعاشات، انتقال حرارت و دینامیک سیالات با استفاده از ANSYS و نرم‌افزارهای تخصصی.
          </p>
          <motion.a
            href="/analysis"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-engineering-primary text-white font-semibold rounded-lg hover:bg-engineering-primary/90 transition-colors"
          >
            مشاهده نمونه‌کارها
          </motion.a>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative min-h-screen flex items-center justify-center py-20 px-4">
        <div className="absolute inset-0 opacity-5">
          <img src="/cybernetic-circuit-board-pattern-purple.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">آموزش</h2>
          <div className="bg-muted/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-green-700/20 mb-6">
            <p className="text-base text-foreground italic mb-2">{randomPoem.text}</p>
            <p className="text-xs text-muted-foreground">— {randomPoem.author}</p>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            دوره‌های آموزشی تخصصی ANSYS، CATIA، MATLAB و PowerMill. از مبتدی تا پیشرفته، با پروژه‌های عملی و گواهینامه
            معتبر.
          </p>
          <motion.a
            href="/education"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            مشاهده دوره‌ها
          </motion.a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-muted/30">
        <div className="absolute inset-0 opacity-5">
          <img src="/mechanical-gears-industrial-pattern.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-engineering-accent">محصولات</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            محصولات مهندسی تخصصی شامل تجهیزات الکترونیکی، مکانیکی، پرینترهای سه‌بعدی، سیستم‌های انرژی و ابزار آزمایشگاهی
            با کیفیت بالا.
          </p>
          <motion.a
            href="/products"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-engineering-primary text-white font-semibold rounded-lg hover:bg-engineering-primary/90 transition-colors"
          >
            مشاهده محصولات
          </motion.a>
        </div>
      </section>

      {/* Freelance Section */}
      <section id="freelance" className="relative min-h-screen flex items-center justify-center py-20 px-4">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/technical-blueprint-engineering-spiral-pattern.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">پروژه‌های فریلنسری</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            اجرای پروژه‌های تخصصی مهندسی مکانیک برای شرکت‌ها و افراد. تحلیل، طراحی، شبیه‌سازی و مشاوره تخصصی در کوتاه‌ترین
            زمان.
          </p>
          <motion.a
            href="/freelance"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            درخواست پروژه
          </motion.a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-muted/30">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/dark-mechanical-engineering-circuit-blueprint-patt.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-engineering-accent">تماس با ما</h2>
          <div className="bg-muted/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-engineering-primary/20 mb-6">
            <p className="text-base text-foreground italic mb-2">
              مرد آن نبود کز ستم یاد کرد، مرد آن بود کز بدی داد کرد
            </p>
            <p className="text-xs text-muted-foreground">— سعدی</p>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            برای مشاوره رایگان، سفارش پروژه یا دریافت اطلاعات بیشتر، با ما در تماس باشید.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-engineering-primary text-white font-semibold rounded-lg hover:bg-engineering-primary/90 transition-colors"
          >
            ارسال پیام
          </motion.a>
        </div>
      </section>
    </div>
  )
}
