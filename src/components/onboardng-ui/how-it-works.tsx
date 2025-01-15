'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  UserPlus,
  Search,
  ClipboardList,
  LineChart,
  Users,
} from 'lucide-react';

const steps = [
  {
    title: 'Sign Up',
    description:
      'Create your account in seconds to start your learning journey.',
    icon: UserPlus,
  },
  {
    title: 'Explore Courses',
    description:
      'Browse through our wide range of curated courses tailored to your needs.',
    icon: Search,
  },
  {
    title: 'Take Practice Tests',
    description:
      'Practice with interactive mock tests and real-time feedback to sharpen your skills.',
    icon: ClipboardList,
  },
  {
    title: 'Track Progress',
    description:
      'Monitor your performance and set milestones to stay on track.',
    icon: LineChart,
  },
  {
    title: 'Join the Community',
    description:
      'Connect with fellow aspirants and mentors to grow collaboratively.',
    icon: Users,
  },
];

function MobileStepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  return (
    <div id={`index-card-${index}`} className="flex flex-col items-center">
      <div className="w-[85%] bg-white rounded-xl border-2 border-gray-200 p-6 relative z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 flex items-center justify-center bg-teal-600 rounded-full shrink-0">
            <step.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold">{step.title}</h3>
        </div>
        <p className="text-gray-600">{step.description}</p>
      </div>
      {!isLast && <div className="h-12 w-0.5 bg-gray-200 my-2" />}
    </div>
  );
}

export function HowItWorksTimelineCards() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-16 overflow-hidden relative">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-3/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/2 left-1/3 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-2">
          How It Works: Simplify Your Learning Journey
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Follow these easy steps to get started and achieve your goals.
        </p>

        <div className="relative z-10">
          {isMobile ? (
            <div className="flex flex-col items-center space-y-0">
              {steps.map((step, index) => (
                <MobileStepCard
                  key={index}
                  step={step}
                  index={index}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          ) : (
            <>
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />

              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-5/12 relative ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}
                  >
                    <div
                      className={`
                      bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-gray-200 relative
                      transition-all duration-300 ease-in-out
                      hover:shadow-lg hover:-translate-y-0.5 hover:bg-white
                      before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2
                      before:border-[12px] before:border-transparent
                      ${
                        index % 2 === 0
                          ? "before:-left-[24px] before:border-r-gray-200 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-[20px] after:border-[10px] after:border-transparent after:border-r-white"
                          : "before:-right-[24px] before:border-l-gray-200 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[20px] after:border-[10px] after:border-transparent after:border-l-white"
                      }
                    `}
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 flex items-center justify-center bg-teal-600 rounded-full z-20 shadow-md">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-5/12" />
                </div>
              ))}
            </>
          )}
        </div>

        <div className="mt-16 text-center relative z-10">
          <Button
            size="lg"
            className="px-8 py-3 text-lg bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-lg transition-shadow"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}
