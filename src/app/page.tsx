import { Features } from '@/components/features';
import { HowItWorksTimelineCards } from '@/components/how-it-works';
import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Testimonials } from '@/components/testimonials';
import { Pricing } from '@/components/pricing';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navigation />
        <section id="home">
          <Hero />
        </section>

        <section id="features">
          <Features />
        </section>

        <HowItWorksTimelineCards />

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </div>
      <Footer />
    </div>
  );
}
