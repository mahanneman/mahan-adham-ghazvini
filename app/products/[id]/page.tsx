"use client"

import type React from "react"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "ماژول کنترل موتور DC",
    category: "الکترونیکی",
    price: "۱۲۰,۰۰۰",
    description: "کنترلر PWM با قابلیت تنظیم دقیق سرعت",
    image: "/dc-motor-controller-module.jpg",
    intro:
      "این ماژول کنترلی با تکنولوژی PWM پیشرفته طراحی شده و قادر به کنترل دقیق سرعت موتورهای DC با جریان تا ۱۰ آمپر است. دارای حفاظت در برابر اتصال کوتاه و اضافه جریان.",
    specs: ["ولتاژ ورودی: ۱۲-۲۴ ولت", "جریان خروجی: تا ۱۰ آمپر", "فرکانس PWM: ۲۰ کیلوهرتز", "حفاظت حرارتی داخلی"],
  },
  {
    id: 2,
    name: "گیربکس دقیق صنعتی",
    category: "مکانیکی",
    price: "۲,۵۰۰,۰۰۰",
    description: "نسبت انتقال ۱:۱۰۰ با دقت بالا",
    image: "/industrial-precision-gearbox.jpg",
    intro:
      "گیربکس صنعتی با ساخت تمام فولادی و دقت بالا، مناسب برای کاربردهای صنعتی سنگین و ربات‌های صنعتی. با بلبرینگ‌های صنعتی و روانکاری اولیه.",
    specs: ["نسبت انتقال: ۱:۱۰۰", "گشتاور خروجی: ۵۰۰ N.m", "بازدهی: ۹۵٪", "عمر مفید: ۵۰۰۰۰ ساعت"],
  },
  {
    id: 3,
    name: "پرینتر سه‌بعدی FDM",
    category: "پرینتر سه‌بعدی",
    price: "۱۵,۰۰۰,۰۰۰",
    description: "حجم کار ۳۰×۳۰×۴۰ سانتی‌متر",
    image: "/fdm-3d-printer.jpg",
    intro:
      "پرینتر سه‌بعدی حرفه‌ای با دقت لایه ۰.۰۵ میلی‌متر، صفحه گرم خودکار و قابلیت چاپ با مواد مختلف مانند PLA، ABS و PETG. دارای نمایشگر لمسی رنگی و قابلیت اتصال WiFi.",
    specs: [
      "حجم چاپ: ۳۰×۳۰×۴۰ سانتی‌متر",
      "دقت لایه: ۰.۰۵-۰.۳ میلی‌متر",
      "سرعت چاپ: تا ۱۵۰ میلی‌متر/ثانیه",
      "نازل: ۰.۴ میلی‌متر (تعویض‌پذیر)",
    ],
  },
  {
    id: 4,
    name: "پنل خورشیدی ۱۰۰ وات",
    category: "سیستم‌های انرژی",
    price: "۱,۸۰۰,۰۰۰",
    description: "بازدهی ۲۱٪ - مونوکریستال",
    image: "/100w-solar-panel-monocrystalline.jpg",
    intro:
      "پنل خورشیدی با تکنولوژی مونوکریستال و بازدهی بالا، مقاوم در برابر شرایط جوی سخت با گارانتی ۲۵ ساله. قاب آلومینیومی ضد زنگ و شیشه تمپر شده.",
    specs: ["توان: ۱۰۰ وات", "بازدهی: ۲۱٪", "ولتاژ مداری باز: ۲۱.۶ ولت", "جریان اتصال کوتاه: ۶.۲ آمپر"],
  },
  {
    id: 5,
    name: "سنسور فشار دیجیتال",
    category: "ابزار آزمایشگاهی",
    price: "۳۵۰,۰۰۰",
    description: "دقت ±۰.۱٪ - خروجی آنالوگ و دیجیتال",
    image: "/digital-pressure-sensor.jpg",
    intro:
      "سنسور فشار با دقت بالا و کالیبراسیون دقیق، دارای خروجی دیجیتال I2C و آنالوگ ۴-۲۰ میلی‌آمپر. مناسب برای اندازه‌گیری فشار در سیستم‌های هیدرولیک و پنوماتیک.",
    specs: ["محدوده اندازه‌گیری: ۰-۱۰ بار", "دقت: ±۰.۱٪", "خروجی: I2C و ۴-۲۰mA", "دمای کاری: -۴۰ تا +۸۵ درجه"],
  },
  {
    id: 6,
    name: "قطعات پرینت سه‌بعدی سفارشی",
    category: "پرینتر سه‌بعدی",
    price: "متغیر",
    description: "تولید قطعات با دقت بالا و مواد متنوع",
    image: "/custom-3d-printed-parts.jpg",
    intro:
      "سرویس تولید قطعات سفارشی با پرینترهای سه‌بعدی صنعتی، از طراحی تا تولید نهایی با مواد مهندسی. شامل مشاوره رایگان طراحی و بهینه‌سازی برای چاپ.",
    specs: [
      "مواد: PLA، ABS، PETG، Nylon، TPU",
      "دقت: تا ۰.۰۵ میلی‌متر",
      "حداکثر ابعاد: ۴۰×۴۰×۵۰ سانتی‌متر",
      "زمان تحویل: ۳-۷ روز کاری",
    ],
  },
]
export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = Number(params.id)
  const product = products.find((p) => p.id === productId)

  const [offerData, setOfferData] = useState({
    fullName: "",
    phone: "",
    quantity: 1, // ← تعداد
    price: "",
    address: "", // ← آدرس
  })

  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">محصول یافت نشد</h1>
          <Link href="/products" className="text-engineering-accent hover:underline">
            بازگشت به محصولات
          </Link>
        </div>
      </div>
    )
  }

  const handleOfferSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus("sending")

    const now = new Date()
    const formattedDate = now.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    const submissionData = {
      productName: product.name,
      productId: product.id,
      fullName: offerData.fullName,
      phone: offerData.phone,
      quantity: offerData.quantity, // ← اضافه شد
      offerPrice: offerData.price,
      address: offerData.address, // ← اضافه شد
      submittedAt: formattedDate,
    }

    try {
      const response = await fetch("https://formspree.io/f/xwvkweqa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        alert("پیشنهاد قیمت شما با موفقیت ثبت شد! 🌹")
        setOfferData({ fullName: "", phone: "", price: "", address: "", quantity: 1 }) // ← ریست کامل
        setTimeout(() => setSubmitStatus("idle"), 3000)
      } else {
        setSubmitStatus("error")
        alert("خطا در ارسال. لطفاً دوباره تلاش کنید.")
      }
    } catch (error) {
      setSubmitStatus("error")
      alert("خطا در ارسال. لطفاً دوباره تلاش کنید.")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-engineering-accent hover:underline mb-6"
          >
            <ArrowRight className="w-4 h-4" />
            بازگشت به محصولات
          </Link>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* تصویر محصول */}
            <div>
              <img
                src={product.image || "/placeholder.svg?height=500&width=500"}
                alt={product.name}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>

            {/* اطلاعات محصول */}
            <div>
              <div className="text-sm text-emerald-400 font-semibold mb-2">{product.category} 🌹</div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

              <Card className="p-6 mb-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
                <h2 className="text-xl font-bold mb-3">معرفی محصول ⭐</h2>
                <p className="text-muted-foreground leading-relaxed">{product.intro}</p>
              </Card>

              <Card className="p-6 mb-6 bg-gradient-to-br from-emerald-900/20 to-green-900/20 border-2 border-emerald-600">
                <h3 className="text-lg font-semibold mb-2">آخرین قیمت 💎</h3>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-red-500 line-through decoration-2">{product.price}</span>
                  <span className="text-lg">تومان</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">قیمت نهایی پس از تماس اعلام می‌شود</p>
              </Card>

              {/* مشخصات */}
              {product.specs && (
                <Card className="p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">مشخصات فنی</h3>
                  <ul className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">⭐</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          </div>

          {/* فرم پیشنهاد قیمت با فیلد آدرس */}
          <Card className="p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50" id="order">
            <h2 className="text-3xl font-bold mb-6 text-center">پیشنهاد قیمت خود را ثبت کنید 🌹</h2>
            <form onSubmit={handleOfferSubmit} className="max-w-2xl mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  نام و نام خانوادگی <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={offerData.fullName}
                  onChange={(e) => setOfferData({ ...offerData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="نام کامل خود را وارد کنید"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  شماره تماس <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={offerData.phone}
                  onChange={(e) => setOfferData({ ...offerData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  آدرس محل سکونت <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={offerData.address}
                  onChange={(e) => setOfferData({ ...offerData, address: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="آدرس خود را وارد کنید"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  قیمت پیشنهادی <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    required
                    value={offerData.price}
                    onChange={(e) => setOfferData({ ...offerData, price: e.target.value })}
                    className="flex-1 px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="مبلغ را وارد کنید"
                    dir="ltr"
                  />
                  <span className="px-4 py-3 bg-muted border border-border rounded-lg flex items-center">تومان</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitStatus === "sending"}
                className="w-full px-6 py-4 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-bold text-lg rounded-lg hover:from-emerald-600 hover:to-emerald-500 transition-all disabled:opacity-50"
              >
                {submitStatus === "sending" ? "در حال ارسال..." : "ثبت و ارسال پیشنهاد 💎"}
              </button>

              <p className="text-center text-sm text-muted-foreground">
                پس از ثبت پیشنهاد، کارشناسان ما با شما تماس خواهند گرفت
              </p>
            </form>
          </Card>
        </div>
      </main>
    </div>
  )
}
