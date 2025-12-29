"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "ماژول کنترل موتور DC",
    category: "electronic",
    price: "۱۲۰,۰۰۰",
    description: "کنترلر PWM با قابلیت تنظیم دقیق سرعت",
    image: "/dc-motor-controller-module.jpg",
    intro:
      "این ماژول کنترلی با تکنولوژی PWM پیشرفته طراحی شده و قادر به کنترل دقیق سرعت موتورهای DC با جریان تا ۱۰ آمپر است.",
  },
  {
    id: 2,
    name: "گیربکس دقیق صنعتی",
    category: "mechanical",
    price: "۲,۵۰۰,۰۰۰",
    description: "نسبت انتقال ۱:۱۰۰ با دقت بالا",
    image: "/industrial-precision-gearbox.jpg",
    intro: "گیربکس صنعتی با ساخت تمام فولادی و دقت بالا، مناسب برای کاربردهای صنعتی سنگین و ربات‌های صنعتی.",
  },
  {
    id: 3,
    name: "پرینتر سه‌بعدی FDM",
    category: "3d-printer",
    price: "۱۵,۰۰۰,۰۰۰",
    description: "حجم کار ۳۰×۳۰×۴۰ سانتی‌متر",
    image: "/fdm-3d-printer.jpg",
    intro:
      "پرینتر سه‌بعدی حرفه‌ای با دقت لایه ۰.۰۵ میلی‌متر، صفحه گرم خودکار و قابلیت چاپ با مواد مختلف مانند PLA، ABS و PETG.",
  },
  {
    id: 4,
    name: "پنل خورشیدی ۱۰۰ وات",
    category: "energy",
    price: "۱,۸۰۰,۰۰۰",
    description: "بازدهی ۲۱٪ - مونوکریستال",
    image: "/100w-solar-panel-monocrystalline.jpg",
    intro: "پنل خورشیدی با تکنولوژی مونوکریستال و بازدهی بالا، مقاوم در برابر شرایط جوی سخت با گارانتی ۲۵ ساله.",
  },
  {
    id: 5,
    name: "سنسور فشار دیجیتال",
    category: "lab-tools",
    price: "۳۵۰,۰۰۰",
    description: "دقت ±۰.۱٪ - خروجی آنالوگ و دیجیتال",
    image: "/digital-pressure-sensor.jpg",
    intro: "سنسور فشار با دقت بالا و کالیبراسیون دقیق، دارای خروجی دیجیتال I2C و آنالوگ ۴-۲۰ میلی‌آمپر.",
  },
  {
    id: 6,
    name: "قطعات پرینت سه‌بعدی سفارشی",
    category: "3d-printer",
    price: "متغیر",
    description: "تولید قطعات با دقت بالا و مواد متنوع",
    image: "/custom-3d-printed-parts.jpg",
    intro: "سرویس تولید قطعات سفارشی با پرینترهای سه‌بعدی صنعتی، از طراحی تا تولید نهایی با مواد مهندسی.",
  },
]

const categories = [
  { id: "all", label: "همه محصولات" },
  { id: "electronic", label: "الکترونیکی" },
  { id: "mechanical", label: "مکانیکی" },
  { id: "3d-printer", label: "پرینتر سه‌بعدی" },
  { id: "energy", label: "سیستم‌های انرژی" },
  { id: "lab-tools", label: "ابزار آزمایشگاهی" },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-engineering-primary">🌹 محصولات</h1>
          <p className="text-lg text-muted-foreground mb-8">ابزار و تجهیزات مهندسی با کیفیت بالا ⭐</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-emerald-700 text-white"
                    : "bg-muted text-foreground hover:bg-emerald-900/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-shadow bg-gradient-to-br from-slate-900/50 to-slate-800/50"
              >
                <img
                  src={product.image || "/placeholder.svg?height=300&width=400"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-emerald-400 font-semibold mb-2">
                    {categories.find((c) => c.id === product.category)?.label}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="space-y-3">
                    <Link
                      href={`/products/${product.id}`}
                      className="block w-full px-4 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      مشاهده محصول 💎
                    </Link>
                    <Link
                      href={`/products/${product.id}#order`}
                      className="block w-full px-4 py-3 bg-emerald-700 text-white text-center rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
                    >
                      سفارش محصول 🌹
                    </Link>
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
