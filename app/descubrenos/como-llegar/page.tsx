import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { AccessibilityBlock } from '@/components/accessibility-block'
import { AddToTripButton } from '@/components/add-to-trip-button'
import { RelatedFichas } from '@/components/related-fichas'
import { Car, Train, Plane, Bus } from 'lucide-react'

const HOW_TO_ARRIVE = [
  {
    icon: <Car className="h-5 w-5" strokeWidth={1.5} />,
    title: 'En coche',
    items: [
      'Desde Zaragoza: A-68 dirección Logroño hasta Gallur, después N-122 hasta Borja (65 km, 45 min)',
      'Desde Madrid: A-2 hasta Zaragoza y continuación por A-68 (350 km, 3 h)',
      'Desde Pamplona: A-15 hasta Tudela y N-121 hasta Tarazona (100 km, 1 h 15 min)',
      'Desde Logroño: A-68 dirección Zaragoza hasta Borja (75 km, 50 min)',
      'Desde Barcelona: AP-2 hasta Zaragoza y continuación por A-68 (330 km, 3 h)',
    ],
  },
  {
    icon: <Train className="h-5 w-5" strokeWidth={1.5} />,
    title: 'En tren',
    items: [
      'Renfe ofrece conexiones directas a Zaragoza desde Madrid (AVE, 1 h 20 min) y Barcelona (AVE, 1 h 40 min)',
      'Desde Zaragoza-Delicias se puede alquilar vehículo para continuar a Borja o Tarazona',
      'Existe servicio de Media Distancia Zaragoza–Tarazona (línea C-3) con frecuencias limitadas',
    ],
  },
  {
    icon: <Plane className="h-5 w-5" strokeWidth={1.5} />,
    title: 'En avión',
    items: [
      'Aeropuerto más cercano: Zaragoza (65 km), con vuelos nacionales e internacionales',
      'Aeropuerto de Logroño–Agoncillo (90 km), con vuelos estacionales',
      'Madrid-Barajas y Barcelona-El Prat como alternativas principales para conexiones internacionales',
    ],
  },
  {
    icon: <Bus className="h-5 w-5" strokeWidth={1.5} />,
    title: 'En autobús',
    items: [
      'Autocares Jiménez opera la línea Zaragoza–Borja con salidas diarias',
      'Alsa conecta Zaragoza con Tarazona varias veces al día',
      'Consultar horarios actualizados en los portales oficiales de cada operador',
    ],
  },
]

const RELATED = [
  {
    title: 'Cómo desplazarme',
    subtitle: 'Transporte y movilidad dentro de la comarca.',
    image: '/images/exp-btt.png',
    imageAlt: 'Cicloturismo en la Ruta de la Garnacha',
    href: '/descubrenos/desplazarse',
  },
  {
    title: 'Servicios al visitante',
    subtitle: 'Oficinas de turismo e información local.',
    image: '/images/territorio.png',
    imageAlt: 'Oficina de turismo Campo de Borja',
    href: '/descubrenos/servicios',
  },
  {
    title: 'Dónde dormir',
    subtitle: 'Alojamientos certificados en la ruta.',
    image: '/images/hero-vinedos.png',
    imageAlt: 'Alojamiento rural con vistas a los viñedos',
    href: '/descubrenos/donde-dormir',
  },
]

export default function ComoLlegarPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          label="Descúbrenos"
          title="Cómo llegar"
          subtitle="La Ruta de la Garnacha está en el Campo de Borja, a menos de una hora de Zaragoza y bien comunicada con Madrid, Barcelona y Pamplona."
          image="/images/territorio.png"
          imageAlt="Vista aérea del Campo de Borja y sus viñedos"
          height="h-[50vh]"
        />

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Action bar */}
          <div className="mb-10 flex flex-wrap items-center gap-4 border-b-2 border-primary pb-6">
            <AddToTripButton label="Añadir a Mi viaje" />
          </div>

          {/* How to arrive grid */}
          <div className="grid grid-cols-1 gap-0 border-l-2 border-t-2 border-primary sm:grid-cols-2">
            {HOW_TO_ARRIVE.map((method) => (
              <div
                key={method.title}
                className="border-b-2 border-r-2 border-primary p-6 lg:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="text-primary">{method.icon}</span>
                  <h2 className="font-serif text-xl font-semibold text-foreground">{method.title}</h2>
                </div>
                <ul className="mt-4 space-y-2">
                  {method.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-12 border-2 border-primary">
            <div className="border-b-2 border-primary bg-primary px-5 py-3">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/80">
                Localización
              </p>
            </div>
            <div className="flex aspect-[16/6] items-center justify-center bg-muted">
              <p className="text-sm text-muted-foreground">
                Mapa de localización — Campo de Borja, Aragón
              </p>
            </div>
          </div>

          {/* Accessibility */}
          <div className="mt-12">
            <AccessibilityBlock
              text="Las principales vías de acceso a la comarca disponen de áreas de descanso adaptadas. La mayoría de municipios cuentan con aparcamiento para personas con movilidad reducida y acceso a la oficina de turismo sin barreras arquitectónicas."
              items={[
                'Aparcamiento reservado PMR en Borja, Tarazona y Ainzón',
                'Piso de acceso sin escalones en las oficinas de turismo',
                'Información turística en formato accesible disponible bajo petición',
                'Transporte adaptado: consultar con Autocares Jiménez',
              ]}
            />
          </div>
        </div>

        <RelatedFichas title="Continúa planificando tu visita" items={RELATED} />
      </main>
      <SiteFooter />
    </div>
  )
}
