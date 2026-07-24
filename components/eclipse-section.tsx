import { ArrowRight } from 'lucide-react'

export function EclipseSection() {
  return (
    <section className="border-b-2 border-primary bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Left: content */}
        <div className="flex flex-col justify-center border-primary px-4 py-14 sm:px-6 lg:border-r-2 lg:px-12 lg:py-20">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Experiencia especial
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground text-balance sm:text-5xl">
            Eclipse solar sobre el Moncayo
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Una jornada única para observar el eclipse desde los viñedos de la
            ruta. Guía de seguridad, puntos de observación recomendados y una
            cata al caer la luz.
          </p>
          <a
            href="#"
            className="group mt-8 inline-flex w-fit items-center gap-2 bg-primary px-6 py-3 text-sm font-medium uppercase tracking-wide text-primary-foreground transition-colors hover:bg-foreground"
          >
            Guía de seguridad
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
          </a>
        </div>

        {/* Right: flat geometric eclipse */}
        <div className="relative flex items-center justify-center bg-primary px-4 py-16 sm:py-24">
          <div className="relative h-56 w-56 sm:h-72 sm:w-72">
            {/* sun disc: broken white ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary-foreground" />
            <div className="absolute inset-0 rounded-full bg-primary-foreground" />
            {/* moon disc: solid purple offset, no glow */}
            <div className="absolute inset-0 translate-x-6 -translate-y-6 rounded-full bg-primary" />
          </div>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.35em] text-primary-foreground/70">
            Observación guiada
          </span>
        </div>
      </div>
    </section>
  )
}
