const PARTNERS = [
  'ACEVIN',
  'Rutas del Vino de España',
  'Enoturismo Aragón',
  'Turismo de Aragón',
  'Tierras del Moncayo',
  'LEADER',
  'Unión Europea · Feader',
  'Gobierno de Aragón',
]

export function Partners() {
  return (
    <section className="border-b-2 border-primary bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
          Con el apoyo de
        </p>
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {PARTNERS.map((p) => (
            <div key={p} className="flex items-center justify-center px-3 text-center">
              <span className="font-serif text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">
                {p}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center font-serif text-sm italic text-muted-foreground text-pretty">
          Fondo Europeo Agrícola de Desarrollo Rural: Europa invierte en las zonas rurales.
        </p>
      </div>
    </section>
  )
}
