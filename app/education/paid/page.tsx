"use client"

import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
import Link from "next/link"

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

export default function PaidEducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">💎</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-engineering-primary">آموزش‌های حرفه‌ای</h1>
            <p className="text-lg text-muted-foreground">دوره‌های تخصصی پیشرفته با گواهینامه معتبر</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {paidCourses.map((course) => (
              <Card
                key={course.id}
                className="p-6 hover:shadow-xl transition-shadow relative overflow-hidden border-2 border-engineering-accent/30"
              >
                <div className="absolute inset-0 opacity-5">
                  <img
                    src="/advanced-mechanical-analysis-simulation-pattern.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold text-engineering-primary">{course.title}</h3>
                  <p className="text-muted-foreground">{course.description}</p>
                  <p className="text-lg font-bold text-engineering-accent line-through decoration-2">{course.price}</p>
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
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 bg-green-700 text-white text-center rounded-lg hover:bg-green-600 transition-colors font-semibold mt-4"
                  >
                    سفارش
                  </Link>
                  <p className="text-sm text-center text-muted-foreground">لطفاً تماس بگیرید</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
