'use client'

import { useState, useRef, useEffect } from 'react'
import { MapPin, Phone, Mail, Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const NAV: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  {
    label: 'Quiénes somos',
    href: '/quienes-somos',
    children: [
      { label: 'APT Ruta de la Garnacha', href: '/quienes-somos#apt' },
      { label: 'Ruta del Vino de España', href: '/quienes-somos#ruta-vino' },
      { label: 'Enoturismo Aragón', href: '/quienes-somos#enoturismo' },
      { label: 'Espacio de Interés Turístico', href: '/quienes-somos#eit' },
      { label: 'Destino sostenible (Bandera Verde)', href: '/quienes-somos#sostenible' },
      { label: 'Municipios Ruta del Vino', href: '/quienes-somos#municipios' },
      { label: 'Únete a la ruta', href: '/quienes-somos#unete' },
    ],
  },
  {
    label: 'Bodegas',
    href: '/bodegas',
    children: [
      { label: 'Bodegas visitables', href: '/bodegas' },
      { label: 'Bodegas Aragonesas', href: '/bodegas/aragonesas' },
      { label: 'Bodegas Bordejé', href: '/bodegas/bordeje' },
      { label: 'Bodegas Borsao', href: '/bodegas/borsao' },
      { label: 'Bodegas Ainzón', href: '/bodegas/ainzon' },
      { label: 'Bodegas Pagos del Moncayo', href: '/bodegas/pagos-del-moncayo' },
      { label: 'Bodegas Román', href: '/bodegas/roman' },
      { label: 'Bodega Palmeri Sicilia', href: '/bodegas/palmeri-sicilia' },
    ],
  },
  {
    label: 'Descúbrenos',
    href: '/descubrenos',
    children: [
      { label: 'Cómo llegar', href: '/descubrenos/como-llegar' },
      { label: 'Servicios al visitante', href: '/descubrenos/servicios' },
      { label: 'Dónde dormir', href: '/descubrenos/donde-dormir' },
      { label: 'Dónde comer', href: '/descubrenos/donde-comer' },
      { label: 'Cómo desplazarme', href: '/descubrenos/desplazarse' },
      { label: 'Qué comprar', href: '/descubrenos/que-comprar' },
      { label: 'Arte y Patrimonio', href: '/descubrenos/arte-patrimonio' },
      { label: 'Naturaleza', href: '/descubrenos/naturaleza' },
      { label: 'Turismo accesible', href: '/descubrenos/accesible' },
    ],
  },
  {
    label: 'Rutas',
    href: '/rutas',
    children: [
      { label: 'Disfruta Conduciendo', href: '/rutas/conduciendo' },
      { label: 'Rutas temáticas', href: '/rutas/tematicas' },
      { label: 'Cicloturismo y BTT', href: '/rutas/cicloturismo' },
      { label: 'Camino de Santiago', href: '/rutas/camino-de-santiago' },
      { label: 'Senderismo', href: '/rutas/senderismo' },
      { label: 'Alrededores', href: '/rutas/alrededores' },
      { label: 'Mapa', href: '/rutas/mapa' },
      { label: 'Mi viaje', href: '/rutas/mi-viaje' },
    ],
  },
  {
    label: 'Escapadas',
    href: '/escapadas',
    children: [
      { label: 'Enoaventúrate', href: '/escapadas/enoaventurate' },
      { label: 'Love Garnacha', href: '/escapadas/love-garnacha' },
      { label: 'Ferias y festivales', href: '/escapadas/ferias' },
      { label: 'Con niños y escolares', href: '/escapadas/familias' },
      { label: 'Escapadas Low Cost', href: '/escapadas/low-cost' },
      { label: 'Escapadas hasta 50 €', href: '/escapadas/hasta-50' },
      { label: 'Escapadas hasta 100 €', href: '/escapadas/hasta-100' },
      { label: 'Escapadas VIP', href: '/escapadas/vip' },
    ],
  },
  {
    label: 'Agenda',
    href: '/prensa/agenda',
  },
  {
    label: 'Prensa',
    href: '/prensa',
    children: [
      { label: 'Plan Director', href: '/prensa/plan-director' },
      { label: 'Plan Estratégico', href: '/prensa/plan-estrategico' },
      { label: 'Folleto turístico', href: '/prensa/folleto' },
      { label: 'Boletines informativos', href: '/prensa/boletines' },
      { label: 'Dossier de prensa', href: '/prensa/dossier' },
      { label: 'Noticias', href: '/prensa/noticias' },
      { label: 'Fotografías', href: '/prensa/fotografias' },
      { label: 'Vídeos', href: '/prensa/videos' },
    ],
  },
]

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="absolute left-0 top-full z-50 min-w-[220px] border-2 border-primary bg-background py-1">
      {items.map((item) => (
        <li key={item.href} className="border-b border-border last:border-none">
          <Link
            href={item.href}
            className="block px-5 py-3 text-xs font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function NavItem({ item }: { item: (typeof NAV)[0] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className="group relative block text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-primary"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </Link>
      </li>
    )
  }

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="group relative flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-primary"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
      </button>
      {open && (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <DropdownMenu items={item.children} />
        </div>
      )}
    </li>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <header className="relative z-40">
      {/* Utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs tracking-wide sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span className="hidden sm:inline">Campo de Borja · Aragón</span>
            </span>
            <a href="mailto:info@larutadelagarnacha.es" className="hidden items-center gap-1.5 transition-opacity hover:opacity-70 md:inline-flex">
              <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
              info@larutadelagarnacha.es
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/rutas/mi-viaje" className="font-medium uppercase tracking-widest transition-opacity hover:opacity-70">
              Mi viaje (0)
            </Link>
            <a href="tel:662614505" className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70">
              <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
              662 614 505
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b-2 border-primary bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              La Ruta de la Garnacha
            </span>
            <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary">
              Turismo
            </span>
          </Link>

          <nav aria-label="Navegación principal">
            <ul className="hidden items-center gap-7 lg:flex">
              {NAV.map((item) => (
                <NavItem key={item.href} item={item} />
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center p-1 text-foreground lg:hidden"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav aria-label="Menú móvil" className="border-t-2 border-primary bg-background lg:hidden">
            <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-border last:border-none">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded((v) => (v === item.label ? null : item.label))
                        }
                        className="flex w-full items-center justify-between py-3 text-sm font-medium uppercase tracking-wide text-foreground"
                        aria-expanded={mobileExpanded === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                          strokeWidth={2}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <ul className="mb-2 ml-4 border-l-2 border-primary">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block py-2 pl-4 text-xs font-medium uppercase tracking-wide text-foreground/80 hover:text-primary"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-sm font-medium uppercase tracking-wide text-foreground hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
