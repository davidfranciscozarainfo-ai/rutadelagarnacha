import { FichaCard } from '@/components/ficha-card'

interface RelatedItem {
  title: string
  subtitle?: string
  image: string
  imageAlt: string
  href: string
}

interface RelatedFichasProps {
  title?: string
  items: RelatedItem[]
}

export function RelatedFichas({ title = 'También te puede interesar', items }: RelatedFichasProps) {
  if (!items.length) return null

  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="mb-8 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
          {title}
        </h2>
        <div className="grid grid-cols-1 border-l-2 border-t-2 border-primary sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FichaCard
              key={item.href}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              imageAlt={item.imageAlt}
              href={item.href}
              index={i + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
