import { User } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/fondcadre.jpg"
          alt="Arrière-plan viticole"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <div className="mb-8">
                <h1 className="font-serif text-2xl md:text-3xl font-bold mb-2 reflection-effect">Getti</h1>
                <h2 className="font-serif text-lg md:text-xl font-medium text-gray-200 mb-6">Etienne</h2>
              </div>

              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Développement Commercial • Innovation Viticole • Solutions Technologiques
              </p>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center reflection-effect">
                  <div className="text-center text-white/60">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4">
                      <User className="w-6 h-6 text-white/60" />
                    </div>
                    <p className="text-2xl font-medium">Photo principale</p>
                    <p className="text-base text-white/40">Portrait professionnel</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/10 to-gray-400/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-white/5 to-gray-500/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
