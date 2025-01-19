import { Wind, Sun, Flame, Waves, Atom, TreesIcon as Tree } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

const fuentesData = {
  solar: {
    titulo: "Energía Solar",
    icon: Sun,
    color: "text-yellow-500",
    descripcion: "La energía solar es una de las fuentes de energía renovable más importantes y prometedoras. Se obtiene mediante la captación de la radiación electromagnética procedente del Sol.",
    funcionamiento: "Los paneles solares utilizan células fotovoltaicas que convierten la luz solar directamente en electricidad. Estas células están hechas principalmente de silicio y otros materiales semiconductores.",
    ventajas: [
      "Es una fuente de energía inagotable",
      "No produce emisiones contaminantes",
      "Requiere poco mantenimiento",
      "Puede instalarse en lugares remotos",
      "Los costos de instalación están disminuyendo"
    ],
    desventajas: [
      "Depende de las condiciones climáticas",
      "Requiere una inversión inicial significativa",
      "Necesita grandes espacios para instalaciones a gran escala",
      "La producción de paneles solares genera cierto impacto ambiental"
    ],
    aplicaciones: [
      "Generación de electricidad para hogares",
      "Plantas solares a gran escala",
      "Calentamiento de agua",
      "Dispositivos portátiles",
      "Iluminación pública"
    ]
  },
  eolica: {
    titulo: "Energía Eólica",
    icon: Wind,
    color: "text-blue-500",
    descripcion: "La energía eólica aprovecha la fuerza del viento para generar electricidad. Es una de las formas más antiguas de energía utilizada por la humanidad.",
    funcionamiento: "Las turbinas eólicas convierten la energía cinética del viento en energía mecánica mediante sus palas, que luego se transforma en electricidad a través de un generador.",
    ventajas: [
      "Es una fuente de energía limpia y renovable",
      "No produce emisiones durante la operación",
      "Puede coexistir con otros usos del terreno",
      "Crea empleos en zonas rurales",
      "Costos operativos bajos"
    ],
    desventajas: [
      "Depende de las condiciones del viento",
      "Puede afectar a las aves",
      "Impacto visual en el paisaje",
      "Puede generar ruido"
    ],
    aplicaciones: [
      "Parques eólicos terrestres",
      "Parques eólicos marinos",
      "Bombeo de agua",
      "Sistemas híbridos con solar",
      "Generación distribuida"
    ]
  },
  termica: {
    titulo: "Energía Térmica",
    icon: Flame,
    color: "text-red-500",
    descripcion: "La energía térmica se obtiene mediante la combustión de combustibles fósiles. Es una de las formas más tradicionales de generación de energía.",
    funcionamiento: "Se queman combustibles como carbón, petróleo o gas natural para calentar agua y producir vapor, que mueve turbinas conectadas a generadores eléctricos.",
    ventajas: [
      "Alta disponibilidad de combustibles",
      "Producción constante de energía",
      "Tecnología bien desarrollada",
      "Puede operar en cualquier condición climática",
      "Infraestructura existente"
    ],
    desventajas: [
      "Emisiones de gases de efecto invernadero",
      "Contaminación del aire",
      "Recursos no renovables",
      "Impacto ambiental en la extracción"
    ],
    aplicaciones: [
      "Centrales termoeléctricas",
      "Calefacción industrial",
      "Procesos industriales",
      "Generación de electricidad",
      "Sistemas de cogeneración"
    ]
  },
  hidraulica: {
    titulo: "Energía Hidráulica",
    icon: Waves,
    color: "text-cyan-500",
    descripcion: "La energía hidráulica aprovecha la energía del agua en movimiento para generar electricidad. Es una de las fuentes de energía renovable más antiguas.",
    funcionamiento: "Utiliza la energía potencial del agua almacenada en presas o embalses, que al caer mueve turbinas conectadas a generadores eléctricos.",
    ventajas: [
      "Es renovable y limpia",
      "Puede almacenar energía",
      "Larga vida útil de las instalaciones",
      "Ayuda en el control de inundaciones",
      "Costos operativos bajos"
    ],
    desventajas: [
      "Alto impacto ambiental en la construcción",
      "Afecta a ecosistemas acuáticos",
      "Requiere grandes inversiones iniciales",
      "Depende de condiciones climáticas"
    ],
    aplicaciones: [
      "Generación de electricidad",
      "Control de agua",
      "Riego agrícola",
      "Recreación",
      "Suministro de agua"
    ]
  },
  nuclear: {
    titulo: "Energía Nuclear",
    icon: Atom,
    color: "text-purple-500",
    descripcion: "La energía nuclear se obtiene mediante la fisión de átomos de uranio. Es una fuente de energía de alta potencia y baja emisión de carbono.",
    funcionamiento: "En reactores nucleares, se produce una reacción en cadena controlada que genera calor, el cual se usa para producir vapor que mueve turbinas generadoras.",
    ventajas: [
      "Alta producción de energía",
      "Bajas emisiones de CO2",
      "Operación continua",
      "Requiere poco combustible",
      "Alta eficiencia"
    ],
    desventajas: [
      "Gestión de residuos radiactivos",
      "Alto costo de construcción",
      "Riesgos de seguridad",
      "Preocupación pública"
    ],
    aplicaciones: [
      "Generación de electricidad",
      "Propulsión naval",
      "Investigación científica",
      "Medicina nuclear",
      "Exploración espacial"
    ]
  },
  biomasa: {
    titulo: "Biomasa",
    icon: Tree,
    color: "text-green-500",
    descripcion: "La biomasa utiliza materia orgánica como fuente de energía. Incluye residuos forestales, agrícolas y urbanos.",
    funcionamiento: "La materia orgánica se procesa mediante diferentes métodos (combustión, digestión anaeróbica, etc.) para producir calor, electricidad o combustibles.",
    ventajas: [
      "Es renovable",
      "Reduce residuos",
      "Neutral en carbono",
      "Beneficia a la economía rural",
      "Versatilidad de uso"
    ],
    desventajas: [
      "Puede competir con producción de alimentos",
      "Requiere gestión sostenible",
      "Emisiones durante el proceso",
      "Costos de transporte"
    ],
    aplicaciones: [
      "Generación de electricidad",
      "Calefacción",
      "Biocombustibles",
      "Cogeneración",
      "Gestión de residuos"
    ]
  }
}

export default function EnergiaPage({ params }: { params: { tipo: string } }) {
  const energia = fuentesData[params.tipo as keyof typeof fuentesData]
  
  if (!energia) {
    return <div>Fuente de energía no encontrada</div>
  }

  const IconComponent = energia.icon

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <IconComponent className={`h-12 w-12 ${energia.color}`} />
            <h1 className="text-4xl font-bold">{energia.titulo}</h1>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
              <p className="text-gray-700">{energia.descripcion}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">¿Cómo funciona?</h2>
              <p className="text-gray-700">{energia.funcionamiento}</p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Ventajas</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {energia.ventajas.map((ventaja) => (
                    <li key={ventaja}>{ventaja}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Desventajas</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {energia.desventajas.map((desventaja) => (
                    <li key={desventaja}>{desventaja}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Aplicaciones</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {energia.aplicaciones.map((aplicacion) => (
                  <li key={aplicacion}>{aplicacion}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

