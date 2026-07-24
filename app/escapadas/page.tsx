import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { FichaCard } from '@/components/ficha-card'
import { SectionGrid } from '@/components/section-grid'

const ESCAPADAS = [
  {
    title: 'Enoaventúrate',
    subtitle: 'Combina vino, paisaje y actividades al aire libre en una escapada de fin de semana.',
    image: '/images/exp-cata.png',
    imageAlt: 'Copa de Garnacha frente a los viñedos del Campo de Borja',
    href: '/escapadas/enoaventurate',
    tag: 'Enoturismo',
  },
  {
    title: 'Love Garnacha',
    subtitle: 'Escapada romántica entre viñedos, catas privadas y alojamiento boutique.',
    image: '/images/hero-vinedos.png',
    imageAlt: 'Viñedos del Campo de Borja al atardecer',
    href: '/escapadas/love-garnacha',
    tag: 'Romántica',
  },
  {
    title: 'Ferias y festivales',
    subtitle: 'Vendimia, fiestas patronales y eventos culturales a lo largo del año.',
    image: '/images/exp-almendros.png',
    imageAlt: 'Almendros en flor durante las fiestas de primavera',
    href: '/escapadas/ferias',
    tag: 'Cultura',
  },
  {
    title: 'Con niños y escolares',
    subtitle: 'Actividades adaptadas para familias y grupos escolares en la naturaleza.',
    image: '/images/exp-senderismo.png',
    imageAlt: 'Familia senderista en el Moncayo',
    href: '/escapadas/familias',
    tag: 'Familias',
  },
  {
    title: 'Escapadas Low Cost',
    subtitle: 'Disfruta de la ruta con presupuesto ajustado: albergues, menús del día y rutas gratuitas.',
    image: '/images/exp-btt.png',
    imageAlt: 'Cicloturismo económico por la Ruta de la Garnacha',
    href: '/escapadas/low-cost',
    tag: 'Económico',
  },
  {
    title: 'Escapadas hasta 50 €',
    subtitle: 'Un día completo en la ruta por menos de 50 euros por persona.',
    image: '/images/territorio.png',
    imageAlt: 'Vista aérea del Campo de Borja',
    href: '/escapadas/hasta-50',
    tag: 'Hasta 50 €',
  },
  {
    title: 'Escapadas hasta 100 €',
    subtitle: 'Dos días con alojamiento, cata y visita a bodega incluidos.',
    image: '/images/exp-bodega.png',
    imageAlt: 'Interior de bodega con barricas de roble',
    href: '/escapadas/hasta-100',
    tag: 'Hasta 100 €',
  },
  {
    title: 'Escapadas VIP',
    subtitle: 'Experiencias exclusivas: catas privadas, rutas a medida y hoteles boutique.',
    image: '/images/exp-cata.png',
    imageAlt: 'Cata privada de Garnacha en bodega exclusiva',
    href: '/escapadas/vip',
    tag: 'Premium',
  },
]

export default function EscapadasPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          label="Escapadas"
          title="Una escapada para cada viajero"
          subtitle="Desde una noche romántica entre viñedos hasta un fin de semana de aventura con niños — diseña tu escapada perfecta a la Ruta de la Garnacha."
          image="/images/exp-cata.png"
          imageAlt="Atardecer sobre los viñedos del Campo de Borja"
          height="h-[55vh]"
        />

        {/* Price indicators strip */}
        <div className="border-b-2 border-primary bg-secondary">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-8 px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Rango de precios:
            </p>
            {[
              { label: 'Low Cost', desc: 'Gratis – 30 €/pers.' },
              { label: 'Hasta 50 €', desc: 'Un día completo' },
              { label: 'Hasta 100 €', desc: 'Fin de semana' },
              { label: 'VIP', desc: 'Experiencia exclusiva' },
            ].map((p) => (
              <div key={p.label} className="flex items-center gap-2">
                <span className="h-2 w-2 bg-primary" />
                <span className="text-sm font-medium text-foreground">{p.label}</span>
                <span className="text-xs text-muted-foreground">— {p.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <SectionGrid
          label="Escapadas"
          title="Elige tu escapada"
          description="Paquetes y propuestas de viaje diseñados para distintos presupuestos, temporadas y tipos de viajero."
        >
          {ESCAPADAS.map((e, i) => (
            <FichaCard
              key={e.href}
              title={e.title}
              subtitle={e.subtitle}
              image={e.image}
              imageAlt={e.imageAlt}
              href={e.href}
              tag={e.tag}
              index={i + 1}
            />
          ))}
        </SectionGrid>
      </main>
      <SiteFooter />
    </div>
  )
}
