import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const NOTICIAS = [
  {
    slug: 'garnacha-mejor-variedad-2025',
    date: '18 de julio de 2025',
    category: 'Vino',
    title: 'La Garnacha de Campo de Borja, reconocida como mejor variedad autóctona del año',
    summary:
      'La Denominación de Origen Campo de Borja recibe el premio a la Mejor Variedad Autóctona en los Premios Nacionales de Enoturismo 2025, celebrados en Madrid.',
    image: '/images/exp-cata.png',
    imageAlt: 'Copa de Garnacha tinto premiada en los Premios Nacionales de Enoturismo 2025',
  },
  {
    slug: 'nueva-ruta-btt-vinedos',
    date: '2 de junio de 2025',
    category: 'Rutas',
    title: 'Inaugurada la nueva ruta BTT por los viñedos del Campo de Borja',
    summary:
      'Un itinerario de 28 kilómetros en bicicleta de montaña conecta ahora los municipios de Borja, Ainzón, Fuendejalón y Magallón a través de caminos históricos entre viñas centenarias.',
    image: '/images/exp-btt.png',
    imageAlt: 'Nueva ruta de cicloturismo entre viñedos del Campo de Borja',
  },
  {
    slug: 'temporada-almendros-2025',
    date: '14 de marzo de 2025',
    category: 'Naturaleza',
    title: 'La temporada de almendros en flor registra récord de visitantes',
    summary:
      'Más de 12.000 personas visitaron la comarca del Moncayo durante la floración de los almendros este año, consolidando este fenómeno natural como uno de los grandes atractivos turísticos de la ruta.',
    image: '/images/exp-almendros.png',
    imageAlt: 'Visitantes entre los almendros en flor del Campo de Borja',
  },
  {
    slug: 'ecoturismo-bandera-verde',
    date: '28 de enero de 2025',
    category: 'Sostenibilidad',
    title: 'La Ruta de la Garnacha renueva la Bandera Verde de Ecoturismo España',
    summary:
      'Por tercer año consecutivo, la ruta mantiene la certificación de destino sostenible de Ecotourism Spain, gracias al plan de gestión ambiental y las iniciativas de biodiversidad en los viñedos.',
    image: '/images/territorio.png',
    imageAlt: 'Viñedos sostenibles del Campo de Borja',
  },
  {
    slug: 'vendimia-2024',
    date: '23 de septiembre de 2024',
    category: 'Vendimia',
    title: 'La vendimia 2024 arranca con una cosecha de alta calidad en la D.O. Campo de Borja',
    summary:
      'Las condiciones climáticas del verano han favorecido una maduración óptima de la Garnacha, con grados Brix superiores a la media y una acidez natural que promete vinos de gran expresión.',
    image: '/images/hero-vinedos.png',
    imageAlt: 'Vendimia en los viñedos de Campo de Borja',
  },
  {
    slug: 'expo-zaragoza-2024',
    date: '10 de mayo de 2024',
    category: 'Promoción',
    title: 'La Ruta de la Garnacha presente en la feria de turismo INTUR 2024',
    summary:
      'El stand de la ruta en INTUR Valladolid presentó los nuevos paquetes de escapadas y la actualización de la aplicación móvil, que incorpora la funcionalidad "Mi viaje" con exportación de itinerarios.',
    image: '/images/exp-gastronomia.png',
    imageAlt: 'Presentación en feria de turismo INTUR 2024',
  },
]

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          label="Sala de prensa"
          title="Noticias"
          subtitle="Actualidad de la Ruta de la Garnacha, la D.O. Campo de Borja y el territorio del Moncayo."
          image="/images/hero-vinedos.png"
          imageAlt="Viñedos de la Ruta de la Garnacha"
          height="h-[45vh]"
        />

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="border-l-2 border-t-2 border-primary">
            {NOTICIAS.map((noticia) => (
              <Link
                key={noticia.slug}
                href={`/prensa/noticias/${noticia.slug}`}
                className="group flex flex-col border-b-2 border-r-2 border-primary bg-background transition-colors hover:bg-primary sm:flex-row"
              >
                <div className="aspect-[4/3] w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-48 md:w-64">
                  <img
                    src={noticia.image || '/placeholder.svg'}
                    alt={noticia.imageAlt}
                    className="h-full w-full object-cover grayscale-[0.1] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-widest text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary">
                      {noticia.category}
                    </span>
                    <span className="text-xs text-muted-foreground transition-colors group-hover:text-primary-foreground/70">
                      {noticia.date}
                    </span>
                  </div>
                  <h2 className="mt-2 font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary-foreground sm:text-2xl">
                    {noticia.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                    {noticia.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-primary transition-colors group-hover:text-primary-foreground">
                    Leer noticia
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
