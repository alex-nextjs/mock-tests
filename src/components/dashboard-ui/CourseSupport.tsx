'use client';

import { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Bell,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IconBrandTelegram } from '@tabler/icons-react';

export function CourseSupport() {
  const [isCommunityExpanded, setIsCommunityExpanded] = useState(false);

  return (
    <div className="w-full md:w-2/5">
      <h3 className="font-semibold mb-2 text-teal-700">Course Support</h3>
      <div className="border border-teal-200 rounded-md p-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-teal-200 mr-3"></div>
          <span className="font-semibold text-teal-700">John Doe</span>
        </div>
        <div className="flex gap-1 flex-row items-center justify-center">
          <Button
            variant="outline"
            className=" flex items-center justify-center border-teal-500 text-teal-700 hover:bg-teal-50"
          >
            <IconBrandTelegram className="size-8" /> Telegram
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center border-teal-500 text-teal-700 hover:bg-teal-50"
          >
            <Mail className="size-8" /> E-Mail
          </Button>
        </div>
        <div className="mt-4">
          <button
            className="flex items-center justify-between w-full text-left text-teal-700"
            onClick={() => setIsCommunityExpanded(!isCommunityExpanded)}
          >
            <span className="font-semibold">👥 Join Student Community</span>
            {isCommunityExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          {isCommunityExpanded && (
            <div className="mt-2 space-y-2">
              <a
                href="#"
                className="flex items-center text-sm text-teal-600 hover:underline"
              >
                <MessageCircle className="mr-2 h-4 w-4" /> Telegram Group
              </a>
              <a
                href="#"
                className="flex items-center text-sm text-teal-600 hover:underline"
              >
                <Bell className="mr-2 h-4 w-4" /> Telegram Action Channel
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
