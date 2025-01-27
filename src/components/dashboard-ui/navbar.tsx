import { Input } from '@/components/ui/input';
import { Search, Umbrella } from 'lucide-react';

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {children}
        {/* TODO: Add Logo */}
        <Umbrella />
        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 w-full"
            />
          </div>
        </div>

        {/* Theme Switcher Placeholder */}
        <div className="flex items-center sm:hidden lg:flex"></div>
      </div>
    </header>
  );
}
