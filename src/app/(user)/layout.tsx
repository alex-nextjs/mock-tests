'use client';
import { DashboardSidebar } from '@/components/dashboard-ui/dashboard-sidebar';
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { BackButton } from '@/components/dashboard-ui/back-button';
import { Breadcrumb } from '@/components/dashboard-ui/breadcrumb';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <div className="hidden md:flex">
          <DashboardSidebar />
        </div>
        <div className="flex flex-col flex-1">
          <SidebarInset className="flex-1 overflow-auto bg-white dark:bg-slate-900">
            <main>
              <div className="flex items-center justify-between p-4 border-b lg:hidden">
                <SidebarTrigger className=" lg:hidden h-10 w-10" />
                <div className="flex items-center space-x-4">
                  <BackButton />
                  <Breadcrumb />
                </div>
              </div>
              <Provider store={store}>{children}</Provider>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
