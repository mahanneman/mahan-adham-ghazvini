"use client"

import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function CatiaArticlesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-engineering-primary">مطالب CATIA</h1>
          <Card className="p-12 mt-8">
            <div className="text-6xl mb-4">💎</div>
            <p className="text-xl text-muted-foreground mb-6">این بخش نیازمند هزینه است</p>
            <p className="text-2xl font-bold text-engineering-accent line-through decoration-2 mb-4">۱,۸۰۰,۰۰۰ تومان</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              سفارش
            </Link>
            <p className="text-sm text-muted-foreground mt-4">لطفاً تماس بگیرید</p>
          </Card>
        </div>
      </main>
    </div>
  )
}
