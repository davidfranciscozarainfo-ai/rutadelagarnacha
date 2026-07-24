import { ReactNode } from 'react'

interface ImageTextLayoutProps {
  image: string
  imageAlt: string
  label?: string
  title: string
  meta?: string
  children: ReactNode
  actions?: ReactNode
}

export function ImageTextLayout({
  image,
  imageAlt,
  label,
  title,
  meta,
  children,
  actions,
}: ImageTextLayoutProps) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-primary">
        <img
          src={image || '/placeholder.svg'}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center">
        {label && (
          <span className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-primary">
            {label}
          </span>
        )}
        <h2 className="font-serif text-3xl font-semibold text-foreground text-balance sm:text-4xl">
          {title}
        </h2>
        {meta && (
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {meta}
          </p>
        )}
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/80">
          {children}
        </div>
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </div>
  )
}
