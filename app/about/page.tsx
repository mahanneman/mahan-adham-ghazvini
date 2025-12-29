"use client"

import Navigation from "@/components/navigation"

const skills = [
  { name: "ANSYS", level: 95 },
  { name: "MATLAB", level: 90 },
  { name: "CATIA", level: 88 },
  { name: "PowerMill", level: 85 },
  { name: "انرژی‌های تجدیدپذیر", level: 80 },
  { name: "پرینت سه‌بعدی", level: 92 },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-engineering-primary">درباره من</h1>

          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              مهندس مکانیک با تخصص در تحلیل، طراحی و شبیه‌سازی سیستم‌های پیچیده مکانیکی. تجربه حرفه‌ای در استفاده از
              نرم‌افزارهای پیشرفته مهندسی و توانایی حل مسائل چالش‌برانگیز صنعتی.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              علاقه‌مند به کاربرد فناوری‌های نوین در مهندسی، از جمله شبیه‌سازی عددی، بهینه‌سازی طراحی، انرژی‌های تجدیدپذیر و
              ساخت افزودنی (پرینت سه‌بعدی). به عنوان فریلنسر، پروژه‌های متنوع صنعتی را با رویکرد دقیق و حرفه‌ای انجام
              می‌دهم.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              رویکرد من ترکیبی از دانش تئوری عمیق و تجربه عملی است. هر پروژه را با نگاه مهندسی دقیق، تحلیل جامع و ارائه
              راه‌حل‌های بهینه پیش می‌برم.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">مهارت‌ها و تخصص‌ها</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-l from-engineering-accent to-engineering-primary transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-engineering-accent">تحلیل پیشرفته</h3>
              <p className="text-muted-foreground">تحلیل المان محدود، CFD، تحلیل حرارتی و مکانیکی با ANSYS</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-engineering-accent">طراحی مکانیکی</h3>
              <p className="text-muted-foreground">مدل‌سازی سه‌بعدی، طراحی قطعات و مجموعه‌های صنعتی با CATIA</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-engineering-accent">شبیه‌سازی عددی</h3>
              <p className="text-muted-foreground">حل معادلات دیفرانسیل، بهینه‌سازی و تحلیل داده با MATLAB</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
