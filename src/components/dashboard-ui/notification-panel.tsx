import { useMemo, useState } from 'react';
import { Bell, Trash2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { NotificationItem } from './notification-item';

interface Notification {
  'Notification ID': number;
  Type: string;
  Title: string;
  Message: string;
  'Time Stamp': string;
  'Is Read': string;
  'User ID': string;
  Href: string;
}

const notifications: Notification[] = [
  {
    'Notification ID': 1,
    Type: 'Reminder',
    Title: 'Upcoming SSC CGL Exam',
    Message:
      'Your SSC CGL exam is scheduled for **March 25, 2025**. Please make sure to complete your revision and be prepared!',
    'Time Stamp': '2025-01-30 10:15:00',
    'Is Read': 'No',
    'User ID': '12345',
    Href: '',
  },
  {
    'Notification ID': 2,
    Type: 'Update',
    Title: 'New Mock Test Available',
    Message:
      'A new **General Awareness** mock test has been added to your dashboard. Test your knowledge now!',
    'Time Stamp': '2025-01-29 16:45:00',
    'Is Read': 'No',
    'User ID': '67890',
    Href: 'https://app.sscprep.com/mock-tests/ga-test',
  },
  {
    'Notification ID': 3,
    Type: 'Motivation',
    Title: 'Keep Going! You’re Almost There!',
    Message:
      'Remember, every step brings you closer to your dream job. Keep pushing! Success is in your reach.',
    'Time Stamp': '2025-01-30 09:00:00',
    'Is Read': 'No',
    'User ID': '11223',
    Href: '',
  },
  {
    'Notification ID': 4,
    Type: 'Emergency',
    Title: 'Platform Downtime Alert',
    Message:
      'Our platform will be down for scheduled maintenance from **2 AM to 4 AM** on **February 1, 2025**. Please plan accordingly.',
    'Time Stamp': '2025-01-29 15:00:00',
    'Is Read': 'No',
    'User ID': '12345',
    Href: '',
  },
  {
    'Notification ID': 5,
    Type: 'Course Promotion',
    Title: 'Get 30% Off on SSC CGL Courses!',
    Message:
      'Hurry up! Get **30% off** on all SSC CGL preparation courses. Offer valid till **January 31, 2025**.',
    'Time Stamp': '2025-01-29 11:00:00',
    'Is Read': 'No',
    'User ID': '67890',
    Href: 'https://app.sscprep.com/courses/ssc-cgl-sale',
  },
  {
    'Notification ID': 6,
    Type: 'Announcement',
    Title: 'New Live Session Scheduled',
    Message:
      'Join our upcoming **live session** on **Mathematics Problem Solving** at **5 PM** today. Don’t miss out!',
    'Time Stamp': '2025-01-30 13:00:00',
    'Is Read': 'No',
    'User ID': '11223',
    Href: 'https://app.sscprep.com/live-sessions/maths-solving',
  },
  {
    'Notification ID': 7,
    Type: 'Reminder',
    Title: 'Study Break Time!',
    Message:
      'Take a short break! Recharge for the next session. Come back refreshed to continue your preparation.',
    'Time Stamp': '2025-01-29 14:30:00',
    'Is Read': 'Yes',
    'User ID': '12345',
    Href: '',
  },
  {
    'Notification ID': 8,
    Type: 'Reminder for Tests',
    Title: '1 Hour Left to Submit Your Test',
    Message:
      'You have **1 hour left** to complete your **General Intelligence** mock test. Submit it before time runs out!',
    'Time Stamp': '2025-01-30 12:00:00',
    'Is Read': 'No',
    'User ID': '67890',
    Href: 'https://app.sscprep.com/mock-tests/gi-test',
  },
  {
    'Notification ID': 9,
    Type: 'Motivation',
    Title: 'You’re on the Right Track!',
    Message:
      'Believe in yourself! Your hard work will pay off, keep progressing and stay focused on your goals.',
    'Time Stamp': '2025-01-29 08:00:00',
    'Is Read': 'No',
    'User ID': '11223',
    Href: '',
  },
  {
    'Notification ID': 10,
    Type: 'Emergency',
    Title: 'Subscription Ending Soon',
    Message:
      'Your **premium subscription** is about to end in **3 days**. Renew now to continue your learning without interruptions.',
    'Time Stamp': '2025-01-29 07:00:00',
    'Is Read': 'No',
    'User ID': '12345',
    Href: 'https://app.sscprep.com/subscription/renew',
  },
];

export function NotificationPanel() {
  const [notificationState, setNotificationState] = useState(notifications);

  const sortedNotifications = useMemo(() => {
    return [...notificationState].sort(
      (a, b) =>
        new Date(b['Time Stamp']).getTime() -
        new Date(a['Time Stamp']).getTime()
    );
  }, [notificationState]);

  const unreadCount = notificationState.filter(
    (n) => n['Is Read'] === 'No'
  ).length;

  const removeNotification = (id: number) => {
    setNotificationState((prev) =>
      prev.filter((n) => n['Notification ID'] !== id)
    );
  };

  const removeAllNotifications = () => {
    setNotificationState([]);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader className="flex flex-row items-center justify-between mt-4">
          <SheetTitle className="text-left">Notifications</SheetTitle>
          <Button
            variant="destructive"
            size="sm"
            onClick={removeAllNotifications}
            disabled={notificationState.length === 0}
            className="flex items-center gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Remove All
          </Button>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-100px)] mt-4">
          {sortedNotifications.length > 0 ? (
            sortedNotifications.map((notification) => (
              <NotificationItem
                key={notification['Notification ID']}
                notification={notification}
                removeNotification={removeNotification}
              />
            ))
          ) : (
            <div className="text-center text-muted-foreground py-8">
              No notifications
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
