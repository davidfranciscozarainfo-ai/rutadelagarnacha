import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface FichaCardProps {
  title: string
  subtitle?: string
  tag?: string
  image: string
  imageAlt: string
  href: string
  index?: number
}

export function FichaCard({ title, subtitle, tag, image, imageAlt, href, index }: FichaCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col border-b-2 border-r-2 border-primary bg-background transition-colors hover:bg-primary"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image || '/placeholder.svg'}
          alt={imageAlt}
          className="h-full w-full object-cover grayscale-[0.1] transition-transform duration-500 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute left-0 top-4 bg-primary px-3 py-1 text-[0.65rem] font-medium uppercase tracking-widest text-primary-foreground">
            {tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          {index !== undefined && (
            <span className="font-serif text-sm text-primary transition-colors group-hover:text-primary-foreground">
              {String(index).padStart(2, '0')}
            </span>
          )}
          <ArrowUpRight
            className="ml-auto h-4 w-4 text-primary transition-colors group-hover:text-primary-foreground"
            strokeWidth={1.75}
          />
        </div>
        <h3 className="mt-2 font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary-foreground sm:text-2xl">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  )
}
