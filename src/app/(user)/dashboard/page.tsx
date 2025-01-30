'use client';

import React, { useState, useEffect } from 'react';
import { Search, Clock, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import TestCard, {
  TestCardProps,
} from '@/components/dashboard-ui/batch-test-card';
import { NotificationPanel } from '@/components/dashboard-ui/notification-panel';

interface Course {
  title: string;
  course: string;
  image: string;
  schedule_time: string;
}

interface TypingTestsProps {
  title: string;
  exam_name: string;
  time: number;
}

interface AttemptedTest {
  title: string;
  date: string;
  resultAvailable: boolean;
  resultTime?: string;
}

const courses: Course[] = [
  {
    title: 'Class 1 - Introduction and Basics',
    image: '/placeholder.png',
    course: 'Profit and Loss',
    schedule_time: '09:00 AM',
  },
  {
    title: 'Class 1 - Introduction and Basics',
    image: '/placeholder.png',
    course: 'Percentage',
    schedule_time: '10:00 AM',
  },
];

const activeTests: TestCardProps[] = [
  {
    title: 'SSC CGL (Tier I & Tier II) Mock Test 2024',
    testId: '27/1952',
    students: '1861.3k',
    progress: 1,
  },
  {
    title: 'SSC CGL (Tier I & Tier II) Mock Test 2024',
    testId: '27/1952',
    students: '1861.3k',
    progress: 1,
  },

  {
    title: 'SSC CPO Mock Test Series 2024',
    testId: '28/1953',
    students: '892.5k',
    progress: 0,
  },
  {
    title: 'SSC CHSL Complete Mock Tests',
    testId: '29/1954',
    students: '1254.8k',
    progress: 5,
  },
];

const upcomingEvents = [
  { title: 'Percentage Class 2/3/4', time: '4 Hours' },
  { title: 'English Vocabulary', time: '3 Hours' },
  { title: 'General Knowledge', time: '1 Hour' },
];

const TypingTests: TypingTestsProps[] = [
  {
    title: 'Typing Test 1',
    exam_name: 'SSC CGL',
    time: 15,
  },
  {
    title: 'Typing Test 2',
    exam_name: 'SSC CHSL',
    time: 10,
  },
  {
    title: 'Typing Test 2',
    exam_name: 'SSC CGL',
    time: 15,
  },
];
const attemptedTests: AttemptedTest[] = [
  {
    title: 'General Knowledge Test',
    date: '2023-06-10',
    resultAvailable: true,
  },
  { title: 'Mathematics Aptitude', date: '2023-06-12', resultAvailable: true },
  { title: 'Logical Reasoning', date: '2023-06-14', resultAvailable: true },
];

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-slate-200 via-teal-200/60 to-slate-200 dark:from-slate-900 dark:via-teal-800/60 dark:to-slate-900 overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 w-full overflow-y-auto">
        <div className="max-w-[1200px] mx-auto p-4 md:p-8">
          <header className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full "
              />
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-200">
                  Welcome
                </div>
                <h1 className="text-xl font-semibold dark:text-white">
                  Angela Della
                </h1>
                <div className="text-sm text-slate-600 dark:text-slate-200">
                  {currentTime.toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Mobile Search Toggle */}
              <Button variant="outline" size="icon" className="md:hidden">
                <Search className="h-5 w-5" />
              </Button>
              <NotificationPanel />
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <section className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-200">
                    Active Courses
                  </h2>
                  <Button
                    variant="outline"
                    className="rounded-xl bg-teal-600 text-white"
                  >
                    See All
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses.map((course, index) => (
                    <Card
                      key={course.title + index}
                      className="p-2 rounded-md dark:bg-slate-100/20 backdrop-blur shadow-md hover:shadow-lg dark:hover:shadow-teal-50/30 dark:ring-1 dark:ring-primary/40"
                    >
                      <CardHeader className="p-0 relative pointer-events-none">
                        <div className="aspect-video bg-slate-100 rounded-xl mb-4 overflow-hidden">
                          <Image
                            src={'/placeholder.png'}
                            alt={course.title}
                            width={400}
                            height={225}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Badge className="absolute top-2 right-2 bg-red-500 text-white rounded-md">
                          {course.schedule_time}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-lg">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-slate-500 dark:text-slate-300 italic">
                          Course: {course.course}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="mb-0 p-0">
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                          Go to Course
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>
              {/* Tests Section */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold  text-slate-900 dark:text-slate-200">
                    Active Tests
                  </h2>
                  <Button
                    variant="outline"
                    className="rounded-xl  bg-teal-600 text-white"
                  >
                    See All
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeTests.map((test, index) => (
                    <TestCard key={test.title + index} {...test} />
                  ))}
                </div>
              </section>
            </div>
            <div>
              {/* Notice Board */}
              <Card className="p-6 rounded-2xl mb-6 lg:h-80  bg-teal-700">
                <h3 className="text-xl items-center justify-center flex font-semibold mb-4 border-b border-white  pb-1">
                  <span className="text-white">Notice Board</span>
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm font-medium text-white">
                        {event.title}
                      </span>
                      <span className="text-sm text-slate-300">
                        {event.time}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
              {/* Typing Tests */}
              <Card className="p-6 rounded-2xl dark:bg-slate-600/50 backdrop-blur-lg border border-white/50 mb-6">
                <h3 className="text-xl items-center justify-between  font-semibold text-primary mb-4 flex border-b border-primary pb-1">
                  <span>Typing Tests</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-teal-600 text-white rounded-lg"
                  >
                    <ChevronRightIcon className="size-6" />
                  </Button>
                </h3>
                <div className="space-y-4">
                  {TypingTests.map((test, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-100">
                          {test.title}
                        </span>
                        <p className="text-xs text-slate-500 dark:text-slate-300 flex gap-2">
                          <Clock className="size-3" />
                          {test.time} Min.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-teal-600 text-white border-0"
                      >
                        Attempt
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 rounded-2xl dark:bg-slate-600/50 backdrop-blur-lg border border-white/50 mb-6">
                <h3 className="text-xl items-center justify-between  font-semibold text-primary mb-4 flex border-b border-primary  pb-1">
                  <span>Attempted Tests</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-teal-600 text-white rounded-lg"
                  >
                    <ChevronRightIcon className="size-6" />
                  </Button>
                </h3>
                <div className="space-y-4">
                  {attemptedTests.map((test, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-100">
                          {test.title}
                        </span>
                        <p className="text-xs dark:text-slate-300 text-slate-500">
                          {test.date}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className={
                          test.resultAvailable
                            ? 'bg-green-50 text-green-600'
                            : 'bg-yellow-50 text-yellow-600'
                        }
                      >
                        {test.resultAvailable
                          ? 'Check Result'
                          : `Result at ${test.resultTime}`}
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
          <div className="mt-8">
            <Card className="p-6 rounded-2xl dark:bg-slate-600/50 backdrop-blur-lg border border-white/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-primary">
                  Mock Tests Stats
                </h2>
                <div className="flex gap-2">
                  <Select defaultValue="tier1">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select Tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tier1">Tier-1 (Pre)</SelectItem>
                      <SelectItem value="tier2">Tier-2 (Mains)</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="monthly">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select Period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="h-[300px] bg-gradient-to-b from-teal-100/50 to-transparent rounded-xl" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
