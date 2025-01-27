'use client';

import CourseCard from '@/components/dashboard-ui/batch-course-card';
import TestCard from '@/components/dashboard-ui/batch-test-card';
import { CourseInfoModal } from '@/components/dashboard-ui/course-info-modal';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function MyCoursesAndTests() {
  // Mock data - replace with actual data fetching logic
  const courses = [
    {
      id: 1,
      title: 'Current Affairs Master Course 2024',
      instructor: 'Gaurav Maurya',
      image: '/placeholder.png',
      liveClasses: 144,
      language: 'Hinglish',
      rating: 4.9,
      isLive: true,
    },
    {
      id: 2,
      title: 'Complete SSC Mathematics (Recorded Batch)',
      instructor: 'Rakesh Kumar',
      image: '/placeholder.png',
      liveClasses: 120,
      language: 'Hindi',
      rating: 4.8,
      isLive: false,
    },
    {
      id: 3,
      title: 'SSC Complete Package (Live + Recorded)',
      instructor: 'Team SSCPrep',
      image: '/placeholder.png',
      liveClasses: 250,
      language: 'Hinglish',
      rating: 4.7,
      isLive: true,
    },
  ];

  const tests = [
    {
      id: 1,
      title: 'SSC CGL (Tier I & Tier II) Mock Test 2024',
      testId: '27/1952',
      students: '1861.3k',
      progress: 1,
    },
    {
      id: 2,
      title: 'SSC CPO Mock Test Series 2024',
      testId: '28/1953',
      students: '892.5k',
      progress: 0,
    },
    {
      id: 3,
      title: 'SSC CHSL Complete Mock Tests',
      testId: '29/1954',
      students: '1254.8k',
      progress: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Courses Section */}
          <section>
            <header className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold mb-6 text-teal-600 dark:text-teal-400">
                My Courses
              </h2>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'sm' })
                )}
              >
                View All
              </Link>
            </header>
            <div className="grid lg:grid-cols-2 gap-3 sm:gap-4">
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>

          {/* Tests Section */}
          <section>
            <header className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold mb-6 text-teal-600 dark:text-teal-400">
                My Tests
              </h2>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'sm' })
                )}
              >
                View All
              </Link>
            </header>
            <div className="grid lg:grid-cols-2 gap-3 sm:gap-4">
              {tests.map((test) => (
                <TestCard key={test.id} {...test} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <CourseInfoModal />
    </div>
  );
}
