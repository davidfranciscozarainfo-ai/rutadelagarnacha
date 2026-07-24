"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import Image from "next/image"

const CATEGORIES = ["Todas", "Viñedos", "Bodegas", "Patrimonio", "Gastronomía", "Naturaleza", "Actividades"]

const PHOTOS = [
  { id: 1, src: "/images/hero-vinedos.png", alt: "Viñedos de la D.O. Campo de Borja al atardecer", category: "Viñedos", caption: "Viñedos de la D.O. Campo de Borja" },
  { id: 2, src: "/images/exp-bodega.png", alt: "Interior de una bodega con barricas de roble", category: "Bodegas", caption: "Barricas de roble — Bodegas Borsao" },
  { id: 3, src: "/images/exp-cata.png", alt: "Cata de vinos Garnacha", category: "Bodegas", caption: "Cata de Garnacha" },
  { id: 4, src: "/images/territorio.png", alt: "Vista aérea de los viñedos de Campo de Borja", category: "Viñedos", caption: "Vista aérea — Campo de Borja" },
  { id: 5, src: "/images/exp-gastronomia.png", alt: "Gastronomía aragonesa — Ternasco de Aragón", category: "Gastronomía", caption: "Ternasco de Aragón" },
  { id: 6, src: "/images/exp-senderismo.png", alt: "Senderismo en el Parque Natural del Moncayo", category: "Naturaleza", caption: "Parque Natural del Moncayo" },
  { id: 7, src: "/images/exp-btt.png", alt: "Cicloturismo entre viñedos", category: "Actividades", caption: "BTT entre viñedos" },
  { id: 8, src: "/images/exp-almendros.png", alt: "Almendros en flor con el Moncayo al fondo", category: "Naturaleza", caption: "Floración de almendros — Moncayo" },
  { id: 9, src: "/placeholder.svg?height=600&width=900", alt: "Catedral de Tarazona", category: "Patrimonio", caption: "Catedral de Tarazona" },
  { id: 10, src: "/placeholder.svg?height=600&width=900", alt: "Iglesia de Santa María de Borja", category: "Patrimonio", caption: "Colegiata de Santa María — Borja" },
  { id: 11, src: "/placeholder.svg?height=600&width=900", alt: "Vendimia tradicional", category: "Viñedos", caption: "Vendimia — septiembre 2024" },
  { id: 12, src: "/placeholder.svg?height=600&width=900", alt: "Mercado de productores locales", category: "Gastronomía", caption: "Mercado de Productores — Borja" },
]

export default function FotografiasPage() {
  const [activeCategory, setActiveCategory] = useState("Todas")
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = activeCategory === "Todas"
    ? PHOTOS
    : PHOTOS.filter(p => p.category === activeCategory)

  const current = lightbox !== null ? PHOTOS.find(p => p.id === lightbox) : null

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Fotografías"
          subtitle="Banco de imágenes de La Ruta de la Garnacha"
          image="/images/hero-vinedos.png"
        />

        <section className="bg-background py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Filter bar */}
            <div className="flex flex-wrap gap-0 border-b-2 border-primary/20 mb-12">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-sans text-xs font-semibold tracking-widest uppercase px-5 py-3 transition-colors border-b-2 -mb-[2px]
                    ${activeCategory === cat
                      ? "border-primary text-primary"
                      : "border-transparent text-foreground/50 hover:text-foreground"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
              {filtered.map((photo) => (
                <button
                  key={photo.id}
                  onClick={() => setLightbox(photo.id)}
                  className="group relative aspect-square overflow-hidden border border-background/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Ver foto: ${photo.caption}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end p-3">
                    <p className="font-sans text-xs text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
                      {photo.caption}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Download notice */}
            <div className="mt-12 border-t-2 border-primary/20 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="font-sans text-sm text-foreground/60 max-w-lg">
                Las fotografías están disponibles para uso editorial relacionado con La Ruta de la Garnacha. Para usos comerciales, contacta con el departamento de comunicación.
              </p>
              <a
                href="mailto:comunicacion@larutadelagarnacha.es"
                className="font-sans text-xs font-semibold tracking-widest uppercase text-primary border-b border-primary pb-0.5 hover:text-foreground hover:border-foreground transition-colors whitespace-nowrap"
              >
                Solicitar archivo →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label={current.caption}
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 font-sans text-primary-foreground/70 hover:text-primary-foreground text-2xl leading-none"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            ✕
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[80vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <p className="font-sans text-xs text-primary-foreground/60 mt-4 text-center tracking-wide">
              {current.caption}
            </p>
          </div>
        </div>
      )}

      <SiteFooter />
    </>
  )
}
