import { Accessibility } from 'lucide-react'

interface AccessibilityBlockProps {
  text?: string
  items?: string[]
}

const DEFAULT_ITEMS = [
  'Aparcamiento adaptado en el acceso principal',
  'Entrada sin escalones y rampas de acceso',
  'Baño adaptado para personas con movilidad reducida',
  'Señalización en braille disponible',
  'Personal formado en atención a personas con diversidad funcional',
]

export function AccessibilityBlock({ text, items = DEFAULT_ITEMS }: AccessibilityBlockProps) {
  return (
    <section className="border-l-4 border-primary bg-secondary px-6 py-8 sm:px-8">
      <div className="flex items-center gap-3">
        <Accessibility className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
        <h2 className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
          Accesibilidad
        </h2>
      </div>
      {text && (
        <p className="mt-4 text-sm leading-relaxed text-foreground/80">{text}</p>
      )}
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
