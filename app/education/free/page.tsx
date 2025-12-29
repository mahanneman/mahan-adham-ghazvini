"use client"

import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"

const freeCourses = [
  {
    id: 1,
    title: "مقدمات مهندسی مکانیک",
    description: "آموزش رایگان مفاهیم پایه",
    topics: ["استاتیک", "دینامیک", "مقاومت مصالح", "ترمودینامیک"],
    instructor: "مهندس ماهان ادهم قزوینی",
  },
  {
    id: 2,
    title: "آشنایی با نرم‌افزار CATIA",
    description: "مدلسازی سه‌بعدی برای مبتدیان",
    topics: ["محیط کاری", "طراحی قطعات", "اسمبلی", "نقشه‌کشی"],
    instructor: "مهندس ماهان ادهم قزوینی",
  },
  {
    id: 3,
    title: "MATLAB برای مهندسان",
    description: "برنامه‌نویسی پایه برای حل مسائل",
    topics: ["آرایه‌ها", "حلقه‌ها", "توابع", "رسم نمودار"],
    instructor: "مهندس ماهان ادهم قزوینی",
  },
]

export default function FreeEducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🎓</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-engineering-accent">آموزش‌های رایگان</h1>
            <p className="text-lg text-muted-foreground">دوره‌های آموزشی رایگان برای شروع مسیر مهندسی</p>
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
        </div>
      </main>
    </div>
  )
}
