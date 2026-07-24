import { ArrowUpRight } from 'lucide-react'

const EXPERIENCES = [
  {
    n: '01',
    title: 'Bodegas y viñedos',
    text: 'Visitas a bodegas familiares entre cepas viejas de Garnacha.',
    img: '/images/exp-bodega.png',
    alt: 'Barricas de roble en una bodega de la ruta',
  },
  {
    n: '02',
    title: 'Catas de Garnacha',
    text: 'Descubre la uva que da nombre y carácter a todo el territorio.',
    img: '/images/exp-cata.png',
    alt: 'Copas de vino tinto de Garnacha sobre mesa de madera',
  },
  {
    n: '03',
    title: 'Gastronomía',
    text: 'Ternasco, verduras de la ribera y recetas de raíz aragonesa.',
    img: '/images/exp-gastronomia.png',
    alt: 'Plato de ternasco asado, cocina tradicional aragonesa',
  },
  {
    n: '04',
    title: 'Cicloturismo y BTT',
    text: 'Rutas en bicicleta por caminos entre viñas y campos abiertos.',
    img: '/images/exp-btt.png',
    alt: 'Ciclista de montaña por un camino entre viñedos',
  },
  {
    n: '05',
    title: 'Senderismo en el Moncayo',
    text: 'Sendas de bosque y montaña al pie del pico más alto del Sistema Ibérico.',
    img: '/images/exp-senderismo.png',
    alt: 'Senderista caminando por un bosque de robles del Moncayo',
  },
  {
    n: '06',
    title: 'Almendros en flor',
    text: 'La primavera pinta de blanco y rosa los campos de la ruta.',
    img: '/images/exp-almendros.png',
    alt: 'Almendros en flor con el Moncayo al fondo',
  },
]

export function Experiences() {
  return (
    <section id="experiencias" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
              Paradas de la ruta
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground text-balance sm:text-5xl">
              Experiencias para no olvidar
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Cada parada es una manera distinta de vivir el territorio: vino,
            paisaje, cultura y tierra.
          </p>
        </div>

        {/* grid with 2px purple hairlines */}
        <div className="grid grid-cols-1 border-l-2 border-t-2 border-primary sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((exp) => (
            <a
              key={exp.n}
              href="#"
              className="group flex flex-col border-b-2 border-r-2 border-primary bg-background transition-colors hover:bg-primary"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={exp.img || '/placeholder.svg'}
                  alt={exp.alt}
                  className="h-full w-full object-cover grayscale-[0.15] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm text-primary transition-colors group-hover:text-primary-foreground">
                    Parada {exp.n}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-primary transition-colors group-hover:text-primary-foreground"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground transition-colors group-hover:text-primary-foreground">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                  {exp.text}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
