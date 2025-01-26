import { cn } from '@/lib/utils';
import {
  Brain,
  PenTool,
  Users,
  LineChart,
  Keyboard,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Features() {
  const features = [
    {
      title: 'AI-Driven Recommendations',
      description:
        'Receive tailored course suggestions based on your learning habits and preferences.',
      icon: <Brain className="w-6 h-6" />,
      isNew: false,
    },
    {
      title: 'Interactive Practice Tests',
      description:
        'Simulate real exam scenarios with detailed analytics to improve accuracy and speed.',
      icon: <PenTool className="w-6 h-6" />,
      isNew: false,
    },
    {
      title: 'Aspirants Community',
      description:
        'Engage with like-minded learners and mentors for collaborative growth.',
      icon: <Users className="w-6 h-6" />,
      isNew: false,
    },
    {
      title: 'Progress Tracking',
      description:
        'Monitor your learning milestones and performance visually with intuitive graphs.',
      icon: <LineChart className="w-6 h-6" />,
      isNew: false,
    },
    {
      title: 'Typing Tests',
      description:
        'Boost your typing speed and accuracy with real-time feedback and practice modules.',
      icon: <Keyboard className="w-6 h-6" />,
      isNew: true,
    },
    {
      title: 'Smart Study Planner',
      description:
        'Create and follow personalized study schedules tailored to your goals.',
      icon: <Sparkles className="w-6 h-6" />,
      isNew: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Powerful Features for Effective Learning
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-neutral-400">
            Everything you need to excel in your preparation journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  isNew,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isNew?: boolean;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature',
        'border-neutral-200 dark:border-neutral-800',
        (index === 0 || index === 3) && 'lg:border-l',
        index < 3 && 'lg:border-b'
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <div className="inline-block p-3 rounded-lg bg-teal-50 group-hover:bg-teal-100 transition-colors dark:bg-teal-900/30 dark:group-hover:bg-teal-900/50">
          {icon}
        </div>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-teal-500 dark:group-hover/feature:bg-teal-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
          {isNew && (
            <Badge className="ml-2 bg-teal-600 text-white dark:bg-teal-700 dark:text-white">
              New
            </Badge>
          )}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
