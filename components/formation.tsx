import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"

export const Formation = React.memo(function Formation() {
  const formations = [
    {
      icon: <Award className="w-8 h-8 text-black" />,
      titre: "DUT Génie Biologique",
      etablissement: "Option Agronomie",
      description: "Fondamentaux en sciences biologiques et agronomiques",
      date: "2021 - 2023", // Updated date to 2021-2023
      side: "right",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-black" />,
      titre: "Master 1 – Double Diplôme",
      etablissement: "EM Lyon & ISARA Lyon",
      description: "Ingénieur Agronome et Commerce",
      date: "2023 - 2025",
      side: "left",
    },
  ]

  return (
    <section id="formation" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">Formation</h2>
          <div className="w-32 h-1 bg-black mx-auto rounded-full"></div>
        </div>

        <div className="relative timeline-connector">
          {formations.map((formation, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 timeline-dot"></div>

              {/* Content card */}
              <div
                className={`flex items-center ${formation.side === "right" ? "flex-row" : "flex-row-reverse"} gap-8`}
              >
                {/* Content */}
                <div className="flex-1">
                  <Card className="border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-gray-100 rounded-xl mr-4">{formation.icon}</div>
                        <div>
                          <h3 className="font-bold text-2xl text-black">{formation.titre}</h3>
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm font-semibold rounded-full mt-2">
                            {formation.date}
                          </span>
                        </div>
                      </div>
                      <p className="font-semibold text-lg text-gray-800 mb-3">{formation.etablissement}</p>
                      <p className="text-gray-700 mb-4 font-medium">{formation.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                  <div className="w-96 h-72 shadow-lg">
                    <img
                      src={index === 0 ? "/images/dut.jpg" : "/images/master1.jpg"}
                      alt={formation.titre}
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
