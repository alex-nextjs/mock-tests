'use client';

import { motion } from 'framer-motion';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import useIsClient from '@/hooks/useIsClient';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const isClient = useIsClient();
  const { theme, setTheme } = useTheme();
  const [activeTheme, setActiveTheme] = useState(theme);

  useEffect(() => {
    setActiveTheme(theme);
  }, [theme]);

  if (!isClient) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center p-0.5 rounded-full bg-background/80 backdrop-blur-sm border "
      whileTap={{ scale: 0.95 }}
    >
      {[
        { id: 'light', icon: Sun },
        { id: 'dark', icon: Moon },
        { id: 'system', icon: Monitor },
      ].map(({ id, icon: Icon }) => (
        <div key={id} className="relative h-9 w-9 mx-0.5">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(id)}
            className="h-9 w-9 rounded-full relative z-10"
          >
            <motion.div
              animate={{
                scale: activeTheme === id ? 1.2 : 1,
                opacity: activeTheme === id ? 1 : 0.7,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon className="h-[16px] w-[16px]" />
            </motion.div>
          </Button>

          {activeTheme === id && (
            <motion.div
              layoutId="activeTheme"
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm"
              initial={false}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25,
              }}
            />
          )}
        </div>
      ))}
    </motion.div>
  );
}
