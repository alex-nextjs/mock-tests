import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import {
  Bell,
  Calendar,
  Info,
  AlertTriangle,
  BookOpen,
  Zap,
  Clock,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

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

interface NotificationItemProps {
  notification: Notification;
  removeNotification: (id: number) => void;
}

const getIcon = (type: string) => {
  switch (type) {
    case 'Reminder':
      return <Clock className="h-5 w-5 text-blue-500" />;
    case 'Update':
      return <Info className="h-5 w-5 text-green-500" />;
    case 'Motivation':
      return <Zap className="h-5 w-5 text-yellow-500" />;
    case 'Emergency':
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    case 'Course Promotion':
      return <BookOpen className="h-5 w-5 text-purple-500" />;
    case 'Announcement':
      return <Bell className="h-5 w-5 text-orange-500" />;
    default:
      return <Calendar className="h-5 w-5 text-gray-500" />;
  }
};

export function NotificationItem({
  notification,
  removeNotification,
}: NotificationItemProps) {
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    return () => {
      // Clean up any pending timeouts when the component unmounts
      setIsRemoving(false);
    };
  }, []);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => removeNotification(notification['Notification ID']), 300);
  };

  return (
    <AnimatePresence>
      {!isRemoving && (
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{ duration: 0.3 }}
          className={`p-4 rounded-lg m-1 border-b last:border-b-0 ${
            notification['Is Read'] === 'No'
              ? 'bg-blue-50 dark:bg-blue-900/20'
              : ''
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="mt-1">{getIcon(notification.Type)}</div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold">{notification.Title}</h3>
              <div className="text-sm text-muted-foreground mt-1">
                <ReactMarkdown>{notification.Message}</ReactMarkdown>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                {format(
                  new Date(notification['Time Stamp']),
                  'MMM d, yyyy h:mm a'
                )}
              </div>
              {notification.Href && (
                <a
                  href={notification.Href}
                  className="text-sm text-primary hover:underline mt-2 inline-block"
                >
                  View Details
                </a>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRemove}
              className="text-gray-500 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
