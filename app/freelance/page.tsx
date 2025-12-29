import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "بهینه‌سازی سیستم تهویه صنعتی",
    client: "کارخانه تولیدی",
    challenge: "کاهش مصرف انرژی و بهبود گردش هوا",
    tools: ["ANSYS Fluent", "CFD"],
    outcome: "کاهش ۳۵٪ مصرف انرژی و افزایش راندمان",
    image: "/industrial-ventilation-system.jpg",
  },
  {
    id: 2,
    title: "طراحی قالب تزریق پلاستیک",
    client: "شرکت قطعه‌سازی",
    challenge: "کاهش زمان چرخه و بهبود کیفیت",
    tools: ["CATIA", "Moldflow"],
    outcome: "کاهش ۲۰٪ زمان تولید و حذف نقص‌ها",
    image: "/injection-mold-design.jpg",
  },
  {
    id: 3,
    title: "تحلیل خستگی قطعه خودرو",
    client: "شرکت قطعه‌ساز خودرو",
    challenge: "تعیین عمر مفید و بهینه‌سازی وزن",
    tools: ["ANSYS Mechanical", "nCode"],
    outcome: "افزایش عمر ۵۰٪ و کاهش ۱۵٪ وزن",
    image: "/automotive-component-fatigue-analysis.jpg",
  },
  {
    id: 4,
    title: "شبیه‌سازی فرآیند ماشینکاری",
    client: "کارگاه CNC",
    challenge: "کاهش زمان و هزینه تولید",
    tools: ["PowerMill", "Vericut"],
    outcome: "کاهش ۴۰٪ زمان ماشینکاری",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function FreelancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-engineering-primary">پروژه‌های فریلنسری</h1>
          <p className="text-lg text-muted-foreground mb-12">نمونه‌هایی از پروژه‌های موفق با رویکرد حل مسئله مهندسی</p>

          <div className="space-y-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-engineering-primary">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">مشتری: {project.client}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">چالش:</h4>
                        <p className="text-muted-foreground">{project.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-1">ابزارها:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span key={tool} className="px-3 py-1 bg-muted text-sm rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-1">نتیجه:</h4>
                        <p className="text-engineering-accent font-semibold">{project.outcome}</p>
                      </div>
                    </div>
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
