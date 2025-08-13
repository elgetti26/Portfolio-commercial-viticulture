import { TrendingUp, Monitor, Users, FileText, BarChart3, Globe, MessageCircle, Bot } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"

export const Competences = React.memo(function Competences() {
  const competences = [
    {
      icon: <Globe />,
      titre: "Anglais",
      description: "TOEIC 940 - Niveau avancé",
    },
    {
      icon: <MessageCircle />,
      titre: "Espagnol",
      description: "Courant - Expérience internationale",
    },
    {
      icon: <TrendingUp />,
      titre: "Vente",
      description: "Développement commercial terrain et digital",
    },
    {
      icon: <Users />,
      titre: "Empathie et écoute active",
      description: "Propositions de solutions personnalisées",
    },
    {
      icon: <Monitor />,
      titre: "Marketing Digital",
      description: "Stratégies digitales et outils modernes",
    },
    {
      icon: <Bot />,
      titre: "Différents Outils IA",
      description: "Maîtrises de certains outils d'intelligence artificielle",
    },
    {
      icon: <BarChart3 />,
      titre: "R",
      description: "Analyse de données et statistiques",
    },
    {
      icon: <FileText />,
      titre: "Pack Office",
      description: "Maîtrise complète des outils bureautiques",
    },
  ]

  return (
    <section id="competences" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-4">Compétences</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {competences.map((competence, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {React.cloneElement(competence.icon, { className: "w-8 h-8 text-black" })}
                </div>
                <h3 className="font-semibold text-lg text-black mb-2">{competence.titre}</h3>
                <p className="text-sm text-gray-700">{competence.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})
