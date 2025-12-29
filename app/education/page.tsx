"use client"

import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const freeCourses = [
  {
    id: 1,
    title: "مقدمات مهندسی مکانیک",
    description: "آموزش رایگان مفاهیم پایه",
    topics: ["استاتیک", "دینامیک", "مقاومت مصالح", "ترمودینامیک"],
    instructor: "مهندس ماهان اده مقزوینی",
  },
  {
    id: 2,
    title: "آشنایی با نرم‌افزار CATIA",
    description: "مدلسازی سه‌بعدی برای مبتدیان",
    topics: ["محیط کاری", "طراحی قطعات", "اسمبلی", "نقشه‌کشی"],
    instructor: "مهندس ماهان اده مقزوینی",
  },
  {
    id: 3,
    title: "MATLAB برای مهندسان",
    description: "برنامه‌نویسی پایه برای حل مسائل",
    topics: ["آرایه‌ها", "حلقه‌ها", "توابع", "رسم نمودار"],
    instructor: "مهندس ماهان اده مقزوینی",
  },
]

const paidCourses = [
  {
    id: 4,
    title: "تحلیل المان محدود پیشرفته",
    description: "ANSYS Workbench - از مبتدی تا پیشرفته",
    topics: ["مش‌بندی پیشرفته", "تحلیل غیرخطی", "بهینه‌سازی", "تحلیل خستگی"],
    price: "۲,۵۰۰,۰۰۰ تومان",
  },
  {
    id: 5,
    title: "شبیه‌سازی CFD صنعتی",
    description: "تحلیل جریان سیال و انتقال حرارت",
    topics: ["مدل‌های آشفتگی", "چندفازی", "احتراق", "پست‌پروسسینگ"],
    price: "۳,۰۰۰,۰۰۰ تومان",
  },
  {
    id: 6,
    title: "ماشینکاری CNC و PowerMill",
    description: "برنامه‌نویسی و شبیه‌سازی ماشینکاری",
    topics: ["استراتژی‌های ماشینکاری", "بهینه‌سازی مسیر", "شبیه‌سازی", "پست‌پروسسور"],
    price: "۲,۰۰۰,۰۰۰ تومان",
  },
]

