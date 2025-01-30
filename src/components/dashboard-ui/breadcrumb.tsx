'use client';

import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

export function Breadcrumb() {
  const pathname = usePathname();

  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  if (pathSegments.length < 2) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center space-x-2 text-sm"
    >
      <Link href="/" className="text-gray-500 hover:text-gray-700">
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const isLast = index === pathSegments.length - 1;

        return (
          <div key={href} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400" />
            {isLast ? (
              <span className="ml-2 font-medium text-gray-900">{segment}</span>
            ) : (
              <Link
                href={href}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                {segment}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
