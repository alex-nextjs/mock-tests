'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { InfoIcon, Star } from 'lucide-react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { useDispatch } from 'react-redux';
import { openInfoCourseModal } from '@/store/slices/infoModalSlice';

interface CourseCardProps {
  title: string;
  instructor: string;
  image: string;
  liveClasses: number;
  language: string;
  rating: number;
  isLive: boolean;
}

export default function CourseCard({
  title,
  instructor,
  image,
  liveClasses,
  language,
  rating,
  isLive,
}: CourseCardProps) {
  const dispatch = useDispatch();
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md dark:hover:shadow-teal-400/60 dark:bg-gradient-to-br from-slate-800/50 via-white/30 to-slate-900 dark:from-slate-850 dark:to-slate-850 dark:bg-slate-850 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 h-full flex flex-col">
      <CardContent className="p-0 pointer-events-none">
        <div className="relative p-2 sm:p-3">
          {isLive && (
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              LIVE
            </div>
          )}
          <div className="  relative w-full lg:h-32 h-56 rounded-t-lg ">
            <Image
              src={image || '/placeholder.svg'}
              alt={title}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="p-2 sm:p-3 space-y-1 sm:space-y-2 flex-grow">
          <h3 className="text-sm sm:text-base font-semibold line-clamp-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            By: {instructor}
          </p>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {liveClasses} Live Classes
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {language}
              </div>
            </div>
            <div className="flex items-center gap-1 bg-white/30 dark:bg-slate-700/30 px-2 py-0.5 rounded-full">
              <span className="font-semibold text-sm">{rating}</span>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 sm:p-3 pt-0 w-full">
        <div className="flex gap-2 w-full items-center justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size={'icon'}
                  className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg text-xs py-1 h-10 w-10"
                  onClick={() => dispatch(openInfoCourseModal())}
                >
                  <InfoIcon className="size-10" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Get Information</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button className="flex-1 bg-teal-500/90 hover:bg-teal-600/90  dark:text-white dark:bg-teal-700 dark:hover:bg-teal-500/90 backdrop-blur-lg text-xs py-1 h-10 w-full">
            View Course
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