function MathVisualizations() {
  const heartRef = useRef<HTMLCanvasElement>(null)
  const butterflyRef = useRef<HTMLCanvasElement>(null)
  const roseRef = useRef<HTMLCanvasElement>(null)
  const spiralRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Heart Curve
    const heartCanvas = heartRef.current
    if (heartCanvas) {
      const ctx = heartCanvas.getContext("2d")
      if (ctx) {
        const width = heartCanvas.width
        const height = heartCanvas.height
        const centerX = width / 2
        const centerY = height / 2
        const scale = 12

        ctx.clearRect(0, 0, width, height)
        drawGrid(ctx, width, height)

        ctx.strokeStyle = "rgb(239, 68, 68)"
        ctx.lineWidth = 3
        ctx.beginPath()

        for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
          const x = 16 * Math.pow(Math.sin(t), 3)
          const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
          const screenX = centerX + x * scale
          const screenY = centerY - y * scale
          if (t === 0) ctx.moveTo(screenX, screenY)
          else ctx.lineTo(screenX, screenY)
        }
        ctx.stroke()
      }
    }

    // Butterfly Curve
    const butterflyCanvas = butterflyRef.current
    if (butterflyCanvas) {
      const ctx = butterflyCanvas.getContext("2d")
      if (ctx) {
        const width = butterflyCanvas.width
        const height = butterflyCanvas.height
        const centerX = width / 2
        const centerY = height / 2
        const scale = 50

        ctx.clearRect(0, 0, width, height)
        drawGrid(ctx, width, height)

        const gradient = ctx.createLinearGradient(0, 0, width, height)
        gradient.addColorStop(0, "rgb(168, 85, 247)")
        gradient.addColorStop(1, "rgb(236, 72, 153)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 3
        ctx.beginPath()

        for (let t = 0; t <= 12 * Math.PI; t += 0.01) {
          const r = Math.exp(Math.cos(t)) - 2 * Math.cos(4 * t) + Math.pow(Math.sin(t / 12), 5)
          const x = r * Math.cos(t)
          const y = r * Math.sin(t)
          const screenX = centerX + x * scale
          const screenY = centerY - y * scale
          if (t === 0) ctx.moveTo(screenX, screenY)
          else ctx.lineTo(screenX, screenY)
        }
        ctx.stroke()
      }
    }

    // Rose Curve
    const roseCanvas = roseRef.current
    if (roseCanvas) {
      const ctx = roseCanvas.getContext("2d")
      if (ctx) {
        const width = roseCanvas.width
        const height = roseCanvas.height
        const centerX = width / 2
        const centerY = height / 2
        const scale = 80

        ctx.clearRect(0, 0, width, height)
        drawGrid(ctx, width, height)

        ctx.strokeStyle = "rgb(244, 63, 94)"
        ctx.lineWidth = 3
        ctx.beginPath()

        for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
          const r = Math.cos(5 * t)
          const x = r * Math.cos(t)
          const y = r * Math.sin(t)
          const screenX = centerX + x * scale
          const screenY = centerY - y * scale
          if (t === 0) ctx.moveTo(screenX, screenY)
          else ctx.lineTo(screenX, screenY)
        }
        ctx.stroke()
      }
    }

    // Spiral of Archimedes
    const spiralCanvas = spiralRef.current
    if (spiralCanvas) {
      const ctx = spiralCanvas.getContext("2d")
      if (ctx) {
        const width = spiralCanvas.width
        const height = spiralCanvas.height
        const centerX = width / 2
        const centerY = height / 2
        const scale = 8

        ctx.clearRect(0, 0, width, height)
        drawGrid(ctx, width, height)

        const gradient = ctx.createLinearGradient(0, 0, width, height)
        gradient.addColorStop(0, "rgb(59, 130, 246)")
        gradient.addColorStop(1, "rgb(34, 211, 238)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 3
        ctx.beginPath()

        for (let t = 0; t <= 10 * Math.PI; t += 0.05) {
          const r = t
          const x = r * Math.cos(t)
          const y = r * Math.sin(t)
          const screenX = centerX + x * scale
          const screenY = centerY - y * scale
          if (t === 0) ctx.moveTo(screenX, screenY)
          else ctx.lineTo(screenX, screenY)
        }
        ctx.stroke()
      }
    }
  }, [])

  function drawGrid(ctx: CanvasRenderingContext2D, width: number, height: number) {
    ctx.strokeStyle = "rgba(59, 130, 246, 0.1)"
    ctx.lineWidth = 1
    for (let i = 0; i < width; i += 20) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, height)
      ctx.stroke()
    }
    for (let i = 0; i < height; i += 20) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(width, i)
      ctx.stroke()
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="relative">
          <div className="absolute inset-0 opacity-5">
            <img src="/mechanical-blueprint-technical-drawing-pattern.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="relative">
            <h3 className="text-2xl font-bold mb-2 text-center text-red-500">منحنی قلب 🌹</h3>
            <canvas ref={heartRef} width={400} height={400} className="w-full max-w-md mx-auto" />
            <div className="bg-muted p-4 rounded-lg font-mono text-sm mt-4">
              <p>{"x(t) = 16·sin³(t)"}</p>
              <p>{"y(t) = 13·cos(t) - 5·cos(2t) - 2·cos(3t) - cos(4t)"}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="relative">
          <div className="absolute inset-0 opacity-5">
            <img src="/cybernetic-circuit-board-pattern-purple.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="relative">
            <h3 className="text-2xl font-bold mb-2 text-center text-purple-500">منحنی پروانه 🦋</h3>
            <canvas ref={butterflyRef} width={400} height={400} className="w-full max-w-md mx-auto" />
            <div className="bg-muted p-4 rounded-lg font-mono text-sm mt-4">
              <p>{"r(t) = e^cos(t) - 2cos(4t) + sin^5(t/12)"}</p>
              <p>{"x = r·cos(t), y = r·sin(t)"}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="relative">
          <div className="absolute inset-0 opacity-5">
            <img src="/mechanical-gears-industrial-pattern.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="relative">
            <h3 className="text-2xl font-bold mb-2 text-center text-rose-500">گل ریاضی 🌹</h3>
            <canvas ref={roseRef} width={400} height={400} className="w-full max-w-md mx-auto" />
            <div className="bg-muted p-4 rounded-lg font-mono text-sm mt-4">
              <p>{"r(t) = cos(5t)"}</p>
              <p>{"x = r·cos(t), y = r·sin(t)"}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="relative">
          <div className="absolute inset-0 opacity-5">
            <img src="/technical-blueprint-engineering-spiral-pattern.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="relative">
            <h3 className="text-2xl font-bold mb-2 text-center text-cyan-500">مارپیچ ارشمیدس 🌀</h3>
            <canvas ref={spiralRef} width={400} height={400} className="w-full max-w-md mx-auto" />
            <div className="bg-muted p-4 rounded-lg font-mono text-sm mt-4">
              <p>{"r(t) = t"}</p>
              <p>{"x = t·cos(t), y = t·sin(t)"}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />

      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <img src="/dark-mechanical-engineering-circuit-blueprint-patt.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <main className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🌹</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-engineering-primary">آموزش‌های تخصصی</h1>
            <p className="text-lg text-muted-foreground">دوره‌های جامع مهندسی مکانیک و نرم‌افزارهای تخصصی</p>
          </div>

          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-engineering-accent">دوره‌های رایگان</h2>
              <span className="text-2xl">🎓</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {freeCourses.map((course) => (
                <Card key={course.id} className="p-6 hover:shadow-xl transition-shadow relative overflow-hidden">
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                    رایگان
                  </div>
                  <div className="absolute inset-0 opacity-5">
                    <img src="/mechanical-engineering-tools-pattern.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-2 text-engineering-accent">{course.title}</h3>
                    <p className="text-muted-foreground mb-3">{course.description}</p>
                    <p className="text-sm font-semibold mb-2">مدرس: {course.instructor}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold">سرفصل‌ها:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {course.topics.map((topic) => (
                          <li key={topic} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-engineering-accent" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-engineering-primary">دوره‌های حرفه‌ای</h2>
              <span className="text-2xl">💎</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {paidCourses.map((course) => (
                <Card
                  key={course.id}
                  className="p-6 hover:shadow-xl transition-shadow relative overflow-hidden border-2 border-engineering-accent/30"
                >
                  <div className="absolute inset-0 opacity-5">
                    <img src="/advanced-mechanical-analysis-simulation-pattern.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-2 text-engineering-primary">{course.title}</h3>
                    <p className="text-muted-foreground mb-3">{course.description}</p>
                    <p className="text-lg font-bold text-engineering-accent mb-3">{course.price}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold">سرفصل‌ها:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {course.topics.map((topic) => (
                          <li key={topic} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-engineering-primary" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>

          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-engineering-primary mb-2">تجسم ریاضیات مهندسی</h2>
              <p className="text-muted-foreground">منحنی‌های زیبا و الهام‌بخش در ریاضیات</p>
            </div>
            <MathVisualizations />
          </div>
        </div>
      </main>
    </div>
  )
}
