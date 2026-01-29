'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { BottomNavbar } from '@/components/BottomNav';
import { cn } from '@/lib/utils';

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <>
      <div className={cn(isMobile && 'pb-20')} suppressHydrationWarning>
        {children}
      </div>
      <BottomNavbar />
    </>
  );
}
