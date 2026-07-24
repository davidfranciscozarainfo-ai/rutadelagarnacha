interface ProductBlockProps {
  name: string
  description: string
  price: number
  priceLabel?: string
  includes?: string[]
  notes?: string
}

export function ProductBlock({
  name,
  description,
  price,
  priceLabel = 'por persona',
  includes = [],
  notes,
}: ProductBlockProps) {
  return (
    <aside className="border-2 border-primary bg-background">
      <div className="border-b-2 border-primary bg-primary px-6 py-4">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/70">
          Reserva tu visita
        </p>
        <p className="mt-1 font-serif text-2xl font-semibold text-primary-foreground">{name}</p>
      </div>

      <div className="px-6 py-6">
        <p className="text-sm leading-relaxed text-foreground/80">{description}</p>

        {includes.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex items-baseline gap-2">
          <span className="font-serif text-4xl font-semibold text-primary">
            {price.toFixed(2)} €
          </span>
          <span className="text-xs text-muted-foreground">{priceLabel}</span>
        </div>

        <button
          type="button"
          className="mt-5 w-full bg-primary px-6 py-4 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground transition-opacity hover:opacity-80"
        >
          Reservar ahora
        </button>

        {notes && (
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{notes}</p>
        )}
      </div>
    </aside>
  )
}
