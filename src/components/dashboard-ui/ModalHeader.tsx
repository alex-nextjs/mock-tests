'use client';

import { useState } from 'react';
import { Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function ModalHeader() {
  const [showRenewalBanner, setShowRenewalBanner] = useState(true);

  return (
    <div className="relative mb-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-teal-700">SSC BATCH TUAWO</h2>
        <p className="text-sm text-teal-600">
          Access Valid Until: Dec 31, 2024
        </p>
        <Progress value={33} className="h-2 w-32 mx-auto mt-2 bg-teal-100" />
        <span className="text-xs text-teal-600">2 months remaining</span>
      </div>
      {showRenewalBanner && (
        <Alert>
          <Bell className="h-4 w-4" />
          <AlertTitle className="flex items-center justify-between">
            <span>Expiring Soon!</span>
            <Button
              variant="ghost"
              className="absolute top-1 right-1"
              size="sm"
              onClick={() => setShowRenewalBanner(false)}
            >
              <X className="h-4 w-4 text-teal-600" />
            </Button>
          </AlertTitle>
          <AlertDescription className="flex items-center space-x-1">
            <span className="text-sm text-teal-700">
              Your access expires in 2 months! 🔔 Extend for 6 months with code{' '}
              <strong>RENEW20</strong>.
            </span>
            <div className="flex items-center">
              <Button
                size="sm"
                className="bg-teal-500 hover:bg-teal-600 text-white mr-2"
              >
                Renew Now
              </Button>
            </div>
          </AlertDescription>
        </Alert>

        /*
                <div className="bg-teal-100 p-2 mt-4 rounded-md flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="h-4 w-4 mr-2 text-teal-600" />
                    
                  </div>
                  
                </div>
         */
      )}
    </div>
  );
}
