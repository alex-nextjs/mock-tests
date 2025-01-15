import {
  Hero,
  FAQ,
  Features,
  Footer,
  HowItWorksTimelineCards,
  Navigation,
  Pricing,
  Testimonials,
} from '@/components/onboardng-ui';

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
