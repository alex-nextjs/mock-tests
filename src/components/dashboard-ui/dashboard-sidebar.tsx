'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  BarChart,
  Clock1,
  FolderCheck,
  FolderSearch,
  Home,
  Keyboard,
  CheckSquare,
  HelpCircle,
  MoreVertical,
  Settings,
  User,
  ShoppingBag,
  LogOut,
  Grip,
  Bug,
  FileSearch,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '../ui/theme-switcher';

export const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home, section: 'dashboard' },
  {
    name: 'My Courses & Tests',
    href: '/my-contents',
    icon: FolderCheck,
    section: 'dashboard',
  },
  {
    name: 'Free Tests & Quizzes',
    href: '/free-materials',
    icon: Clock1,
    section: 'dashboard',
  },
  {
    name: 'Typing Tests',
    href: '/typing-tests',
    icon: Keyboard,
    section: 'dashboard',
  },
  {
    name: 'Explore Courses',
    href: '/explore-courses',
    icon: FolderSearch,
    section: 'explore',
  },
  {
    name: 'Explore Tests',
    href: '/explore-tests',
    icon: FileSearch,
    section: 'explore',
  },
  { name: 'Attempted Tests', href: '/tests/attempted', icon: CheckSquare },
  { name: 'Performance', href: '/performance', icon: BarChart },
  { name: 'Extra Activities', href: '/extra-activities', icon: Grip },
];
const dropdownItems = [
  {
    name: 'Setting',
    icon: Settings,
    href: '/profile/setting',
  },
  {
    name: 'Profile',
    icon: User,
    href: '/profile',
  },
  {
    name: 'My Purchases',
    icon: ShoppingBag,
    href: '/profile/purchases',
  },
  {
    name: 'Help Center',
    icon: HelpCircle,
    href: '/help',
  },
  {
    name: 'Report a Bug',
    icon: Bug,
    href: '/report-bug',
  },
];

const sections = [
  {
    name: 'Dashboard',
    items: navigation.filter((item) => item.section === 'dashboard'),
  },
  {
    name: 'Explore',
    items: navigation.filter((item) => item.section === 'explore'),
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-teal-200 dark:border-teal-800">
      <SidebarContent>
        {sections.map((section) => (
          <SidebarGroup key={section.name} className="p-4 pt-2 pl-0">
            <SidebarGroupLabel className="text-teal-700 dark:text-teal-300">
              {section.name}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        'h-10 hover:bg-teal-50 hover:ring-2 hover:ring-teal-400 hover:dark:ring-white/50 hover:text-teal-900 dark:hover:bg-teal-900/50 dark:hover:text-teal-100 rounded-none rounded-r-md',
                        'focus-visible:bg-teal-50 focus-visible:text-teal-900 dark:focus-visible:bg-teal-900/50 dark:focus-visible:text-teal-100 ',
                        pathname === item.href &&
                          'bg-teal-700 text-white dark:bg-teal-500 dark:text-black pointer-events-none'
                      )}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center w-full"
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation
                .filter((item) => !item.section)
                .map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        'h-10 hover:bg-teal-50 hover:ring-2 hover:ring-teal-400 hover:dark:ring-white/50 hover:text-teal-900 dark:hover:bg-teal-900/50 dark:hover:text-teal-100',
                        'focus-visible:bg-teal-50 focus-visible:text-teal-900 dark:focus-visible:bg-teal-900/50 dark:focus-visible:text-teal-100',
                        pathname === item.href &&
                          'bg-teal-700 text-white dark:bg-teal-500 dark:text-black pointer-events-none'
                      )}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center w-full"
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mt-auto">
        <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-800 relative">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-slate-900 dark:via-teal-800 to-transparent"></div>
          <div className="flex items-center justify-between">
            <Image
              width={32}
              height={32}
              className="rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                Tom Cook
              </span>
              <span className="text-xs text-teal-600 dark:text-teal-400">
                tom@example.com
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-teal-600 dark:text-teal-400"
                >
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48" side="right">
                <div>
                  <span className="text-sm font-bold mb-2">Change Theme:</span>
                  <div className="flex items-center justify-center">
                    <ThemeSwitcher />
                  </div>
                </div>
                <DropdownMenuSeparator />
                {dropdownItems.map((item, index) => (
                  <Link href={item.href} key={index} className="mt-2">
                    <DropdownMenuItem className="text-slate-900 dark:text-slate-300 focus:text-teal-900 dark:focus:text-teal-100 hover:bg-transparent hover:ring-2 ring-teal-700 dark:ring-white/50">
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.name}</span>
                    </DropdownMenuItem>
                  </Link>
                ))}

                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 dark:text-red-400 focus:bg-red-100 dark:focus:bg-red-900 focus:text-red-900 dark:focus:text-red-100">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
