interface PageHeroProps {
  title: string
  subtitle?: string
  label?: string
  image: string
  imageAlt?: string
  /** Height class, defaults to h-[50vh] */
  height?: string
}

export function PageHero({
  title,
  subtitle,
  label,
  image,
  imageAlt = '',
  height = 'h-[50vh]',
}: PageHeroProps) {
  return (
    <section className={`relative w-full overflow-hidden ${height} min-h-[320px]`}>
      <img
        src={image || '/placeholder.svg'}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark veil */}
      <div className="absolute inset-0 bg-foreground/40" />
      {/* Purple left accent */}
      <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-primary" />
      <div className="relative flex h-full flex-col justify-end px-6 pb-10 sm:px-10 lg:px-16">
        {label && (
          <span className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-primary-foreground/70">
            {label}
          </span>
        )}
        <h1 className="font-serif text-4xl font-semibold leading-tight text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-base leading-relaxed text-primary-foreground/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
