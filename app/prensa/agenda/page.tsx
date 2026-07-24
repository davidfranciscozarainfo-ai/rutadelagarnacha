"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import Link from "next/link"
import { AddToTripButton } from "@/components/add-to-trip-button"

const EVENTS: Record<string, { title: string; category: string; place: string; desc: string }[]> = {
  "2025-05-03": [
    {
      title: "Jornada de Puertas Abiertas — Bodegas Borsao",
      category: "Bodega",
      place: "Borja",
      desc: "Visita guiada gratuita a las instalaciones de Bodegas Borsao con degustación de Garnacha joven y envejecida. Aforo limitado. Reserva previa.",
    },
  ],
  "2025-05-10": [
    {
      title: "Senderismo por el Moncayo — Ruta de los Tajos",
      category: "Naturaleza",
      place: "Tarazona",
      desc: "Ruta guiada de dificultad media por el Parque Natural del Moncayo. Salida desde la plaza mayor de Tarazona a las 9:00 h. Duración aproximada: 5 h.",
    },
    {
      title: "Mercado de Productores Locales",
      category: "Gastronomía",
      place: "Borja",
      desc: "Mercado mensual de productores locales con vinos, aceites, conservas y artesanía de la comarca de Campo de Borja.",
    },
  ],
  "2025-05-17": [
    {
      title: "Cata Vertical Garnacha — Cinco Décadas",
      category: "Cata",
      place: "Ainzón",
      desc: "Cata comentada de cinco añadas de Garnacha de la D.O. Campo de Borja seleccionadas por el enólogo Marcos Viñuales. Plaza única: 25€.",
    },
  ],
  "2025-05-24": [
    {
      title: "Cicloturismo entre Viñedos — Etapa Borja–Tarazona",
      category: "Deporte",
      place: "Borja / Tarazona",
      desc: "Salida en bicicleta por el carril bici que conecta Borja y Tarazona atravesando los viñedos de la D.O. Campo de Borja. Distancia: 22 km.",
    },
  ],
  "2025-06-07": [
    {
      title: "Festival de la Garnacha — Edición 2025",
      category: "Festival",
      place: "Borja",
      desc: "Festival anual de la Garnacha con bodegas participantes, catas, maridajes, música en directo y exposición fotográfica sobre el paisaje vitícola.",
    },
  ],
}

const DAYS_OF_WEEK = ["L", "M", "X", "J", "V", "S", "D"]

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

const CATEGORY_COLORS: Record<string, string> = {
  Bodega: "bg-primary",
  Naturaleza: "bg-[#4a7c59]",
  Gastronomía: "bg-[#b85c38]",
  Cata: "bg-primary",
  Deporte: "bg-[#2a6496]",
  Festival: "bg-primary",
}

