const STOPS = [
  { name: 'Borja', note: 'Capital de la comarca' },
  { name: 'Ainzón', note: 'Viñedos y bodegas' },
  { name: 'Vera de Moncayo', note: 'Monasterio de Veruela' },
  { name: 'Tabuenca', note: 'Miradores del Moncayo' },
  { name: 'Ambel', note: 'Patrimonio y palacios' },
]

export function Territory() {
  return (
    <section id="territorio" className="border-b-2 border-primary bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Territory image */}
        <div className="relative min-h-[340px] border-primary lg:border-r-2">
          <img
            src="/images/territorio.png"
            alt="Vista aérea del mosaico de viñedos del Campo de Borja"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Simple route diagram */}
        <div className="px-4 py-14 sm:px-6 lg:px-12 lg:py-20">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
            El territorio
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground text-balance sm:text-4xl">
            Un mapa de pueblos y viñas
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            La ruta enlaza pueblos, bodegas y paisajes entre el Ebro y el
            Moncayo. Elige por dónde empezar tu recorrido.
          </p>

          <ol className="mt-10">
            {STOPS.map((stop, i) => (
              <li key={stop.name} className="relative flex gap-5 pb-8 last:pb-0">
                {/* connector line */}
                {i < STOPS.length - 1 && (
                  <span className="absolute left-[7px] top-4 h-full w-0.5 bg-primary" aria-hidden />
                )}
                <span className="relative mt-1 h-4 w-4 shrink-0 rounded-full border-2 border-primary bg-background" />
                <div>
                  <p className="font-serif text-lg font-semibold text-foreground">{stop.name}</p>
                  <p className="text-sm text-muted-foreground">{stop.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
