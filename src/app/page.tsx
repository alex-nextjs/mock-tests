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
import './globals.css';
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
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
