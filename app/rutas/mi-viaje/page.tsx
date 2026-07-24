'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Printer, Download, Trash2, BookmarkX } from 'lucide-react'

interface TripItem {
  id: number
  category: string
  title: string
  subtitle: string
  image: string
}

const SAMPLE_ITEMS: TripItem[] = [
  {
    id: 1,
    category: 'Bodega',
    title: 'Bodegas Borsao',
    subtitle: 'Borja · D.O. Campo de Borja',
    image: '/images/exp-bodega.png',
  },
  {
    id: 2,
    category: 'Ruta',
    title: 'Ruta BTT Viñedos',
    subtitle: 'Campo de Borja · 18 km',
    image: '/images/exp-btt.png',
  },
  {
    id: 3,
    category: 'Gastronomía',
    title: 'Restaurante El Mercat',
    subtitle: 'Borja · Cocina aragonesa',
    image: '/images/exp-gastronomia.png',
  },
]

export default function MiViajePage() {
  const [items, setItems] = useState<TripItem[]>(SAMPLE_ITEMS)

  function removeItem(id: number) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  function clearAll() {
    setItems([])
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Header */}
        <div className="border-b-2 border-primary bg-primary">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8 sm:px-6 lg:px-8">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.4em] text-primary-foreground/60">
                Personaliza
              </span>
              <h1 className="mt-2 font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl">
                Mi viaje
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 px-4 py-2 text-xs font-medium uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-70"
              >
                <Printer className="h-4 w-4" strokeWidth={1.5} />
                Imprimir
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-primary-foreground px-4 py-2 text-xs font-medium uppercase tracking-wide text-primary transition-opacity hover:opacity-80"
              >
                <Download className="h-4 w-4" strokeWidth={1.5} />
                Exportar PDF
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <BookmarkX className="h-12 w-12 text-muted-foreground/40" strokeWidth={1} />
              <h2 className="mt-6 font-serif text-2xl font-semibold text-foreground">
                Tu viaje está vacío
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Añade bodegas, rutas, alojamientos y experiencias desde cualquier ficha del sitio
                usando el botón &ldquo;Añadir a Mi viaje&rdquo;.
              </p>
              <a
                href="/"
                className="mt-8 inline-block bg-primary px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-80"
              >
                Explorar la ruta
              </a>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {items.length} {items.length === 1 ? 'elemento' : 'elementos'} en tu viaje
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-destructive"
                >
                  <Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Vaciar lista
                </button>
              </div>

              {/* Items list */}
              <div className="border-l-2 border-t-2 border-primary">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-5 border-b-2 border-r-2 border-primary bg-background p-4 sm:p-5"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden border border-border sm:h-20 sm:w-20">
                      <img
                        src={item.image || '/placeholder.svg'}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium uppercase tracking-wide text-primary">
                        {item.category}
                      </span>
                      <h3 className="mt-0.5 font-serif text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="shrink-0 p-2 text-muted-foreground transition-colors hover:text-destructive"
                      aria-label={`Eliminar ${item.title}`}
                    >
                      <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-8 border-2 border-primary">
                <div className="border-b-2 border-primary bg-primary px-5 py-3">
                  <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/80">
                    Resumen del viaje
                  </p>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-foreground/80">
                    Tu itinerario incluye {items.length} paradas en la Ruta de la Garnacha. Exporta
                    el PDF o imprime esta página para llevar tu viaje contigo.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-2 border-2 border-primary px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Printer className="h-4 w-4" strokeWidth={1.5} />
                      Imprimir itinerario
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-80"
                    >
                      <Download className="h-4 w-4" strokeWidth={1.5} />
                      Descargar PDF
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
