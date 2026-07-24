import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ImageTextLayout } from '@/components/image-text-layout'
import { RelatedFichas } from '@/components/related-fichas'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const NOTICIA = {
  title: 'La Garnacha de Campo de Borja, reconocida como mejor variedad autóctona del año',
  date: '18 de julio de 2025',
  category: 'Vino',
  image: '/images/exp-cata.png',
  imageAlt: 'Copa de Garnacha tinto premiada en los Premios Nacionales de Enoturismo 2025',
  body: [
    'La Denominación de Origen Campo de Borja ha recibido el premio a la Mejor Variedad Autóctona en los Premios Nacionales de Enoturismo 2025, celebrados en el Museo del Prado de Madrid el pasado 15 de julio. El galardón reconoce el trabajo de años de los viticultores de la comarca por preservar y promover la Garnacha como una de las grandes uvas tintas del mundo.',
    'El presidente de la D.O. Campo de Borja, José Ramón Palacio, recogió el premio acompañado de representantes de las siete bodegas que forman parte de la Ruta de la Garnacha: "Este reconocimiento es de todos los viticultores del Campo de Borja, que durante generaciones han cuidado estas viejas cepas de Garnacha y que hoy ven recompensado su esfuerzo".',
    'La Garnacha, conocida como Grenache en el mundo anglosajón, es la variedad mayoritaria de la D.O. Campo de Borja, donde se cultivan más de 7.000 hectáreas a una altitud media de 450 metros sobre el nivel del mar, con la presencia del viento Cierzo y la influencia térmica del Moncayo como factores diferenciales.',
    'La premiación ha coincidido con la publicación del Plan Estratégico 2026-2029 de la Ruta de la Garnacha, que contempla la apertura de tres nuevas bodegas visitables, la habilitación de un centro de interpretación del vino en Borja y la creación de un sendero enoturístico que conecte los diecisiete municipios de la ruta.',
  ],
}

const RELATED = [
  {
    title: 'Nueva ruta BTT por los viñedos',
    subtitle: '2 de junio de 2025 · Rutas',
    image: '/images/exp-btt.png',
    imageAlt: 'Ruta BTT entre viñedos del Campo de Borja',
    href: '/prensa/noticias/nueva-ruta-btt-vinedos',
  },
  {
    title: 'Almendros en flor, récord de visitantes',
    subtitle: '14 de marzo de 2025 · Naturaleza',
    image: '/images/exp-almendros.png',
    imageAlt: 'Almendros en flor en el Campo de Borja',
    href: '/prensa/noticias/temporada-almendros-2025',
  },
  {
    title: 'La ruta renueva la Bandera Verde',
    subtitle: '28 de enero de 2025 · Sostenibilidad',
    image: '/images/territorio.png',
    imageAlt: 'Viñedos sostenibles del Campo de Borja',
    href: '/prensa/noticias/ecoturismo-bandera-verde',
  },
]

export default function NoticiaFichaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Breadcrumb label */}
        <div className="border-b-2 border-primary bg-primary">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.4em] text-primary-foreground/60">
                Sala de prensa · Noticias
              </span>
              <div className="mt-0.5 flex items-center gap-2">
                <span className="bg-primary-foreground px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-widest text-primary">
                  {NOTICIA.category}
                </span>
                <span className="text-xs text-primary-foreground/70">{NOTICIA.date}</span>
              </div>
            </div>
            <Link
              href="/prensa/noticias"
              className="hidden items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-primary-foreground/70 transition-opacity hover:opacity-70 sm:inline-flex"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
              Volver a noticias
            </Link>
          </div>
        </div>

        <ImageTextLayout
          image={NOTICIA.image}
          imageAlt={NOTICIA.imageAlt}
          label="Sala de prensa"
          title={NOTICIA.title}
          meta={NOTICIA.date}
        >
          {NOTICIA.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </ImageTextLayout>

        <RelatedFichas title="Más noticias" items={RELATED} />
      </main>
      <SiteFooter />
    </div>
  )
}
