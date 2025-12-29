import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"

const analyses = [
  {
    id: 1,
    title: "تحلیل تنش در قطعه تحت فشار",
    software: "ANSYS Mechanical",
    type: "تحلیل المان محدود (FEA)",
    goal: "بررسی توزیع تنش و تعیین ضریب اطمینان",
    result: "ضریب اطمینان ۲.۵ - طراحی ایمن",
    image: "/ansys-stress-analysis-mechanical-part.jpg",
  },
  {
    id: 2,
    title: "شبیه‌سازی جریان سیال در لوله",
    software: "ANSYS Fluent",
    type: "دینامیک سیالات محاسباتی (CFD)",
    goal: "تحلیل افت فشار و الگوی جریان",
    result: "افت فشار ۱۵ کیلوپاسکال - قابل قبول",
    image: "/cfd-fluid-flow-simulation-pipe.jpg",
  },
  {
    id: 3,
    title: "تحلیل حرارتی رادیاتور",
    software: "ANSYS Thermal",
    type: "تحلیل انتقال حرارت",
    goal: "بهینه‌سازی خنک‌کاری",
    result: "کاهش ۲۰٪ دمای ماکزیمم",
    image: "/thermal-analysis-radiator-heat-transfer.jpg",
  },
  {
    id: 4,
    title: "شبیه‌سازی سینماتیک مکانیزم",
    software: "MATLAB",
    type: "تحلیل حرکت شناسی",
    goal: "بررسی حرکت و مسیر نقاط",
    result: "مسیر بهینه با دقت بالا",
    image: "/mechanism-kinematics-simulation.jpg",
  },
  {
    id: 5,
    title: "طراحی مسیر ماشینکاری CNC",
    software: "PowerMill",
    type: "برنامه‌نویسی CNC",
    goal: "تولید قطعه با دقت میکرون",
    result: "کاهش ۳۰٪ زمان ماشینکاری",
    image: "/cnc-toolpath-machining-powermill.jpg",
  },
  {
    id: 6,
    title: "مدل‌سازی پره توربین",
    software: "CATIA",
    type: "طراحی پیشرفته سه‌بعدی",
    goal: "طراحی هندسه بهینه پره",
    result: "افزایش ۱۲٪ بازده",
    image: "/turbine-blade-3d-cad-design.jpg",
  },
]

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-engineering-primary">نمونه تحلیل‌ها</h1>
          <p className="text-lg text-muted-foreground mb-12">
            پروژه‌های تحلیلی و شبیه‌سازی با نرم‌افزارهای مهندسی پیشرفته
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyses.map((analysis) => (
              <Card key={analysis.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={analysis.image || "/placeholder.svg"}
                  alt={analysis.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-engineering-accent font-semibold mb-2">{analysis.software}</div>
                  <h3 className="text-xl font-bold mb-2">{analysis.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">نوع تحلیل:</span> {analysis.type}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">هدف:</span> {analysis.goal}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">نتیجه:</span> {analysis.result}
                    </p>
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
