import { cn } from '@/lib/utils';
import {
  Brain,
  PenTool,
  Users,
  LineChart,
  Keyboard,
  Sparkles,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';

export function Features() {
  const features = [
    {
      title: 'AI-Driven Recommendations',
      description:
        'Receive tailored course suggestions based on your learning habits and preferences.',
      icon: <Brain className="w-6 h-6" />,
      tooltip:
        'Our AI analyzes your learning patterns to suggest the most effective study materials.',
    },
    {
      title: 'Interactive Practice Tests',
      description:
        'Simulate real exam scenarios with detailed analytics to improve accuracy and speed.',
      icon: <PenTool className="w-6 h-6" />,
      tooltip:
        'Take mock tests that mirror actual exam conditions and get instant performance insights.',
    },
    {
      title: 'Aspirants Community',
      description:
        'Engage with like-minded learners and mentors for collaborative growth.',
      icon: <Users className="w-6 h-6" />,
      tooltip:
        'Connect with peers, share resources, and learn from experienced mentors in our community.',
    },
    {
      title: 'Progress Tracking',
      description:
        'Monitor your learning milestones and performance visually with intuitive graphs.',
      icon: <LineChart className="w-6 h-6" />,
      tooltip:
        'Track your improvement over time with detailed analytics and progress indicators.',
    },
    {
      title: 'Typing Tests',
      description:
        'Boost your typing speed and accuracy with real-time feedback and practice modules.',
      icon: <Keyboard className="w-6 h-6" />,
      tooltip:
        'Improve your typing skills with specialized exercises and instant performance metrics.',
      isNew: true,
    },
    {
      title: 'Smart Study Planner',
      description:
        'Create and follow personalized study schedules tailored to your goals.',
      icon: <Sparkles className="w-6 h-6" />,
      tooltip:
        'AI-powered study planner that adapts to your learning pace and schedule.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Effective Learning
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to excel in your preparation journey
          </p>
        </div>
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  tooltip,
  index,
  isNew,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  tooltip: string;
  index: number;
  isNew?: boolean;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
            (index === 0 || index === 3) &&
              'lg:border-l dark:border-neutral-800',
            index < 3 && 'lg:border-b dark:border-neutral-800'
          )}
        >
          {index < 3 && (
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
          )}
          {index >= 3 && (
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
          )}
          <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
            <div className="inline-block p-3 rounded-lg bg-teal-50 group-hover:bg-teal-100 transition-colors">
              {icon}
            </div>
          </div>
          <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-teal-500 transition-all duration-200 origin-center" />
            <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
              {title}
              {isNew && (
                <Badge className="ml-2 bg-teal-600 text-white">New</Badge>
              )}
            </span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
            {description}
          </p>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs">
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};
