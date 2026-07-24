import { ReactNode } from 'react'

interface SectionGridProps {
  label?: string
  title: string
  description?: string
  children: ReactNode
  /** Tailwind grid-cols class. Default: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */
  cols?: string
}

export function SectionGrid({
  label,
  title,
  description,
  children,
  cols = 'sm:grid-cols-2 lg:grid-cols-3',
}: SectionGridProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {label && (
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
                {label}
              </span>
            )}
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground text-balance sm:text-5xl">
              {title}
            </h2>
          </div>
          {description && (
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className={`grid grid-cols-1 border-l-2 border-t-2 border-primary ${cols}`}>
          {children}
        </div>
      </div>
    </section>
  )
}
