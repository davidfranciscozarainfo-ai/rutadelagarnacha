import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { FichaCard } from '@/components/ficha-card'
import { SectionGrid } from '@/components/section-grid'

const PRENSA_ITEMS = [
  {
    title: 'Noticias',
    subtitle: 'Novedades de la ruta, la D.O. y el territorio.',
    image: '/images/hero-vinedos.png',
    imageAlt: 'Viñedos de la Ruta de la Garnacha',
    href: '/prensa/noticias',
    tag: 'Actualidad',
  },
  {
    title: 'Fotografías',
    subtitle: 'Galería de imágenes del territorio, bodegas y experiencias.',
    image: '/images/territorio.png',
    imageAlt: 'Fotografías de la Ruta de la Garnacha',
    href: '/prensa/fotografias',
    tag: 'Galería',
  },
  {
    title: 'Vídeos',
    subtitle: 'Piezas audiovisuales, reportajes y webinars.',
    image: '/images/exp-bodega.png',
    imageAlt: 'Vídeos de la Ruta de la Garnacha',
    href: '/prensa/videos',
    tag: 'Audiovisual',
  },
  {
    title: 'Agenda',
    subtitle: 'Eventos, festivales y actividades programadas.',
    image: '/images/exp-almendros.png',
    imageAlt: 'Almendros en flor — evento primaveral de la Ruta',
    href: '/prensa/agenda',
    tag: 'Eventos',
  },
  {
    title: 'Plan Director',
    subtitle: 'Gestión del paisaje vitícola 2017–2027 (PDF).',
    image: '/images/territorio.png',
    imageAlt: 'Plan Director de la Ruta de la Garnacha',
    href: '/prensa/plan-director',
    tag: 'Documento',
  },
  {
    title: 'Plan Estratégico',
    subtitle: 'Hoja de ruta del destino 2026–2029 (PDF).',
    image: '/images/hero-vinedos.png',
    imageAlt: 'Plan Estratégico de la Ruta de la Garnacha',
    href: '/prensa/plan-estrategico',
    tag: 'Documento',
  },
  {
    title: 'Folleto turístico',
    subtitle: 'Descarga el folleto oficial de la ruta.',
    image: '/images/exp-cata.png',
    imageAlt: 'Folleto turístico de la Ruta de la Garnacha',
    href: '/prensa/folleto',
    tag: 'Descarga',
  },
  {
    title: 'Dossier de prensa',
    subtitle: 'Documentación para medios y periodistas.',
    image: '/images/exp-gastronomia.png',
    imageAlt: 'Dossier de prensa de la Ruta de la Garnacha',
    href: '/prensa/dossier',
    tag: 'Descarga',
  },
]

export default function PrensaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          label="Sala de prensa"
          title="Prensa"
          subtitle="Recursos, documentos y materiales para medios de comunicación, periodistas e instituciones."
          image="/images/hero-vinedos.png"
          imageAlt="Paisaje de viñedos de la Ruta de la Garnacha"
          height="h-[50vh]"
        />

        <SectionGrid
          label="Sala de prensa"
          title="Recursos de prensa"
          description="Descarga documentos, consulta noticias y accede a la galería de recursos audiovisuales."
        >
          {PRENSA_ITEMS.map((item, i) => (
            <FichaCard
              key={item.href}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              imageAlt={item.imageAlt}
              href={item.href}
              tag={item.tag}
              index={i + 1}
            />
          ))}
        </SectionGrid>
      </main>
      <SiteFooter />
    </div>
  )
}
