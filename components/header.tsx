"use client"

import { useState } from "react"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full glass-effect z-50 border-b border-slate-200/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-serif text-xl font-bold text-slate-700 reflection-effect">Portfolio</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("formation")}
              className="text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105"
            >
              Formation
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105"
            >
              Expérience
            </button>
            <button
              onClick={() => scrollToSection("competences")}
              className="text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection("interets")}
              className="text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105"
            >
              Centres d'intérêt
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent reflection-effect transition-all duration-300 hover:scale-105"
            >
              <a href="/cv.pdf" download target="_blank" rel="noopener">
                <Download className="w-4 h-4 mr-2" />
                Télécharger CV PDF
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-600 hover:text-slate-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/20 animate-fade-in-up">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("formation")}
                className="text-left text-slate-600 hover:text-slate-800 transition-colors"
              >
                Formation
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-slate-600 hover:text-slate-800 transition-colors"
              >
                Expérience
              </button>
              <button
                onClick={() => scrollToSection("competences")}
                className="text-left text-slate-600 hover:text-slate-800 transition-colors"
              >
                Compétences
              </button>
              <button
                onClick={() => scrollToSection("interets")}
                className="text-left text-slate-600 hover:text-slate-800 transition-colors"
              >
                Centres d'intérêt
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-slate-600 hover:text-slate-800 transition-colors"
              >
                Contact
              </button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 w-fit bg-transparent"
              >
                <a href="/cv.pdf" download target="_blank" rel="noopener">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger CV PDF
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
