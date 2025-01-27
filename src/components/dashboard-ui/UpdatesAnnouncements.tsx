'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export function UpdatesAnnouncements() {
  return (
    <div className="w-full md:w-3/5">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <h3 className="font-semibold mb-2 text-teal-700">Live Now 🔴</h3>
          <div className="border border-teal-200 rounded-md p-4">
            <div className="flex items-center mb-2">
              <span className="text-red-500 font-bold mr-2">🔴 LIVE</span>
              <span className="animate-ping absolute h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
            </div>
            <p className="mb-2 text-teal-700">Percentage Class 12 is Live.</p>
            <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
              Watch Now
            </Button>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <h3 className="font-semibold mb-2 text-teal-700">
            Today&#39;s Tasks 📋
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox id="task1" checked={true} />
              <label htmlFor="task1" className="ml-2 text-sm text-teal-700">
                Complete Lesson 5: Social Media Ads
              </label>
            </div>
            <div className="flex items-center">
              <Checkbox id="task2" />
              <label htmlFor="task2" className="ml-2 text-sm text-teal-700">
                Submit Assignment 2 by 5 PM
              </label>
            </div>
            <div className="flex items-center">
              <Checkbox id="task3" />
              <label htmlFor="task3" className="ml-2 text-sm text-teal-700">
                Join Live Q&A at 3 PM
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
