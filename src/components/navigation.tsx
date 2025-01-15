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
        <Button variant="ghost" className="text-teal-600 hover:bg-teal-100/60 rounded-full">
          Register
        </Button>
        <button
          onClick={() => setIsOpen(false)}
          className="px-8 py-2  rounded-full relative bg-teal-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-teal-600">
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <span className="relative z-20">
            Login
          </span>
        </button>
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
                Register
              </Button>

              <button
                onClick={() => setIsOpen(false)}
                className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <span className="relative z-20">
                  Login
                </span>
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
