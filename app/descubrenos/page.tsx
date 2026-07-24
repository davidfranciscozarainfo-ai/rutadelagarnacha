import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { FichaCard } from '@/components/ficha-card'
import { SectionGrid } from '@/components/section-grid'

const CATEGORIES = [
  {
    title: 'Cómo llegar',
    subtitle: 'Por carretera, tren o avión desde Zaragoza, Madrid o Barcelona.',
    image: '/images/territorio.png',
    imageAlt: 'Vista aérea de las carreteras del Campo de Borja',
    href: '/descubrenos/como-llegar',
    tag: 'Transporte',
  },
  {
    title: 'Servicios al visitante',
    subtitle: 'Oficinas de turismo, información y atención al viajero.',
    image: '/images/exp-senderismo.png',
    imageAlt: 'Oficina de turismo de la Ruta de la Garnacha',
    href: '/descubrenos/servicios',
    tag: 'Servicios',
  },
  {
    title: 'Dónde dormir',
    subtitle: 'Alojamientos rurales, hoteles y albergues certificados en la ruta.',
    image: '/images/hero-vinedos.png',
    imageAlt: 'Alojamiento rural con vistas a los viñedos del Moncayo',
    href: '/descubrenos/donde-dormir',
    tag: 'Alojamiento',
  },
  {
    title: 'Dónde comer',
    subtitle: 'Restaurantes, bares y mesones con cocina aragonesa de temporada.',
    image: '/images/exp-gastronomia.png',
    imageAlt: 'Plato de gastronomía aragonesa en la Ruta de la Garnacha',
    href: '/descubrenos/donde-comer',
    tag: 'Gastronomía',
  },
  {
    title: 'Cómo desplazarme',
    subtitle: 'Transporte local, rutas en coche, bus y movilidad en la comarca.',
    image: '/images/exp-btt.png',
    imageAlt: 'Cicloturismo por los caminos entre viñedos del Campo de Borja',
    href: '/descubrenos/desplazarse',
    tag: 'Movilidad',
  },
  {
    title: 'Qué comprar',
    subtitle: 'Vinos, aceites, artesanía y productos locales de la comarca.',
    image: '/images/exp-almendros.png',
    imageAlt: 'Productos locales de la Ruta de la Garnacha',
    href: '/descubrenos/que-comprar',
    tag: 'Comercio',
  },
  {
    title: 'Arte y Patrimonio',
    subtitle: 'Museos, catedrales, castillos y el mudéjar aragonés.',
    image: '/images/hero-vinedos.png',
    imageAlt: 'Patrimonio mudéjar de Tarazona',
    href: '/descubrenos/arte-patrimonio',
    tag: 'Cultura',
  },
  {
    title: 'Naturaleza',
    subtitle: 'El Parque Natural del Moncayo, espacios naturales y fauna singular.',
    image: '/images/exp-senderismo.png',
    imageAlt: 'Parque Natural del Moncayo en otoño',
    href: '/descubrenos/naturaleza',
    tag: 'Naturaleza',
  },
  {
    title: 'Turismo accesible',
    subtitle: 'Recursos, alojamientos y actividades adaptadas para todos.',
    image: '/images/territorio.png',
    imageAlt: 'Accesibilidad en la Ruta de la Garnacha',
    href: '/descubrenos/accesible',
    tag: 'Accesibilidad',
  },
]

export default function DescubrenosPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          label="Planifica tu visita"
          title="Descúbrenos"
          subtitle="Todo lo que necesitas para organizar tu viaje a la Ruta de la Garnacha: cómo llegar, dónde dormir, qué comer y qué ver."
          image="/images/hero-vinedos.png"
          imageAlt="Viñedos del Campo de Borja con el Moncayo al fondo"
          height="h-[55vh]"
        />

        <SectionGrid
          label="Descúbrenos"
          title="Planifica tu visita"
          description="Selecciona una categoría para obtener toda la información práctica."
        >
          {CATEGORIES.map((cat, i) => (
            <FichaCard
              key={cat.href}
              title={cat.title}
              subtitle={cat.subtitle}
              image={cat.image}
              imageAlt={cat.imageAlt}
              href={cat.href}
              tag={cat.tag}
              index={i + 1}
            />
          ))}
        </SectionGrid>
      </main>
      <SiteFooter />
    </div>
  )
}
