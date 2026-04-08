'use client';

import { motion } from 'framer-motion';
import { usePrav } from './PravProvider';
import { PravIcon } from './PravIcon';
import { MessageSquareText } from 'lucide-react';

export function PravDock() {
  const { isOpen, isMinimized, openGuide } = usePrav();

  if (isOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={openGuide}
        className="group relative overflow-hidden rounded-full border border-border/60 bg-card/80 px-4 py-3 text-left shadow-2xl backdrop-blur-xl transition-all hover:border-primary/35"
        aria-label={isMinimized ? 'Reopen site guide' : 'Open site guide'}
      >
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(57,187,166,0.18),transparent_40%)] opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary/12 text-primary ring-1 ring-primary/20">
          <span className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
          <PravIcon className="relative z-10 h-5 w-5" />
        </span>
        <span className="relative hidden sm:block">
          <span className="block text-sm font-semibold text-foreground">
            {isMinimized ? 'Resume site guide' : 'Praverse site guide'}
          </span>
          <span className="block text-xs text-muted-foreground">
            {isMinimized ? 'Continue where you left off' : 'Find pages, offerings, and contact options'}
          </span>
        </span>
        <MessageSquareText className="relative hidden h-4 w-4 text-primary/70 sm:block" />
      </motion.button>
    </div>
  );
}
