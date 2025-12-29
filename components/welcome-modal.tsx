"use client"

import { motion } from "framer-motion"

interface WelcomeModalProps {
  onClose: () => void
}

export default function WelcomeModal({ onClose }: WelcomeModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-card border border-border rounded-xl p-8 md:p-12 max-w-lg mx-4 text-center shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 opacity-5">
          <img src="/mechanical-gears-circuit-pattern-blueprint.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10">
          <div className="text-5xl mb-4">🌹</div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-engineering-primary">
            خوش آمدید به سایت مهندس ماهان
          </h2>
          <p className="text-lg text-muted-foreground">پورتفولیوی حرفه‌ای مهندسی مکانیک، تحلیل پیشرفته و طراحی صنعتی</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
