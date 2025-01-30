import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CloudLightningIcon as Lightning } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '../ui/badge';

export interface TestCardProps {
  title: string;
  testId: string;
  students: string;
  progress: number;
}

export default function TestCard({
  title,
  testId,
  students,
  progress,
}: TestCardProps) {
  return (
    <Card className="overflow-hidden transition-all  bg-gradient-to-br from-purple-50/80 to-purple-50/20 dark:from-purple-900/20 dark:to-purple-900/5 dark:bg-slate-850 backdrop-blur-xl border border-purple-100/20 dark:border-purple-700/20 h-56 flex flex-col p-2 rounded-md dark:bg-slate-100/20 shadow-md hover:shadow-lg dark:hover:shadow-teal-50/30 dark:ring-1 dark:ring-primary/40">
      <CardContent className="space-y-2 p-0 flex-grow">
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <Image
              src="/placeholder.png"
              alt="Test Logo"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <Badge className="flex items-center gap-1 pointer-events-none bg-teal-600 text-white">
            <Lightning className="w-3 h-3 text-yellow-500" />
            <span className="text-xs font-medium">{students} Students</span>
          </Badge>
        </div>

        <h3 className="font-semibold text-sm sm:text-base line-clamp-2">
          {title}
        </h3>
        <div className="text-xs text-gray-600 dark:text-gray-300">{testId}</div>

        <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-1.5 overflow-hidden backdrop-blur-sm">
          <div
            className="bg-teal-500/90 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <Button
          variant={'outline'}
          className="w-full hover:shadow-sm bg-white/80 dark:bg-gray-800/80 text-teal-600 dark:text-teal-400 hover:bg-white/90 dark:hover:bg-gray-700/90 backdrop-blur-sm text-xs py-1 border-teal-500/40"
        >
          Go To Test Series
        </Button>
      </CardFooter>
    </Card>
  );
}
