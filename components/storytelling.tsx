import { Card, CardContent } from "@/components/ui/card"
import { Grape, TrendingUp, Globe } from "lucide-react"
import React from "react"

export const Storytelling = React.memo(function Storytelling() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">Mon Parcours</h2>
          <div className="w-32 h-1 bg-black mx-auto rounded-full"></div>
        </div>

        <Card className="border-gray-200 shadow-xl bg-gradient-to-br from-white to-gray-50">
          <CardContent className="p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="flex space-x-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <Grape className="w-8 h-8 text-black" />
                </div>
                <div className="p-3 bg-gray-100 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <div className="p-3 bg-gray-100 rounded-xl">
                  <Globe className="w-8 h-8 text-black" />
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                Passionné par l'innovation et fort d'un parcours alliant sciences agronomiques et commerce,
                je souhaite contribuer activement à la{" "}
                <span className="font-semibold text-black">modernisation de la viticulture française</span>.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Dans un secteur aussi traditionnel que prestigieux, je considère qu'il est essentiel de{" "}
                <span className="font-semibold text-black"> s'adapter à l'évolution de la société</span>, de faire face
                aux différents enjeux environnementaux et économiques, tout en préservant l'excellence qui fait la
                renommée de nos terroirs.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                Mes expériences professionnelles et internationales, mes connaissances techniques et stratégiques, 
                ma passion pour les produits du terroir me permettent d'apporter une vision moderne et originale 
                pour développer votre activité dans l'innovation agricole.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
})
