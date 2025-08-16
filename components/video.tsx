import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export const VideoSection = React.memo(function VideoSection() {
  return (
    <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">Présentation en vidéo</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Une courte vidéo pour découvrir mon parcours, mes motivations et ma vision.
          </p>
          <div className="w-32 h-1 bg-black mx-auto mt-6 rounded-full"></div>
        </div>

        <Card className="border-gray-200 shadow-2xl bg-gradient-to-b from-white to-gray-50">
          <CardContent className="p-4 sm:p-6">
            <AspectRatio ratio={16 / 9}>
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube-nocookie.com/embed/Uc2G8qFAh8o?rel=0&modestbranding=1"
                title="Présentation vidéo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </AspectRatio>
          </CardContent>
        </Card>
      </div>
    </section>
  )
})


