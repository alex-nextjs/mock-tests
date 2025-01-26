'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  UserPlus,
  Search,
  ClipboardList,
  LineChart,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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

const mobileCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const desktopCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const connectorVariants = {
  hidden: { height: 0 },
  visible: { height: '3rem' },
};

function MobileStepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  return (
    <motion.div
      ref={ref}
      id={`index-card-${index}`}
      className="flex flex-col items-center"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
      }}
    >
      <motion.div
        className={cn(
          'w-[85%] bg-white dark:bg-neutral-800 rounded-xl border-2 border-gray-200 dark:border-neutral-700 p-6 relative z-10'
        )}
        variants={mobileCardVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-3">
          <motion.div
            className="w-12 h-12 flex items-center justify-center bg-teal-600 dark:bg-teal-700 rounded-full shrink-0"
            variants={iconVariants}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <step.icon className="w-6 h-6 text-white" />
          </motion.div>
          <h3 className="text-xl font-semibold dark:text-gray-200">
            {step.title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
      </motion.div>

      {!isLast && (
        <motion.div
          className="w-0.5 bg-gray-200 dark:bg-neutral-700 my-2"
          variants={connectorVariants}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.div>
  );
}

export function HowItWorksTimelineCards() {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const MotionButton = motion.create(Button);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 overflow-hidden relative dark:bg-neutral-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: ['0%', '30%', '-20%', '0%'],
            y: ['0%', '-50%', '20%', '0%'],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-3/4 -right-1/4 w-96 h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: ['0%', '-30%', '20%', '0%'],
            y: ['0%', '50%', '-20%', '0%'],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 left-1/3 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: ['0%', '20%', '-30%', '0%'],
            y: ['0%', '-20%', '50%', '0%'],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 10,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-2"
        >
          <h2 className="text-4xl font-bold dark:text-white">
            How It Works: Simplify Your Learning Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Follow these easy steps to get started and achieve your goals.
          </p>
        </motion.div>

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
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-neutral-700" />

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                  variants={desktopCardVariants}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`w-5/12 relative ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}
                  >
                    <motion.div
                      className={cn(
                        'bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-neutral-700',
                        'relative hover:shadow-lg transition-shadow',
                        index % 2 === 0
                          ? 'hover:-translate-x-2'
                          : 'hover:translate-x-2',
                        `before:absolute before:top-1/2 before:-translate-y-1/2 before:border-[12px] before:border-transparent`,
                        index % 2 === 0
                          ? 'before:-left-[24px] before:border-r-gray-200 dark:before:border-r-neutral-700 after:-left-[20px] after:border-r-white dark:after:border-r-neutral-800'
                          : 'before:-right-[24px] before:border-l-gray-200 dark:before:border-l-neutral-700 after:-right-[20px] after:border-l-white dark:after:border-l-neutral-800'
                      )}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                  <motion.div
                    className={cn(
                      'w-12 h-12 absolute left-1/2 transform -translate-x-1/2 -translate-y-4',
                      'flex items-center justify-center bg-teal-600 dark:bg-teal-700 rounded-full z-20 shadow-md'
                    )}
                    variants={iconVariants}
                    transition={{ type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center relative z-10"
        >
          <Link href="/auth/register">
            <MotionButton
              size="lg"
              className="px-8 py-3 text-lg bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 text-white shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </MotionButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
