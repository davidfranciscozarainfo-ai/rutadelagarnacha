import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { ArrowUpRight, FileDown } from 'lucide-react'
import Link from 'next/link'

const SECTIONS = [
  {
    id: 'apt',
    label: 'La asociación',
    title: 'APT Ruta de la Garnacha',
    body: 'La Asociación para la Promoción Turística de la Ruta de la Garnacha es la entidad que agrupa a los municipios, bodegas y empresas turísticas del Campo de Borja. Fue constituida en 2002 con el objetivo de promover el enoturismo en la comarca y la marca Garnacha como eje identitario del territorio.',
    cta: null,
  },
  {
    id: 'ruta-vino',
    label: 'Certificación nacional',
    title: 'Ruta del Vino de España',
    body: 'La Ruta de la Garnacha forma parte de las Rutas del Vino de España, el programa de certificación de destinos enoturísticos de calidad impulsado por ACEVIN. Esta distinción garantiza estándares de servicio, accesibilidad y experiencia al visitante en todos los establecimientos adheridos.',
    cta: { label: 'Ver certificación (PDF)', href: '#' },
  },
  {
    id: 'enoturismo',
    label: 'Aragón',
    title: 'Enoturismo Aragón',
    body: 'Integrada en la red de Enoturismo Aragón, la ruta colabora con las demás rutas vitivinícolas aragonesas —Somontano, Cariñena, Calatayud y Campo de Cariñena— para ofrecer una experiencia turística complementaria en todo el territorio autonómico.',
    cta: null,
  },
  {
    id: 'eit',
    label: 'Gobierno de Aragón',
    title: 'Espacio de Interés Turístico de Aragón',
    body: 'El Campo de Borja y la Sierra del Moncayo cuentan con la declaración de Espacio de Interés Turístico de Aragón, un reconocimiento que pone en valor su paisaje, su patrimonio arquitectónico y su riqueza vitícola como activos turísticos singulares.',
    cta: null,
  },
  {
    id: 'sostenible',
    label: 'Sostenibilidad',
    title: 'Destino sostenible — Bandera Verde',
    body: 'La ruta ostenta la Bandera Verde de Ecoturismo en España, concedida por Ecotourism Spain, que certifica el compromiso del destino con la conservación del entorno natural, la reducción del impacto ambiental y la implicación de las comunidades locales en el desarrollo turístico.',
    cta: { label: 'Plan de gestión de residuos (PDF)', href: '#' },
  },
  {
    id: 'municipios',
    label: 'Territorio',
    title: 'Municipios de la Ruta del Vino',
    body: 'La ruta atraviesa diecisiete municipios del Campo de Borja y el piedemonte del Moncayo: Borja, Tarazona, Ainzón, Bisimbre, Bulbuente, Bureta, El Buste, Fuendejalón, Grisel, Magallón, Maleján, Mallén, Pozuelo de Aragón, San Martín de la Virgen de Moncayo, Tabuenca, Torrellas y Vera de Moncayo.',
    cta: null,
  },
  {
    id: 'unete',
    label: 'Únete',
    title: 'Únete a la ruta del vino',
    body: 'Si eres una bodega, alojamiento, restaurante, empresa de actividades o comercio del territorio, puedes adherirte a la Ruta de la Garnacha y beneficiarte de la promoción turística conjunta, la formación y el sello de calidad de las Rutas del Vino de España.',
    cta: { label: 'Solicitar adhesión', href: 'mailto:info@larutadelagarnacha.es' },
  },
]

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          label="La asociación"
          title="Quiénes somos"
          subtitle="Una red de municipios, bodegas y empresas unidas por la Garnacha y el territorio del Moncayo."
          image="/images/territorio.png"
          imageAlt="Vista aérea de los viñedos del Campo de Borja"
          height="h-[55vh]"
        />

        {/* Intro strip */}
        <div className="border-b-2 border-primary bg-primary">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-8 sm:px-6 lg:px-8">
            <p className="max-w-2xl text-sm leading-relaxed text-primary-foreground/90">
              La Ruta de la Garnacha es un destino enoturístico situado en el Campo de Borja, al noroeste
              de Zaragoza, bajo la mirada del Moncayo. Desde 2002 aunamos territorio, vino y hospitalidad.
            </p>
            <Link
              href="#unete"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-80"
            >
              Únete a la ruta
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        {/* Sections */}
        <div className="mx-auto max-w-7xl divide-y-2 divide-border px-4 sm:px-6 lg:px-8">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="grid grid-cols-1 gap-8 py-14 md:grid-cols-[1fr_2fr] lg:gap-20">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.4em] text-primary">
                  {s.label}
                </span>
                <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground text-balance sm:text-3xl">
                  {s.title}
                </h2>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-foreground/80">{s.body}</p>
                {s.cta && (
                  <a
                    href={s.cta.href}
                    className="mt-5 inline-flex items-center gap-2 border-b-2 border-primary pb-0.5 text-xs font-medium uppercase tracking-wide text-primary transition-opacity hover:opacity-70"
                  >
                    <FileDown className="h-4 w-4" strokeWidth={1.75} />
                    {s.cta.label}
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
