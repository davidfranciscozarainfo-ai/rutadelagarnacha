import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { FichaCard } from '@/components/ficha-card'
import { SectionGrid } from '@/components/section-grid'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const RUTAS = [
  {
    title: 'Disfruta Conduciendo',
    subtitle: 'Un recorrido circular por los municipios de la ruta, en coche o moto.',
    image: '/images/territorio.png',
    imageAlt: 'Carretera entre viñedos del Campo de Borja',
    href: '/rutas/conduciendo',
    tag: 'Autocaravana · Coche',
  },
  {
    title: 'Rutas temáticas',
    subtitle: 'Itinerarios especializados: Garnacha, mudéjar, naturaleza, fotografía.',
    image: '/images/hero-vinedos.png',
    imageAlt: 'Viñedos y patrimonio en la Ruta de la Garnacha',
    href: '/rutas/tematicas',
    tag: 'Varios temas',
  },
  {
    title: 'Cicloturismo y BTT',
    subtitle: 'Rutas en bicicleta entre viñas, pueblos y caminos de la comarca.',
    image: '/images/exp-btt.png',
    imageAlt: 'Ciclista de montaña en los caminos del Campo de Borja',
    href: '/rutas/cicloturismo',
    tag: 'Bici · BTT',
  },
  {
    title: 'Camino de Santiago',
    subtitle: 'El Camino Aragonés atraviesa Tarazona y la comarca del Moncayo.',
    image: '/images/exp-senderismo.png',
    imageAlt: 'Etapa del Camino de Santiago en el Moncayo',
    href: '/rutas/camino-de-santiago',
    tag: 'Senderismo',
  },
  {
    title: 'Senderismo',
    subtitle: 'Sendas por el Moncayo, sotos del Ebro y paisajes singulares.',
    image: '/images/exp-senderismo.png',
    imageAlt: 'Sendero por el bosque de robles del Moncayo',
    href: '/rutas/senderismo',
    tag: 'Senderismo',
  },
  {
    title: 'Alrededores',
    subtitle: 'Destinos cercanos: Zaragoza, La Rioja, Soria y el valle del Ebro.',
    image: '/images/territorio.png',
    imageAlt: 'Vista panorámica del entorno de la Ruta de la Garnacha',
    href: '/rutas/alrededores',
    tag: 'Excursiones',
  },
]

export default function RutasPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          label="Rutas"
          title="Elige tu forma de recorrer el territorio"
          subtitle="A pie, en bici, en coche o siguiendo el Camino de Santiago — la Ruta de la Garnacha tiene un itinerario para cada viajero."
          image="/images/exp-senderismo.png"
          imageAlt="Sendero entre viñedos y bosques del Moncayo"
          height="h-[55vh]"
        />

        {/* Special pages strip */}
        <div className="border-b-2 border-primary bg-primary">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-0 px-4 sm:px-6 lg:px-8">
            <Link
              href="/rutas/mapa"
              className="group flex flex-1 items-center justify-between border-r-2 border-primary-foreground/20 px-6 py-6 transition-opacity hover:opacity-80"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/60">
                  Herramienta
                </p>
                <p className="mt-1 font-serif text-xl font-semibold text-primary-foreground">
                  Mapa interactivo
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-primary-foreground/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
            </Link>
            <Link
              href="/rutas/mi-viaje"
              className="group flex flex-1 items-center justify-between px-6 py-6 transition-opacity hover:opacity-80"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/60">
                  Personaliza
                </p>
                <p className="mt-1 font-serif text-xl font-semibold text-primary-foreground">
                  Mi viaje
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-primary-foreground/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <SectionGrid
          label="Itinerarios"
          title="Todas las rutas"
          description="Elige un tipo de ruta para ver los itinerarios disponibles, la dificultad y los puntos de interés."
        >
          {RUTAS.map((r, i) => (
            <FichaCard
              key={r.href}
              title={r.title}
              subtitle={r.subtitle}
              image={r.image}
              imageAlt={r.imageAlt}
              href={r.href}
              tag={r.tag}
              index={i + 1}
            />
          ))}
        </SectionGrid>
      </main>
      <SiteFooter />
    </div>
  )
}
