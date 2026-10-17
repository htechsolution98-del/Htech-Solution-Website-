'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';
import Logo from './Logo';

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className={styles.preloader}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <motion.div 
              className={styles.content}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
            >
              <Logo style={{ width: 80, height: 60 }} />
              <div className={styles.counter}>{Math.min(progress, 100)}%</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hide children until preloader is done to prevent layout shifts */}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.1s' }}>
        {children}
      </div>
    </>
  );
}
