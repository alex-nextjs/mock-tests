'use client';

import React, { useState, useEffect } from 'react';
import { Bell, Search, X, Trophy, ClipboardList } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

interface Course {
  title: string;
  image: string;
  tutorials: number;
  hoursPerDay: string;
  progress: number;
  nextClass: string;
}

interface ActiveTest {
  title: string;
  type: string;
  date: string;
  time: string;
}

interface Notification {
  id: number;
  message: string;
  read: boolean;
}

interface Achievement {
  title: string;
  progress: number;
  total: number;
}

interface AttemptedTest {
  title: string;
  date: string;
  resultAvailable: boolean;
  resultTime?: string;
}

const courses: Course[] = [
  {
    title: 'Learn Ui Ux with ZHF Design Studio',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-guwZprgtqXKO2RBX7fyDy1xe7h9ox2.png',
    tutorials: 35,
    hoursPerDay: '02:30',
    progress: 65,
    nextClass: '30 mins',
  },
  {
    title: 'Structure Expert - Making Things Look 3D',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-guwZprgtqXKO2RBX7fyDy1xe7h9ox2.png',
    tutorials: 120,
    hoursPerDay: '02:00',
    progress: 30,
    nextClass: '01:44 hour',
  },
];

const activeTests: ActiveTest[] = [
  {
    title: 'Mock Test 1',
    type: 'Tier-1 (Pre)',
    date: '2023-06-15',
    time: '10:00 AM',
  },
  {
    title: 'Mock Test 2',
    type: 'Tier-2 (Mains)',
    date: '2023-06-20',
    time: '02:00 PM',
  },
  {
    title: 'Mock Test 3',
    type: 'Tier-1 (Pre)',
    date: '2023-06-25',
    time: '11:00 AM',
  },
];

const upcomingEvents = [
  { title: 'UI/UX Design Class', time: '10:00 AM' },
  { title: '3D Modeling Workshop', time: '2:00 PM' },
  { title: 'Mock Test: General Knowledge', time: '4:30 PM' },
];

const achievements: Achievement[] = [
  { title: 'Course Completion', progress: 3, total: 5 },
  { title: 'Perfect Scores', progress: 2, total: 3 },
  { title: 'Study Streak', progress: 15, total: 30 },
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

function CircularProgress({ value }: { value: number }) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-12 h-12 transform -rotate-90">
        <circle
          className="text-teal-100"
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="24"
          cy="24"
        />
        <circle
          className="text-teal-600"
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="24"
          cy="24"
        />
      </svg>
      <span className="absolute text-sm font-medium text-teal-600">
        {value}%
      </span>
    </div>
  );
}

export default function DashboardPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: 'New course available', read: false },
    { id: 2, message: 'Your exam results are out', read: true },
    { id: 3, message: 'Upcoming mock test reminder', read: false },
  ]);
  const [notificationHistory, setNotificationHistory] = useState<
    Notification[]
  >([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const removeNotification = (id: number) => {
    const removedNotification = notifications.find((n) => n.id === id);
    if (removedNotification) {
      setNotifications(notifications.filter((n) => n.id !== id));
      setNotificationHistory([...notificationHistory, removedNotification]);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F0FFFF] overflow-hidden">
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
                className="rounded-full"
              />
              <div>
                <div className="text-sm text-gray-500">Welcome</div>
                <h1 className="text-xl font-semibold">Angela Della</h1>
                <div className="text-sm text-gray-500">
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
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Search Input */}
              <div
                className={`
                absolute top-16 left-0 right-0 px-4 md:px-0 md:relative md:top-0
                ${isSearchOpen ? 'block' : 'hidden md:block'}
              `}
              >
                <div className="relative w-full md:w-[400px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search courses, exam here..."
                    className="pl-10 rounded-full border-gray-200"
                  />
                </div>
              </div>

              <Sheet
                open={isNotificationOpen}
                onOpenChange={setIsNotificationOpen}
              >
                <SheetTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-xl relative"
                  >
                    <Bell className="h-4 w-4" />
                    {notifications.some((n) => !n.read) && (
                      <span className="absolute top-0 right-0 h-2 w-2 bg-teal-500 rounded-full" />
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <h2 className="text-lg font-semibold mb-4">Notifications</h2>
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex items-center justify-between mb-2"
                    >
                      <div className="flex items-center">
                        <span
                          className={`h-2 w-2 rounded-full mr-2 ${notification.read ? 'bg-gray-300' : 'bg-teal-500'}`}
                        />
                        <span>{notification.message}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeNotification(notification.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <h3 className="text-md font-semibold mt-6 mb-2">
                    Notification History
                  </h3>
                  {notificationHistory.map((notification) => (
                    <div key={notification.id} className="text-gray-500 mb-1">
                      {notification.message}
                    </div>
                  ))}
                </SheetContent>
              </Sheet>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <section className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-[#1F2937]">
                    Active Courses
                  </h2>
                  <Button variant="outline" className="rounded-xl">
                    See All
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses.map((course) => (
                    <Card key={course.title} className="p-6 rounded-2xl">
                      <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden">
                        <Image
                          src={'/placeholder.png'}
                          alt={course.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-[#1F2937] mb-4">
                        {course.title}
                      </h3>
                      <div className="flex justify-between text-sm text-[#6B7280] mb-4">
                        <div>{course.tutorials} Tutorials</div>
                        <div>{course.hoursPerDay} hours/Daily</div>
                      </div>
                      <div className="flex justify-end mb-4">
                        <CircularProgress value={course.progress} />
                      </div>
                      <div className="text-sm text-teal-600 bg-teal-50 p-3 rounded-xl text-center">
                        Next class starting in {course.nextClass}
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-[#1F2937]">
                    Active Tests
                  </h2>
                  <Button variant="outline" className="rounded-xl">
                    See All
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeTests.map((test) => (
                    <Card key={test.title} className="p-6 rounded-2xl">
                      <h3 className="font-semibold text-[#1F2937] mb-2">
                        {test.title}
                      </h3>
                      <div className="text-sm text-[#6B7280] mb-2">
                        {test.type}
                      </div>
                      <div className="text-sm text-[#6B7280] mb-4">
                        {test.date} at {test.time}
                      </div>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">
                        Start Test
                      </Button>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <div>
              <Card className="p-6 rounded-2xl mb-6">
                <h3 className="text-xl flex items-center font-semibold text-[#1F2937] mb-4">
                  <ClipboardList className="w-5 h-5 mr-2 text-teal-500" />
                  <span>Notice Board</span>
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {event.title}
                      </span>
                      <span className="text-sm text-gray-500">
                        {event.time}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 rounded-2xl mb-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                  Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          {achievement.title}
                        </span>
                        <span className="text-sm text-gray-500">
                          {achievement.progress}/{achievement.total}
                        </span>
                      </div>
                      <Progress
                        value={(achievement.progress / achievement.total) * 100}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-4 flex items-center">
                  Attempted Tests
                  <Button variant="outline">See All</Button>
                </h3>
                <div className="space-y-4">
                  {attemptedTests.map((test, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <span className="text-sm font-medium text-gray-700">
                          {test.title}
                        </span>
                        <p className="text-xs text-gray-500">{test.date}</p>
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
            <Card className="p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#1F2937]">
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
