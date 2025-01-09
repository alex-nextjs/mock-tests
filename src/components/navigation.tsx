'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Umbrella, Menu } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Us', href: '#about-us' },
  ];

  return (
    <nav className="flex h-20 items-center justify-between">
      <div className="flex items-center gap-2">
        <Umbrella className="h-8 w-8 text-teal-600" />
        <span className="text-xl font-bold">SSCPrep</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-gray-700 hover:text-teal-600"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Button variant="ghost" className="text-teal-600">
          Sign Up
        </Button>
        <Button className="bg-teal-600 hover:bg-teal-700">Join</Button>
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-2 py-1 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="ghost"
                className="text-teal-600 justify-start"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Button>
              <Button
                className="bg-teal-600 hover:bg-teal-700"
                onClick={() => setIsOpen(false)}
              >
                Join
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
