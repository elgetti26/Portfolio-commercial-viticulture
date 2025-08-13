import { TrendingUp, Users, Sprout, Globe, Plane } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"

export const Experience = React.memo(function Experience() {
  const experiences = [
    {
      icon: <Plane />,
      poste: "Séjour Linguistique",
      entreprise: "Famille d'accueil - Michigan, USA",
      description: "2 mois séjour dans une famille américaine au Michigan",
      date: "2019",
      side: "right",
    },
    {
      icon: <Sprout />,
      poste: "Vente, Service et Travail Agricole",
      entreprise: "Domaine Almoric",
      description: "Stage puis prolongement en tant qu'employé - Vente service et travail agricole",
      date: "Juin - Juillet 2022",
      side: "left",
    },
    {
      icon: <Users />,
      poste: "Assistant Technicien Commercial",
      entreprise: "Top Semence",
      description: "Stage - Assistant technicien commercial",
      date: "Juin - Juillet 2023",
      side: "right",
    },
    {
      icon: <Globe />,
      poste: "Semestre d'étude à l'international",
      entreprise: "Université de Belgrano - Buenos Aires, Argentine",
      description: "Formation en commerce international et apprentissage de l'espagnol (cours en espagnol)",
      date: "Juin 2024 - Janvier 2025",
      side: "left",
    },
    {
      icon: <TrendingUp />,
      poste: "Chargé de Développement Commercial",
      entreprise: "Summerrockz - Barcelone",
      description: "Chargé de développement commercial - Prospection terrain et réseaux sociaux",
      date: "Juin - Juillet 2025",
      side: "right",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">Expériences</h2>
          <div className="w-32 h-1 bg-black mx-auto rounded-full"></div>
        </div>

        <div className="relative timeline-connector">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 timeline-dot"></div>

              {/* Content card */}
              <div className={`flex items-center ${exp.side === "right" ? "flex-row" : "flex-row-reverse"} gap-8`}>
                {/* Content */}
                <div className="flex-1">
                  <Card className="border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-gray-100 rounded-xl mr-4">
                          {React.cloneElement(exp.icon, { className: "w-8 h-8 text-black" })}
                        </div>
                        <div>
                          <h3 className="font-bold text-2xl text-black">{exp.poste}</h3>
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm font-semibold rounded-full mt-2">
                            {exp.date}
                          </span>
                        </div>
                      </div>
                      <p className="font-semibold text-lg text-gray-800 mb-4">{exp.entreprise}</p>
                      <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                  <div className="w-96 h-72 shadow-lg">
                    <img
                      src={index === 0 ? "/images/michigan.jpg" : 
                           index === 1 ? "/images/domainealmoric.jpg" :
                           index === 2 ? "/images/topsemence.jpg" :
                           index === 3 ? "/images/buenosaires.jpg" :
                           "/images/barcelone.jpg"}
                      alt={exp.poste}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})
