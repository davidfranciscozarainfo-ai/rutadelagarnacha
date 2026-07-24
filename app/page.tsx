import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { EclipseSection } from '@/components/eclipse-section'
import { Experiences } from '@/components/experiences'
import { Territory } from '@/components/territory'
import { AppBanner } from '@/components/app-banner'
import { Partners } from '@/components/partners'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <EclipseSection />
        <Experiences />
        <Territory />
        <AppBanner />
        <Partners />
      </main>
      <SiteFooter />
    </div>
  )
}
