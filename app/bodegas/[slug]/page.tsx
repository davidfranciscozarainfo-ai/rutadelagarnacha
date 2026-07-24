import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { AccessibilityBlock } from '@/components/accessibility-block'
import { AddToTripButton } from '@/components/add-to-trip-button'
import { RelatedFichas } from '@/components/related-fichas'
import { ProductBlock } from '@/components/product-block'
import { MapPin, Clock, Phone, Globe, CalendarDays } from 'lucide-react'

// Placeholder data — in production this would come from a CMS or database
const BODEGA = {
  slug: 'borsao',
  name: 'Bodegas Borsao',
  municipality: 'Borja',
  do: 'D.O. Campo de Borja',
  label: 'Bodega visitable',
  description:
    'Bodegas Borsao es una de las referencias de la Denominación de Origen Campo de Borja. Fundada en 1951, la cooperativa agrupa a más de 600 viticultores que cultivan 4.300 hectáreas de viñedo, la mayoría plantadas con Garnacha vieja. Sus vinos se exportan a más de 40 países y han sido reconocidos con las mejores puntuaciones de la D.O.',
  longText: [
    'La visita a Bodegas Borsao comienza en los viñedos centenarios que rodean las instalaciones y continúa por la moderna bodega de elaboración, donde se explican los procesos de vinificación de la Garnacha en sus distintas expresiones: rosado, tinto joven, crianza y reserva.',
    'La sala de barricas, con más de 3.000 toneles de roble francés y americano, es el punto central de la visita guiada. La cata final, conducida por el enólogo de la bodega, incluye tres referencias de la gama Borsao más la posibilidad de adquirir vinos directamente en la tienda de la bodega.',
    'Borsao ha sido pionera en el ecoturismo vinícola de la comarca: sus instalaciones cuentan con energía solar fotovoltaica, depuración propia de aguas residuales y un proyecto de biodiversidad en los márgenes de los viñedos.',
  ],
  image: '/images/exp-bodega.png',
  imageAlt: 'Bodega Borsao — barricas de roble y viñedos centenarios',
  address: 'Carretera Gallur-Tarazona, km 58 · 50540 Borja (Zaragoza)',
  phone: '976 867 116',
  web: 'www.borsao.com',
  schedule: 'Lun–Vie 10:00–14:00 · Sáb 10:00–13:00 (previa reserva)',
  season: 'Todo el año',
  product: {
    name: 'Visita guiada con cata',
    description:
      'Recorrido por viñedos y bodega de 90 minutos con cata comentada de 3 referencias Borsao. Guía especializado, vaso de cata y maridaje básico incluidos.',
    price: 14,
    priceLabel: 'por persona (mín. 4 personas)',
    includes: [
      'Visita guiada a viñedos y bodega (90 min)',
      'Cata comentada de 3 vinos',
      'Maridaje básico con embutido local',
      'Descuento del 10% en la tienda de la bodega',
    ],
    notes: 'Disponible en español, inglés y francés. Grupos a partir de 10 personas consultar tarifas especiales.',
  },
}

const RELATED = [
  {
    title: 'Bodegas Aragonesas',
    subtitle: 'Fuendejalón · D.O. Campo de Borja',
    image: '/images/exp-bodega.png',
    imageAlt: 'Bodegas Aragonesas en Fuendejalón',
    href: '/bodegas/aragonesas',
  },
  {
    title: 'Bodegas Bordejé',
    subtitle: 'Ainzón · D.O. Campo de Borja',
    image: '/images/exp-cata.png',
    imageAlt: 'Bodegas Bordejé en Ainzón',
    href: '/bodegas/bordeje',
  },
  {
    title: 'Bodegas Pagos del Moncayo',
    subtitle: 'Vera de Moncayo · D.O. Campo de Borja',
    image: '/images/territorio.png',
    imageAlt: 'Bodegas Pagos del Moncayo al pie del Moncayo',
    href: '/bodegas/pagos-del-moncayo',
  },
]

export default function BodegaFichaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          label={BODEGA.label}
          title={BODEGA.name}
          subtitle={`${BODEGA.municipality} · ${BODEGA.do}`}
          image={BODEGA.image}
          imageAlt={BODEGA.imageAlt}
          height="h-[55vh]"
        />

        {/* Main content + sidebar */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[2fr_1fr] lg:gap-16 lg:px-8">
          {/* Left: description + actions + meta */}
          <div>
            {/* Action bar */}
            <div className="mb-8 flex flex-wrap items-center gap-4 border-b-2 border-primary pb-6">
              <AddToTripButton />
            </div>

            <p className="text-sm leading-relaxed text-foreground/80">{BODEGA.description}</p>
            <div className="mt-6 space-y-4">
              {BODEGA.longText.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-foreground/80">
                  {p}
                </p>
              ))}
            </div>

            {/* Info table */}
            <div className="mt-10 border-2 border-primary">
              <div className="border-b-2 border-primary bg-primary px-5 py-3">
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/80">
                  Información práctica
                </p>
              </div>
              <dl className="divide-y divide-border">
                {[
                  { icon: <MapPin className="h-4 w-4" strokeWidth={1.5} />, label: 'Dirección', value: BODEGA.address },
                  { icon: <Phone className="h-4 w-4" strokeWidth={1.5} />, label: 'Teléfono', value: BODEGA.phone },
                  { icon: <Globe className="h-4 w-4" strokeWidth={1.5} />, label: 'Web', value: BODEGA.web },
                  { icon: <Clock className="h-4 w-4" strokeWidth={1.5} />, label: 'Horario', value: BODEGA.schedule },
                  { icon: <CalendarDays className="h-4 w-4" strokeWidth={1.5} />, label: 'Temporada', value: BODEGA.season },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-4 px-5 py-4">
                    <span className="mt-0.5 shrink-0 text-primary">{row.icon}</span>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {row.label}
                      </dt>
                      <dd className="mt-0.5 text-sm text-foreground">{row.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Accessibility */}
            <div className="mt-10">
              <AccessibilityBlock />
            </div>
          </div>

          {/* Right: product block */}
          <div className="lg:pt-16">
            <ProductBlock
              name={BODEGA.product.name}
              description={BODEGA.product.description}
              price={BODEGA.product.price}
              priceLabel={BODEGA.product.priceLabel}
              includes={BODEGA.product.includes}
              notes={BODEGA.product.notes}
            />
          </div>
        </div>

        <RelatedFichas title="Otras bodegas de la ruta" items={RELATED} />
      </main>
      <SiteFooter />
    </div>
  )
}