export default function AgendaCalendarPage() {
  const today = new Date(2025, 4, 1) // May 2025
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<string | null>("2025-05-10")

  const firstDay = new Date(year, month, 1).getDay()
  const startOffset = firstDay === 0 ? 6 : firstDay - 1
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
    setSelectedDate(null)
  }
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
    setSelectedDate(null)
  }

  const dateKey = (d: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`

  const selectedEvents = selectedDate ? (EVENTS[selectedDate] ?? []) : []

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Agenda"
          subtitle="Eventos, catas y actividades de La Ruta de la Garnacha"
          image="/placeholder.svg?height=400&width=1600"
        />

        <section className="bg-background py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Calendar */}
              <div className="lg:col-span-2">
                <div className="border border-primary/20">
                  {/* Month nav */}
                  <div className="flex items-center justify-between bg-primary px-5 py-4">
                    <button
                      onClick={prevMonth}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-lg leading-none"
                      aria-label="Mes anterior"
                    >
                      ←
                    </button>
                    <span className="font-sans font-semibold text-primary-foreground tracking-widest text-xs uppercase">
                      {MONTHS[month]} {year}
                    </span>
                    <button
                      onClick={nextMonth}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-lg leading-none"
                      aria-label="Mes siguiente"
                    >
                      →
                    </button>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 border-b border-primary/20">
                    {DAYS_OF_WEEK.map(d => (
                      <div key={d} className="text-center py-2 font-sans text-[11px] font-semibold tracking-widest text-primary/50 uppercase">
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Days grid */}
                  <div className="grid grid-cols-7">
                    {Array.from({ length: startOffset }).map((_, i) => (
                      <div key={`empty-${i}`} className="h-11 border-b border-r border-primary/10" />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1
                      const key = dateKey(day)
                      const hasEvents = !!EVENTS[key]
                      const isSelected = selectedDate === key
                      return (
                        <button
                          key={day}
                          onClick={() => setSelectedDate(isSelected ? null : key)}
                          className={`h-11 border-b border-r border-primary/10 relative flex flex-col items-center justify-center transition-colors
                            ${isSelected ? "bg-primary text-primary-foreground" : "hover:bg-primary/5 text-foreground"}
                          `}
                        >
                          <span className="font-sans text-sm">{day}</span>
                          {hasEvents && (
                            <span className={`absolute bottom-1.5 w-1 h-1 rounded-full ${isSelected ? "bg-primary-foreground" : "bg-primary"}`} />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-6 space-y-2">
                  <p className="font-sans text-xs font-semibold tracking-widest text-primary/50 uppercase mb-3">Categorías</p>
                  {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
                    <div key={cat} className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${color}`} />
                      <span className="font-sans text-xs text-foreground/70">{cat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Events for selected day */}
              <div className="lg:col-span-3">
                {selectedDate ? (
                  <>
                    <p className="font-sans text-xs font-semibold tracking-widest text-primary/50 uppercase mb-6">
                      {new Date(selectedDate + "T00:00:00").toLocaleDateString("es-ES", {
                        weekday: "long", day: "numeric", month: "long", year: "numeric",
                      })}
                    </p>
                    {selectedEvents.length === 0 ? (
                      <p className="font-sans text-foreground/50 text-sm">No hay eventos programados para este día.</p>
                    ) : (
                      <div className="space-y-0">
                        {selectedEvents.map((ev, i) => (
                          <article
                            key={i}
                            className="border-b-2 border-primary/20 py-7 first:border-t-2 first:border-t-primary/20"
                          >
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div>
                                <span className={`inline-block font-sans text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 mb-2 text-primary-foreground ${CATEGORY_COLORS[ev.category] ?? "bg-primary"}`}>
                                  {ev.category}
                                </span>
                                <h2 className="font-serif text-xl text-foreground leading-snug">{ev.title}</h2>
                                <p className="font-sans text-xs text-primary mt-1 tracking-wide">{ev.place}</p>
                              </div>
                            </div>
                            <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-5">{ev.desc}</p>
                            <div className="flex items-center gap-4">
                              <Link
                                href="/prensa/agenda"
                                className="font-sans text-xs font-semibold tracking-widest uppercase text-primary border-b border-primary pb-0.5 hover:text-foreground hover:border-foreground transition-colors"
                              >
                                Más información →
                              </Link>
                              <AddToTripButton label={ev.title} />
                            </div>
                          </article>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="h-full flex flex-col justify-center">
                    <p className="font-sans text-foreground/40 text-sm">
                      Selecciona un día en el calendario para ver los eventos programados.
                    </p>
                    <div className="mt-8 space-y-0">
                      <p className="font-sans text-xs font-semibold tracking-widest text-primary/50 uppercase mb-4">Próximos eventos</p>
                      {Object.entries(EVENTS).slice(0, 3).map(([date, evs]) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className="w-full text-left border-b border-primary/20 py-4 flex items-center gap-4 hover:bg-primary/5 transition-colors px-2 -mx-2"
                        >
                          <div className="w-10 text-center flex-shrink-0">
                            <span className="font-serif text-xl text-primary leading-none block">
                              {new Date(date + "T00:00:00").getDate()}
                            </span>
                            <span className="font-sans text-[10px] text-primary/60 uppercase tracking-widest">
                              {MONTHS[new Date(date + "T00:00:00").getMonth()].slice(0, 3)}
                            </span>
                          </div>
                          <div>
                            <p className="font-sans text-sm font-medium text-foreground">{evs[0].title}</p>
                            <p className="font-sans text-xs text-foreground/50">{evs[0].place}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
