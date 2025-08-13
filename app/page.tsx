import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import dynamic from "next/dynamic"

// Lazy loading des composants pour améliorer les performances
const Storytelling = dynamic(() => import("@/components/storytelling").then(mod => ({ default: mod.Storytelling })), {
  loading: () => <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white"><div className="max-w-4xl mx-auto text-center">Chargement...</div></div>,
  ssr: true
})

const Formation = dynamic(() => import("@/components/formation").then(mod => ({ default: mod.Formation })), {
  loading: () => <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white"><div className="max-w-6xl mx-auto text-center">Chargement...</div></div>,
  ssr: true
})

const Experience = dynamic(() => import("@/components/experience").then(mod => ({ default: mod.Experience })), {
  loading: () => <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"><div className="max-w-6xl mx-auto text-center">Chargement...</div></div>,
  ssr: true
})

const Competences = dynamic(() => import("@/components/competences").then(mod => ({ default: mod.Competences })), {
  loading: () => <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white"><div className="max-w-6xl mx-auto text-center">Chargement...</div></div>,
  ssr: true
})

const Interets = dynamic(() => import("@/components/interets").then(mod => ({ default: mod.Interets })), {
  loading: () => <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white"><div className="max-w-6xl mx-auto text-center">Chargement...</div></div>,
  ssr: true
})

const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white"><div className="max-w-4xl mx-auto text-center">Chargement...</div></div>,
  ssr: true
})

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900"><div className="max-w-6xl mx-auto text-center text-white">Chargement...</div></div>,
  ssr: true
})

const VideoSection = dynamic(() => import("@/components/video").then(mod => ({ default: mod.VideoSection })), {
  loading: () => <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white"><div className="max-w-6xl mx-auto text-center">Chargement de la vidéo...</div></div>,
  ssr: true
})

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      <Header />
      <Hero />
      <Storytelling />
      <Formation />
      <Experience />
      <Competences />
      <Interets />
      <VideoSection />
      <Contact />
      <Footer />
    </main>
  )
}
