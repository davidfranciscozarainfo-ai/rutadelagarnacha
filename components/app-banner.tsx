import { ArrowRight } from 'lucide-react'

export function AppBanner() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-20">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/70">
            La ruta en tu bolsillo
          </span>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-balance sm:text-5xl">
            Descarga la app y planifica tu escapada
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/80">
            Rutas, bodegas, agenda de eventos y tu viaje guardado, disponible
            allá donde vayas.
          </p>
        </div>
        <a
          href="#"
          className="group inline-flex shrink-0 items-center gap-3 border-2 border-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-primary-foreground hover:text-primary"
        >
          Descargar App
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
        </a>
      </div>
    </section>
  )
}
