import Link from 'next/link'

const COL_EXPLORA = [
  { label: 'Quiénes somos', href: '/quienes-somos' },
  { label: 'Bodegas', href: '/bodegas' },
  { label: 'Descúbrenos', href: '/descubrenos' },
  { label: 'Rutas', href: '/rutas' },
  { label: 'Escapadas', href: '/escapadas' },
  { label: 'Agenda', href: '/prensa/agenda' },
  { label: 'Prensa', href: '/prensa' },
]

const COL_PRENSA = [
  { label: 'Noticias', href: '/prensa/noticias' },
  { label: 'Fotografías', href: '/prensa/fotografias' },
  { label: 'Vídeos', href: '/prensa/videos' },
  { label: 'Plan Director', href: '/prensa/plan-director' },
  { label: 'Plan Estratégico', href: '/prensa/plan-estrategico' },
  { label: 'Dossier de prensa', href: '/prensa/dossier' },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:grid-cols-2 md:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <Link href="/" className="flex flex-col leading-none">
            <p className="font-serif text-2xl font-semibold">La Ruta de la Garnacha</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.4em] text-primary-foreground/70">
              Turismo
            </p>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
            Asociación para la Promoción Turística de La Ruta de la Garnacha. Campo de Borja · Aragón · España.
          </p>
        </div>

        {/* Explorar */}
        <nav aria-label="Explorar">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/60">
            Explorar
          </p>
          <ul className="mt-5 space-y-3">
            {COL_EXPLORA.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-primary-foreground/90 transition-opacity hover:opacity-70">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Prensa */}
        <nav aria-label="Prensa y recursos">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/60">
            Prensa
          </p>
          <ul className="mt-5 space-y-3">
            {COL_PRENSA.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-primary-foreground/90 transition-opacity hover:opacity-70">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/60">
            Contacto
          </p>
          <address className="mt-5 space-y-1 text-sm not-italic text-primary-foreground/90">
            <p>c/ Nueva, 6</p>
            <p>50540 Borja (Zaragoza)</p>
            <p>España</p>
            <p className="pt-3">
              <a href="tel:662614505" className="transition-opacity hover:opacity-70">
                662 614 505
              </a>
            </p>
            <p>
              <a href="mailto:info@larutadelagarnacha.es" className="transition-opacity hover:opacity-70">
                info@larutadelagarnacha.es
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} La Ruta de la Garnacha. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-opacity hover:opacity-70">
              Política de privacidad
            </a>
            <a href="#" className="transition-opacity hover:opacity-70">
              Descargar App
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
