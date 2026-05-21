"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/loader/Loader";
import { LoaderContext } from "@/context/LoaderContext";

type PortfolioShellProps = {
  children: React.ReactNode;
};

export default function PortfolioShell({ children }: PortfolioShellProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    setIsLoaderComplete(true);
  };

  return (
    <LoaderContext.Provider value={{ isLoaderComplete }}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Loader onComplete={handleLoaderComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: isLoaderComplete ? 1 : 0,
          y: isLoaderComplete ? 0 : 12,
        }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
          delay: isLoaderComplete ? 0.08 : 0,
        }}
        className={isLoading ? "pointer-events-none" : undefined}
      >
        {children}
      </motion.div>
    </LoaderContext.Provider>
  );
}
