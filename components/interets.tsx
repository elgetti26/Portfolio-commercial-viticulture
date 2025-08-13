import { TrendingUp, Grape, Bot, Languages, Dumbbell, Music, Brain, Film } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"

export const Interets = React.memo(function Interets() {
  const interets = [
    {
      icon: <TrendingUp />,
      titre: "Commerce",
      description:
        "Passion pour le développement commercial et les stratégies de vente. J'apprécie également apprendre sur l'économie de manière générale (finance, géopolitique...)",
    },
    {
      icon: <Languages />,
      titre: "Langues",
      description: "Apprentissage continu et échanges interculturels",
    },
    {
      icon: <Grape />,
      titre: "Produits du Terroir",
      description: "Vin, fromage, viande... Passion pour les produits authentiques",
    },
    {
      icon: <Bot />,
      titre: "Innovation",
      description: "IA, robots, technologies notamment au service de la viticulture",
    },
    {
      icon: <Dumbbell />,
      titre: "Sport",
      description: "Musculation, triathlon, apnée - Dépassement de soi",
    },
    {
      icon: <Music />,
      titre: "Piano",
      description: "Expression artistique et développement de la créativité",
    },
    {
      icon: <Brain />,
      titre: "Philosophie",
    },
    {
      icon: <Film />,
      titre: "Cinéma",
    },
  ]

  return (
    <section id="interets" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-4">Centres d'Intérêt</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interets.map((interet, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {React.cloneElement(interet.icon, { className: "w-8 h-8 text-black" })}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black mb-2">{interet.titre}</h3>
                    {interet.description && (
                      <p className="text-gray-700">{interet.description}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})
