"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false)
  const [articlesDropdownOpen, setArticlesDropdownOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/80 backdrop-blur-sm"
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-engineering-primary hover:text-engineering-accent transition-colors"
          >
            مهندس ماهان ادهم قزوینی
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium text-foreground hover:text-engineering-primary transition-colors">
              خانه
            </Link>

            <Link href="/about" className="font-medium text-foreground hover:text-green-700 transition-colors">
              معرفی
            </Link>

            <Link
              href="/analysis"
              className="font-medium text-foreground hover:text-engineering-primary transition-colors"
            >
              تحلیل‌ها
            </Link>

            <div
              className="relative"
              onMouseEnter={() => {
                setTimeout(() => setEducationDropdownOpen(true), 1500)
              }}
              onMouseLeave={() => setEducationDropdownOpen(false)}
            >
              <button className="font-medium text-foreground hover:text-green-700 transition-colors flex items-center gap-1">
                آموزش
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {educationDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl overflow-hidden"
                  >
                    <Link
                      href="/education/free"
                      className="block px-4 py-3 hover:bg-green-700/10 transition-colors"
                      onClick={() => setEducationDropdownOpen(false)}
                    >
                      آموزش‌های رایگان
                    </Link>
                    <Link
                      href="/education/paid"
                      className="block px-4 py-3 hover:bg-green-700/10 transition-colors"
                      onClick={() => setEducationDropdownOpen(false)}
                    >
                      آموزش‌های پولی
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => {
                setTimeout(() => setArticlesDropdownOpen(true), 1500)
              }}
              onMouseLeave={() => setArticlesDropdownOpen(false)}
            >
              <button className="font-medium text-foreground hover:text-engineering-primary transition-colors flex items-center gap-1">
                مطالب
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {articlesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl overflow-hidden"
                  >
                    <Link
                      href="/articles/isi"
                      className="block px-4 py-3 hover:bg-engineering-primary/10 transition-colors"
                      onClick={() => setArticlesDropdownOpen(false)}
                    >
                      مقالات ISI
                    </Link>
                    <Link
                      href="/articles/matlab"
                      className="block px-4 py-3 hover:bg-engineering-primary/10 transition-colors"
                      onClick={() => setArticlesDropdownOpen(false)}
                    >
                      MATLAB
                    </Link>
                    <Link
                      href="/articles/catia"
                      className="block px-4 py-3 hover:bg-engineering-primary/10 transition-colors"
                      onClick={() => setArticlesDropdownOpen(false)}
                    >
                      CATIA
                    </Link>
                    <Link
                      href="/articles/solidworks"
                      className="block px-4 py-3 hover:bg-engineering-primary/10 transition-colors"
                      onClick={() => setArticlesDropdownOpen(false)}
                    >
                      SolidWorks
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/articles/isi"
              className="font-medium text-foreground hover:text-engineering-accent transition-colors"
            >
              ISI
            </Link>

            <Link
              href="/products"
              className="font-medium text-foreground hover:text-engineering-primary transition-colors"
            >
              محصولات
            </Link>

            <Link href="/freelance" className="font-medium text-foreground hover:text-green-700 transition-colors">
              فریلنس
            </Link>

            <Link
              href="/contact"
              className="font-medium text-foreground hover:text-engineering-accent transition-colors"
            >
              تماس
            </Link>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  خانه
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  معرفی
                </Link>
                <Link
                  href="/analysis"
                  className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  تحلیل‌ها
                </Link>
                <Link
                  href="/education/free"
                  className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  آموزش‌های رایگان
                </Link>
                <Link
                  href="/education/paid"
                  className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  آموزش‌های پولی
                </Link>
                <Link
                  href="/articles/isi"
                  className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  مقالات ISI
                </Link>
                <Link
                  href="/products"
                  className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  محصولات
                </Link>
                <Link
                  href="/freelance"
                  className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  فریلنس
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  تماس
                </Link>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-full text-right px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                >
                  {theme === "dark" ? "تم روشن" : "تم تیره"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
