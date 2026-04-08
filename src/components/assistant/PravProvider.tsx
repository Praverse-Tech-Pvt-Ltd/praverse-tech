'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { PravDock } from './PravDock';
import { PravPanel } from './PravPanel';

interface PravContextType {
  isOpen: boolean;
  isMinimized: boolean;
  openGuide: () => void;
  closeGuide: () => void;
  minimizeGuide: () => void;
}

const PravContext = createContext<PravContextType | null>(null);

export function usePrav() {
  const context = useContext(PravContext);
  if (!context) {
    throw new Error('usePrav must be used within a PravProvider');
  }
  return context;
}

export function PravProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const openGuide = () => {
    setIsOpen(true);
    setIsMinimized(false);
  };

  const closeGuide = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const minimizeGuide = () => {
    setIsOpen(false);
    setIsMinimized(true);
  };

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openGuide();
      }

      if (event.key === 'Escape' && isOpen) {
        event.preventDefault();
        closeGuide();
      }
    };

    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, [isOpen]);

  const value = {
    isOpen,
    isMinimized,
    openGuide,
    closeGuide,
    minimizeGuide,
  };

  return (
    <PravContext.Provider value={value}>
      {children}
      <PravDock />
      <PravPanel />
    </PravContext.Provider>
  );
}
