"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch("https://formspree.io/f/xlgeorgj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      alert("پیام شما با موفقیت ارسال شد! 🌹")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } else {
      alert("خطا در ارسال پیام. لطفاً دوباره تلاش کنید.")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 p-6 bg-gradient-to-br from-emerald-900/20 to-green-900/20 rounded-xl border border-emerald-700/30">
            <p className="text-lg md:text-xl leading-relaxed text-center font-semibold">
              تواضع ز گردن‌فرازان نکوست 🌹<br />
              گدا گر تواضع کند، خوی اوست
            </p>
            <p className="text-sm text-muted-foreground text-center mt-2">— سعدی</p>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-engineering-primary">💎 تماس با ما</h1>
          <p className="text-lg text-muted-foreground mb-12">
            برای همکاری، مشاوره یا سفارش پروژه با ما در ارتباط باشید
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">فرم تماس 🌹</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">ایمیل</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">موضوع</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">پیام</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  ارسال پیام ⭐
                </button>
              </form>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScBzAVQ8Jq9ua9qxVseNzVNmCZ998W_zGLGaCohayokzXKbng/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
              >
                ارسال پیام به ادمین مستقیم 💎
              </a>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-emerald-900/10 to-green-900/10">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">ایمیل 🌹</h3>
                    <p className="text-muted-foreground">mahan.neman2020@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-900/10 to-cyan-900/10">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">تلفن ☎️</h3>
                    <p className="text-muted-foreground" dir="ltr">
                      09902279702
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-red-900/10 to-rose-900/10">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">آدرس 💎</h3>
                    <p className="text-muted-foreground">تهران، منطقه هفت، نامجو</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-4">موقعیت روی نقشه 🌹</h3>
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">نقشه منطقه ۷ تهران</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
