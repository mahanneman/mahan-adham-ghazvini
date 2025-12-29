"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Search, FileText, Calendar } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "تحلیل انتقال حرارت در مبدل‌های حرارتی پیشرفته",
    category: "heat-transfer",
    date: "۱۴۰۲/۰۸/۱۵",
    journal: "Journal of Heat Transfer",
    abstract:
      "این مطالعه به بررسی روش‌های نوین بهبود عملکرد مبدل‌های حرارتی با استفاده از نانوسیالات و هندسه‌های بهینه‌شده می‌پردازد. نتایج نشان می‌دهد که استفاده از نانوذرات اکسید آلومینیوم می‌تواند ضریب انتقال حرارت را تا ۳۵٪ افزایش دهد.",
  },
  {
    id: 2,
    title: "تحلیل تنش خستگی در شفت‌های چرخشی تحت بارگذاری چرخه‌ای",
    category: "fatigue",
    date: "۱۴۰۲/۰۶/۲۳",
    journal: "International Journal of Fatigue",
    abstract:
      "پژوهش حاضر به مطالعه رفتار خستگی شفت‌های چرخشی فولادی تحت بارگذاری‌های چرخه‌ای متغیر پرداخته است. با استفاده از روش اجزای محدود و آزمایش‌های تجربی، عمر خستگی قطعات پیش‌بینی شده و با نتایج واقعی مقایسه گردید.",
  },
  {
    id: 3,
    title: "شبیه‌سازی جریان سیال در کانال‌های میکرو با استفاده از CFD",
    category: "fluid-dynamics",
    date: "۱۴۰۲/۰۴/۱۰",
    journal: "Physics of Fluids",
    abstract:
      "این تحقیق به تحلیل عددی جریان سیال در میکروکانال‌ها با هندسه‌های مختلف می‌پردازد. نتایج نشان می‌دهد که استفاده از سطوح زبر کنترل‌شده می‌تواند عملکرد انتقال حرارت را بهبود بخشیده و افت فشار را کاهش دهد.",
  },
]

const categories = [
  { id: "all", label: "همه موضوعات" },
  { id: "heat-transfer", label: "انتقال حرارت" },
  { id: "fatigue", label: "تنش خستگی" },
  { id: "fluid-dynamics", label: "دینامیک سیالات" },
]

export default function ISIArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null)

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-engineering-primary">مقالات ISI</h1>
            <p className="text-lg text-muted-foreground">مجموعه مقالات تخصصی مهندسی مکانیک منتشر شده در مجلات معتبر</p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="جستجوی مقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-engineering-primary"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-engineering-accent text-background"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6">
            {filteredArticles.map((article) => (
              <Card
                key={article.id}
                className="p-6 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-engineering-primary/10 rounded-lg">
                    <FileText className="w-6 h-6 text-engineering-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-engineering-primary">{article.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="text-engineering-accent font-semibold">{article.journal}</span>
                    </div>
                    {expandedArticle === article.id && (
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold mb-2">چکیده:</h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">{article.abstract}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">مقاله‌ای یافت نشد.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
