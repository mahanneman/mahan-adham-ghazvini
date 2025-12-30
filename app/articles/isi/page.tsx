"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { FileText } from "lucide-react"

export default function ISIArticlesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3 text-engineering-primary">
              مقالات ISI
            </h1>
            <p className="text-muted-foreground">
              مقالات منتخب در حوزه مهندسی حرارت و انرژی
            </p>
          </div>

          <Link href="/articles/isi/pcm">
            <Card className="group p-8 cursor-pointer transition hover:shadow-2xl relative overflow-hidden">

              <div className="flex items-start gap-4">
                <div className="p-3 bg-engineering-primary/10 rounded-lg">
                  <FileText className="w-6 h-6 text-engineering-primary" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-engineering-primary mb-2">
                    Phase change material-based thermal energy storage
                  </h2>

                  <p className="text-sm text-muted-foreground italic">
                    ScienceDirect — 2021
                  </p>
                </div>
              </div>

              {/* Hover Intro */}
              <div
                className="absolute inset-0 bg-background/95 backdrop-blur
                           opacity-0 group-hover:opacity-100 transition
                           flex items-center justify-center p-8"
              >
                <p className="text-center leading-relaxed text-muted-foreground text-lg">
                  این مقاله مبانی انتقال حرارت در مواد تغییر فاز (PCM) را پوشش
                  می‌دهد؛ شامل characterization خواص، طراحی مواد و تمرکز بر
                  ذخیره انرژی نهان و کارایی سیستم‌ها. منبعی عالی برای درک
                  fundamentals ترمودینامیکی.
                </p>
              </div>

            </Card>
          </Link>

        </div>
      </main>
    </div>
  )
}
