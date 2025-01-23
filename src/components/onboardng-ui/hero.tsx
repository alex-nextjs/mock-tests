import { Button } from '@/components/ui/button';
import { WEBSITE_NAME } from '@/constants/constants';
import { Monitor, BarChart2, Book } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="py-12 md:py-16 bg-background">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              &#34;Learn, Practice, and Succeed – Your SSC Journey Starts Here!&#34;
            </h1>
            <p className="text-lg text-muted-foreground">
              Join {WEBSITE_NAME} platform where learning meets achievement.
              Access interactive tests, quizzes, and mocks, track your progress,
              and prepare smarter with tailored tools designed for your success.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              className="text-teal-600 dark:text-teal-400 hover:bg-teal-600/10 dark:hover:bg-teal-400/10"
            >
              Explore Quizzes
            </Button>
            <Button
              className="bg-teal-600 dark:bg-teal-400 hover:bg-teal-700 dark:hover:bg-teal-500 text-background"
            >
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/hero.webp"
            alt="Student thinking with laptop"
            width={750}
            height={450}
            className="rounded-2xl object-cover border"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 lg:p-8">
            <div className="bg-card rounded-xl shadow-lg dark:shadow-neutral-800/50 p-3 flex items-center gap-2 self-start">
              <div className="bg-teal-600 dark:bg-teal-400 rounded-lg p-2">
                <Monitor className="h-5 w-5 text-white dark:text-teal-900" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Weekly Live Mocks</div>
                <div className="text-xs text-muted-foreground">
                  accurately curated by experts
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <div className="bg-card rounded-xl shadow-lg dark:shadow-neutral-800/50 p-3 self-start">
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  <span className="text-sm font-medium text-foreground">
                    Test Performance Report
                  </span>
                </div>
              </div>
              <div className="bg-card rounded-xl shadow-lg dark:shadow-neutral-800/50 p-3 self-end">
                <div className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Previous Year Papers (PYPs)
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Comprehensive collection of solved past exams
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}