import { Mail, Phone, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-4">Contact</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <Card className="border-gray-200 shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-xl text-black mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-black" />
                    <span className="text-gray-800">gettietienne06@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-black" />
                    <span className="text-gray-800">+33 782483146</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-black" />
                    <span className="text-gray-800">Montélimar, France</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-xl text-black mb-6">Téléchargements</h3>
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger mon CV PDF
                </Button>
                <p className="text-sm text-gray-600 mt-3 text-center">Version complète avec références</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
