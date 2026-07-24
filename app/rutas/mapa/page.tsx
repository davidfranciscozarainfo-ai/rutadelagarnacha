'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MapPin } from 'lucide-react'

const CATEGORIES = [
  'Todos',
  'Municipios',
  'Bodegas',
  'Arte y Patrimonio',
  'Naturaleza',
  'Dónde dormir',
  'Dónde comer',
  'Rutas',
]

// Placeholder pins for the interactive map
const PINS = [
  { id: 1, name: 'Borja', category: 'Municipios', x: 38, y: 55, href: '/descubrenos/arte-patrimonio' },
  { id: 2, name: 'Tarazona', category: 'Municipios', x: 22, y: 32, href: '/descubrenos/arte-patrimonio' },
  { id: 3, name: 'Ainzón', category: 'Municipios', x: 50, y: 48, href: '/descubrenos/arte-patrimonio' },
  { id: 4, name: 'Vera de Moncayo', category: 'Municipios', x: 30, y: 42, href: '/descubrenos/naturaleza' },
  { id: 5, name: 'Fuendejalón', category: 'Municipios', x: 62, y: 58, href: '/descubrenos/arte-patrimonio' },
  { id: 6, name: 'Bodegas Borsao', category: 'Bodegas', x: 40, y: 52, href: '/bodegas/borsao' },
  { id: 7, name: 'Bodegas Aragonesas', category: 'Bodegas', x: 64, y: 54, href: '/bodegas/aragonesas' },
  { id: 8, name: 'Bodegas Bordejé', category: 'Bodegas', x: 52, y: 46, href: '/bodegas/bordeje' },
  { id: 9, name: 'Pagos del Moncayo', category: 'Bodegas', x: 28, y: 40, href: '/bodegas/pagos-del-moncayo' },
  { id: 10, name: 'Catedral de Tarazona', category: 'Arte y Patrimonio', x: 20, y: 30, href: '/descubrenos/arte-patrimonio' },
  { id: 11, name: 'Castillo de Borja', category: 'Arte y Patrimonio', x: 36, y: 53, href: '/descubrenos/arte-patrimonio' },
  { id: 12, name: 'Parque Natural Moncayo', category: 'Naturaleza', x: 18, y: 38, href: '/descubrenos/naturaleza' },
  { id: 13, name: 'Soto del Ebro', category: 'Naturaleza', x: 72, y: 62, href: '/descubrenos/naturaleza' },
  { id: 14, name: 'Ruta BTT Viñedos', category: 'Rutas', x: 45, y: 50, href: '/rutas/cicloturismo' },
]

const CAT_COLORS: Record<string, string> = {
  Municipios: 'bg-foreground',
  Bodegas: 'bg-primary',
  'Arte y Patrimonio': 'bg-amber-700',
  Naturaleza: 'bg-green-700',
  'Dónde dormir': 'bg-sky-700',
  'Dónde comer': 'bg-orange-700',
  Rutas: 'bg-violet-700',
}

export default function MapaPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered =
    activeCategory === 'Todos' ? PINS : PINS.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Header */}
        <div className="border-b-2 border-primary bg-primary">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8 sm:px-6 lg:px-8">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.4em] text-primary-foreground/60">
                Rutas
              </span>
              <h1 className="mt-2 font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl">
                Mapa interactivo
              </h1>
            </div>
            <p className="hidden max-w-xs text-sm leading-relaxed text-primary-foreground/80 md:block">
              Explora municipios, bodegas, patrimonio y naturaleza en el mapa de la ruta.
            </p>
          </div>
        </div>

        {/* Category filters */}
        <div className="sticky top-0 z-30 border-b-2 border-primary bg-background">
          <div className="mx-auto flex max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 border-b-4 px-4 py-4 text-xs font-medium uppercase tracking-wide transition-colors ${
                  activeCategory === cat
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Map area */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
            {/* Map canvas */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-primary bg-muted">
              <img
                src="/images/territorio.png"
                alt="Territorio de la Ruta de la Garnacha"
                className="h-full w-full object-cover opacity-60"
              />
              {/* Overlay label */}
              <div className="absolute left-0 right-0 top-0 flex items-center justify-center bg-primary/80 py-2">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80">
                  Campo de Borja · Moncayo · Aragón
                </p>
              </div>
              {/* Pins */}
              {filtered.map((pin) => (
                <a
                  key={pin.id}
                  href={pin.href}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-full"
                  onMouseEnter={() => setHovered(pin.id)}
                  onMouseLeave={() => setHovered(null)}
                  aria-label={pin.name}
                >
                  <div className={`h-4 w-4 ${CAT_COLORS[pin.category] ?? 'bg-primary'} transition-transform hover:scale-125`} />
                  {hovered === pin.id && (
                    <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap bg-foreground px-2 py-1 text-xs text-primary-foreground">
                      {pin.name}
                    </div>
                  )}
                </a>
              ))}
            </div>

            {/* Legend / list */}
            <div className="border-2 border-primary">
              <div className="border-b-2 border-primary bg-primary px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80">
                  {activeCategory === 'Todos' ? `Todos los puntos (${PINS.length})` : `${activeCategory} (${filtered.length})`}
                </p>
              </div>
              <ul className="max-h-[480px] divide-y divide-border overflow-y-auto">
                {filtered.map((pin) => (
                  <li key={pin.id}>
                    <a
                      href={pin.href}
                      className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-secondary"
                    >
                      <span className={`h-3 w-3 shrink-0 ${CAT_COLORS[pin.category] ?? 'bg-primary'}`} />
                      <div>
                        <p className="text-sm font-medium text-foreground">{pin.name}</p>
                        <p className="text-xs text-muted-foreground">{pin.category}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4">
            {Object.entries(CAT_COLORS).map(([cat, color]) => (
              <div key={cat} className="flex items-center gap-2">
                <span className={`h-3 w-3 ${color}`} />
                <span className="text-xs text-muted-foreground">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
