import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img
          src="/images/hero-vinedos.png"
          alt="Viñedos de Garnacha al atardecer con el Moncayo al fondo"
          className="h-full w-full object-cover"
        />
        {/* solid purple veil, never a gradient */}
        <div className="absolute inset-0 bg-primary/35" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-14 sm:px-6 lg:px-8">
            <span className="mb-4 inline-flex w-fit items-center gap-3 bg-primary px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground">
              La Ruta de la Garnacha
              <span className="h-3 w-px bg-primary-foreground/50" />
              Turismo
            </span>
            <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.05] text-background text-balance drop-shadow-sm sm:text-6xl lg:text-7xl">
              Tierra de viñedos, pueblos y montaña
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-background/90 sm:text-lg">
              Un recorrido enoturístico por el Campo de Borja, entre cepas viejas
              de Garnacha y las laderas del Moncayo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experiencias"
                className="group inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium uppercase tracking-wide text-primary-foreground transition-colors hover:bg-background hover:text-primary"
              >
                Ver experiencias
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
              </a>
              <a
                href="#territorio"
                className="inline-flex items-center gap-2 border border-background px-6 py-3 text-sm font-medium uppercase tracking-wide text-background transition-colors hover:bg-background hover:text-foreground"
              >
                Descubrir el territorio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
