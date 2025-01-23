'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Pen, Star, Crown, Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    badge: 'Standard Plan',
    icon: Pen,
    price: {
      monthly: 0,
      annually: 0,
    },
    description:
      'Perfect for beginners and casual learners starting their SSC journey.',
    features: [
      'Access to basic courses',
      'Limited practice tests',
      'Progress tracking for 1 subject',
      'Access to community forums',
      'Basic study materials',
    ],
    cta: 'Get Started for Free',
    highlight: [],
  },
  {
    name: 'Pro Plus+',
    badge: 'Pro Plus+ Plan',
    icon: Crown,
    price: {
      monthly: 20,
      annually: 199,
    },
    description: 'For professionals and aspirants targeting top scores.',
    features: [
      'Unlimited attempts',
      'Unlimited solutions',
      'Advanced mock exams',
      '1-on-1 mentor support',
      'Exclusive webinars',
    ],
    cta: 'Get Started with Pro Plus+',
    highlight: ['Unlimited', 'attempts', 'solutions'],
  },
  {
    name: 'Pro',
    badge: 'Pro Plan',
    icon: Star,
    price: {
      monthly: 10,
      annually: 99,
    },
    description:
      'Ideal for serious learners and SSC aspirants aiming for success.',
    features: [
      'Everything in Free Plan',
      'Unlock all courses and tests',
      'AI-driven recommendations',
      'Detailed performance analytics',
      'Access to live mentor sessions',
    ],
    cta: 'Get Started with Pro',
    highlight: [],
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-teal-600 dark:text-teal-400 sm:text-4xl">
            Choose a Plan That Fits Your Goals
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Affordable and flexible options for every learner
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span
              className={`text-sm ${!isAnnual ? 'text-slate-900 dark:text-slate-200 font-medium' : 'text-slate-500 dark:text-slate-400'}`}
            >
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-[#14B8A6]"
            />
            <span
              className={`text-sm ${isAnnual ? 'text-gray-900 dark:text-slate-200 font-medium' : 'text-gray-500 dark:text-slate-400'}`}
            >
              Annually
              <Badge
                variant="secondary"
                className="ml-2 bg-[#14B8A6]/10 text-[#14B8A6] hover:bg-[#14B8A6]/20"
              >
                Save 17%
              </Badge>
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center md:flex-row p-4 items-stretch gap-4 md:gap-0 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`
                relative flex flex-col p-6
                ${index === 1 ? 'bg-gradient-to-br from-[#14B8A6] via-teal-600 to-[#27b8ac] text-white md:transform md:scale-105 md:z-10' : 'bg-white dark:bg-gradient-to-br dark:from-slate-600 dark:via-slate-800 dark:to-slate-600'}
                ${index === 0 ? 'md:mr-[-10px]' : ''}
                ${index === 2 ? 'md:ml-[-10px]' : ''}
                rounded-2xl hover:shadow-lg transition-shadow duration-300
              `}
            >
              <div
                className={`
                h-12 w-12 rounded-lg
                ${index === 1 ? 'bg-white/10' : 'bg-[#14B8A6]/10'}
                flex items-center justify-center mb-4
              `}
              >
                <plan.icon
                  className={`h-6 w-6 ${index === 1 ? 'text-white' : 'text-[#14B8A6]'}`}
                />
              </div>

              <div
                className={`
                inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit
                ${index === 1
                    ? 'bg-white/10 text-white'
                    : 'bg-[#14B8A6]/10 text-[#14B8A6]'
                  }
              `}
              >
                {plan.badge}
              </div>

              <h2 className="text-3xl font-bold mb-1">
                ${isAnnual ? plan.price.annually : plan.price.monthly}
              </h2>

              <p className="text-xs mb-4">
                {isAnnual ? 'per year' : 'per month'}
              </p>

              <p
                className={`text-sm mb-6 ${index === 1 ? 'text-white/80' : 'text-gray-600 dark:text-slate-400'}`}
              >
                {plan.description}
              </p>

              <div className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div
                      className={`
                      h-4 w-4 rounded-full flex items-center justify-center
                      
                    `}
                    >
                      <Check
                        className={`h-3 w-3 ${index === 1 ? 'text-white' : 'text-[#14B8A6]'} stroke-[3]`}
                      />
                    </div>
                    <span
                      className={`text-sm ${index === 1 ? 'text-white/90' : 'text-gray-600 dark:text-slate-200'}`}
                    >
                      {plan.highlight.some((highlight) =>
                        feature.toLowerCase().includes(highlight)
                      ) ? (
                        <span >
                          {feature.split(' ').map((word, wordIndex) =>
                            plan.highlight.some((highlight) =>
                              word.toLowerCase().includes(highlight)
                            ) ? (
                              <span
                                key={wordIndex}
                                className={
                                  index === 1
                                    ? 'text-white font-semibold'
                                    : 'text-[#14B8A6] font-semibold'
                                }
                              >
                                {word}{' '}
                              </span>
                            ) : (
                              <span key={wordIndex}>{word} </span>
                            )
                          )}
                        </span>
                      ) : (
                        feature
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block w-full">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span>{plan.cta}</span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
