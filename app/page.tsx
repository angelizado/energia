'use client'

import { useState } from 'react'
import { Wind, Sun, Flame, Waves, Atom, TreesIcon as Tree, InfoIcon, CheckCircleIcon, CheckIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EnergiaDialog } from './components/energia-dialog'

export default function FuentesEnergia() {
  const [selectedEnergia, setSelectedEnergia] = useState<string | null>(null)

  const fuentesEnergia = [
    {
      titulo: "Energía Solar",
      descripcion: "La energía solar es captada a través de paneles solares que convierten la luz del sol en electricidad. Es una fuente renovable y limpia que no produce emisiones contaminantes.",
      icon: Sun,
      ventajas: ["Renovable", "No contamina", "Bajo mantenimiento"],
      color: "text-yellow-500",
      slug: "solar"
    },
    {
      titulo: "Energía Eólica",
      descripcion: "La energía eólica aprovecha la fuerza del viento mediante turbinas que convierten el movimiento en electricidad. Es una de las fuentes de energía más sostenibles.",
      icon: Wind,
      ventajas: ["Inagotable", "Bajo impacto ambiental", "Eficiente"],
      color: "text-blue-500",
      slug: "eolica"
    },
    {
      titulo: "Energía Térmica",
      descripcion: "La energía térmica se obtiene mediante la combustión de combustibles fósiles como carbón, petróleo y gas natural. Es una fuente no renovable que produce emisiones de CO2.",
      icon: Flame,
      ventajas: ["Alta disponibilidad", "Gran potencia", "Bajo costo"],
      color: "text-red-500",
      slug: "termica"
    },
    {
      titulo: "Energía Hidráulica",
      descripcion: "La energía hidráulica se obtiene del movimiento del agua en ríos y presas. Es renovable y no contamina, aunque puede afectar a los ecosistemas acuáticos.",
      icon: Waves,
      ventajas: ["Renovable", "No contamina", "Constante"],
      color: "text-cyan-500",
      slug: "hidraulica"
    },
    {
      titulo: "Energía Nuclear",
      descripcion: "La energía nuclear se obtiene mediante la fisión de átomos de uranio. Produce gran cantidad de energía sin emisiones de CO2, pero genera residuos radiactivos.",
      icon: Atom,
      ventajas: ["Alta potencia", "Sin emisiones CO2", "Eficiente"],
      color: "text-purple-500",
      slug: "nuclear"
    },
    {
      titulo: "Biomasa",
      descripcion: "La biomasa utiliza materia orgánica como fuente de energía. Incluye residuos forestales, agrícolas y urbanos. Es renovable pero debe gestionarse de forma sostenible.",
      icon: Tree,
      ventajas: ["Renovable", "Reduce residuos", "Versátil"],
      color: "text-green-500",
      slug: "biomasa"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://russiatrek.org/blog/wp-content/uploads/2015/09/murmansk-from-the-heights-russia-1.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-green-600/90 mix-blend-multiply" />
          </div>
        </div>
        
        <div className="relative container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
            Fuentes de Energía
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto px-4 md:px-0">
            Explora las diferentes formas en que obtenemos la energía que impulsa nuestro mundo moderno, desde fuentes renovables hasta no renovables.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {fuentesEnergia.map((fuente, index) => {
              const IconComponent = fuente.icon
              return (
                <Card 
                  key={fuente.titulo} 
                  className="transition-transform hover:scale-105 cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                  onClick={() => setSelectedEnergia(fuente.slug)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <IconComponent className={`h-8 w-8 ${fuente.color}`} />
                      <CardTitle>{fuente.titulo}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 flex items-start gap-2">
                      <InfoIcon className="h-5 w-5 flex-shrink-0 mt-1" />
                      {fuente.descripcion}
                    </CardDescription>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5" />
                        Ventajas principales:
                      </h4>
                      <ul className="list-none space-y-2 text-sm text-gray-600">
                        {fuente.ventajas.map((ventaja) => (
                          <li key={ventaja} className="flex items-start gap-2">
                            <CheckIcon className="h-4 w-4 flex-shrink-0 mt-1" />
                            {ventaja}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
        <div className='relative container mx-auto text-center'>
          <Card>
          <CardHeader>
            <h1 className="text-1xl md:text-4xl lg:text-4xl font-bold mb-2 md:mb-4 text-black">Responde mi encuesta aqui abajo:</h1>
            <iframe className='relative container mx-auto text-center' src="https://docs.google.com/forms/d/e/1FAIpQLSfCf5jUug24_vo2K8fZ2nnJ0C2Jx4mLXM-i-g3tvrbLWGkxuA/viewform?embedded=true" width="640" height="414" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
          </CardHeader>
          </Card>
        </div>
      </section>

      <EnergiaDialog 
        tipo={selectedEnergia as keyof typeof fuentesEnergia} 
        onOpenChange={(open) => !open && setSelectedEnergia(null)} 
      />

      <footer className="border-t py-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} - Angel Alexander</p>
      </footer>
    </div>
  )
}

