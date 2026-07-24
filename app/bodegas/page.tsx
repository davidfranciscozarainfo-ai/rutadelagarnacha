import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { FichaCard } from '@/components/ficha-card'
import { SectionGrid } from '@/components/section-grid'

const BODEGAS = [
  {
    slug: 'aragonesas',
    title: 'Bodegas Aragonesas',
    subtitle: 'Fuendejalón · D.O. Campo de Borja',
    image: '/images/exp-bodega.png',
    imageAlt: 'Bodega Aragonesas — barricas y viñedos en Fuendejalón',
    tag: 'Visitable',
  },
  {
    slug: 'bordeje',
    title: 'Bodegas Bordejé',
    subtitle: 'Ainzón · D.O. Campo de Borja',
    image: '/images/exp-cata.png',
    imageAlt: 'Bodegas Bordejé — cata de Garnacha en Ainzón',
    tag: 'Visitable',
  },
  {
    slug: 'borsao',
    title: 'Bodegas Borsao',
    subtitle: 'Borja · D.O. Campo de Borja',
    image: '/images/exp-bodega.png',
    imageAlt: 'Bodegas Borsao — instalaciones en Borja',
    tag: 'Visitable',
  },
  {
    slug: 'ainzon',
    title: 'Bodegas Ainzón',
    subtitle: 'Ainzón · D.O. Campo de Borja',
    image: '/images/hero-vinedos.png',
    imageAlt: 'Bodegas Ainzón — viñedos viejos de Garnacha',
    tag: 'Visitable',
  },
  {
    slug: 'pagos-del-moncayo',
    title: 'Bodegas Pagos del Moncayo',
    subtitle: 'Vera de Moncayo · D.O. Campo de Borja',
    image: '/images/territorio.png',
    imageAlt: 'Bodegas Pagos del Moncayo — viñas al pie del Moncayo',
    tag: 'Visitable',
  },
  {
    slug: 'roman',
    title: 'Bodegas Román',
    subtitle: 'Borja · D.O. Campo de Borja',
    image: '/images/exp-bodega.png',
    imageAlt: 'Bodegas Román — arquitectura tradicional en Borja',
    tag: 'Visitable',
  },
  {
    slug: 'palmeri-sicilia',
    title: 'Bodega Palmeri Sicilia',
    subtitle: 'Tabuenca · D.O. Campo de Borja',
    image: '/images/exp-cata.png',
    imageAlt: 'Bodega Palmeri Sicilia — cata exclusiva en Tabuenca',
    tag: 'Visitable',
  },
]

export default function BodegasPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          label="D.O. Campo de Borja"
          title="Bodegas visitables"
          subtitle="Siete bodegas que abren sus puertas para que descubras la Garnacha en su origen: viñas viejas, barricas de roble y paisaje."
          image="/images/exp-bodega.png"
          imageAlt="Barricas de roble en una bodega de la Ruta de la Garnacha"
          height="h-[55vh]"
        />

        {/* Info strip */}
        <div className="border-b-2 border-primary bg-secondary">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-10 px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-4xl font-semibold text-primary">7</span>
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Bodegas visitables</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-4xl font-semibold text-primary">D.O.</span>
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Campo de Borja</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-4xl font-semibold text-primary">100+</span>
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Años de historia vitícola</span>
            </div>
            <p className="ml-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
              Todas las bodegas ofrecen visitas guiadas con cata incluida. Reserva con antelación para garantizar disponibilidad.
            </p>
          </div>
        </div>

        <SectionGrid
          label="Bodegas"
          title="Todas las bodegas"
          description="Selecciona una bodega para consultar horarios, tarifas y reservar tu visita."
        >
          {BODEGAS.map((b, i) => (
            <FichaCard
              key={b.slug}
              title={b.title}
              subtitle={b.subtitle}
              image={b.image}
              imageAlt={b.imageAlt}
              href={`/bodegas/${b.slug}`}
              tag={b.tag}
              index={i + 1}
            />
          ))}
        </SectionGrid>
      </main>
      <SiteFooter />
    </div>
  )
}
