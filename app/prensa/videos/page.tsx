import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"

const VIDEOS = [
  {
    id: "dQw4w9WgXcQ",
    title: "La Ruta de la Garnacha — Vídeo institucional 2024",
    desc: "Presentación oficial de La Ruta de la Garnacha: territorio, bodegas, paisaje y experiencias en el corazón del Campo de Borja.",
    category: "Institucional",
    year: "2024",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Vendimia en Campo de Borja — Reportaje",
    desc: "Crónica audiovisual de la vendimia 2024 en las bodegas asociadas a La Ruta de la Garnacha. Imágenes de la cosecha y el proceso de elaboración.",
    category: "Reportaje",
    year: "2024",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Tarazona y el Moncayo — Destino enoturístico",
    desc: "Documental sobre el patrimonio cultural y natural que rodea La Ruta de la Garnacha: la ciudad mudéjar de Tarazona y el Parque Natural del Moncayo.",
    category: "Destino",
    year: "2023",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Webinar: Tendencias del enoturismo en España 2025",
    desc: "Ponencia del director de La Ruta de la Garnacha en las Jornadas Nacionales de Enoturismo, organizada por Rutas del Vino de España.",
    category: "Webinar",
    year: "2025",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Garnacha en Copa — Serie de catas en vídeo",
    desc: "Primera entrega de la serie de microdocumentales sobre la variedad Garnacha: historia, territorio, expresión aromática y maridajes.",
    category: "Serie",
    year: "2024",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Eclipse Solar 2026 — Guía de observación desde la ruta",
    desc: "Vídeo informativo sobre el eclipse solar anular del 12 de agosto de 2026, visible desde La Ruta de la Garnacha. Incluye puntos de observación y consejos de seguridad.",
    category: "Evento",
    year: "2025",
  },
]

const CATEGORY_CLASSES: Record<string, string> = {
  Institucional: "bg-primary text-primary-foreground",
  Reportaje: "bg-foreground text-background",
  Destino: "bg-primary text-primary-foreground",
  Webinar: "bg-foreground/20 text-foreground",
  Serie: "bg-primary text-primary-foreground",
  Evento: "bg-foreground text-background",
}

export default function VideosPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Vídeos"
          subtitle="Documentales, reportajes y webinars sobre La Ruta de la Garnacha"
          image="/images/territorio.png"
        />

        <section className="bg-background py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Featured video */}
            <div className="mb-16">
              <p className="font-sans text-xs font-semibold tracking-widest text-primary/50 uppercase mb-6">Vídeo destacado</p>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                <div className="lg:col-span-3">
                  <div className="relative w-full aspect-video bg-foreground/10">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${VIDEOS[0].id}`}
                      title={VIDEOS[0].title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 pt-2">
                  <span className={`inline-block font-sans text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 mb-4 ${CATEGORY_CLASSES[VIDEOS[0].category]}`}>
                    {VIDEOS[0].category}
                  </span>
                  <h2 className="font-serif text-2xl text-foreground leading-snug mb-4">{VIDEOS[0].title}</h2>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">{VIDEOS[0].desc}</p>
                  <p className="font-sans text-xs text-foreground/40 mt-4">{VIDEOS[0].year}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-primary/20 mb-12" />

            {/* Rest of videos */}
            <p className="font-sans text-xs font-semibold tracking-widest text-primary/50 uppercase mb-8">Más vídeos</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {VIDEOS.slice(1).map((video) => (
                <article key={video.id + video.title} className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video bg-foreground/10">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`inline-block font-sans text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 ${CATEGORY_CLASSES[video.category]}`}>
                        {video.category}
                      </span>
                      <span className="font-sans text-xs text-foreground/40">{video.year}</span>
                    </div>
                    <h3 className="font-serif text-base text-foreground leading-snug mb-2">{video.title}</h3>
                    <p className="font-sans text-xs text-foreground/60 leading-relaxed">{video.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
