'use client';

import { motion } from 'framer-motion';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
  className?: string;
}

export default function ThemeToggle({ theme, toggleTheme, className = '' }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={className}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-0)',
        padding: '8px'
      }}
      aria-label="Toggle Theme"
      data-hover="true"
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
        animate={{
          rotate: isDark ? 40 : 90,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        <motion.mask id="moon-mask">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <motion.circle
            cx={isDark ? 12 : 25}
            cy={isDark ? 4 : 0}
            r="9"
            fill="black"
            initial={false}
            animate={{
              cx: isDark ? 12 : 25,
              cy: isDark ? 4 : 0,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          />
        </motion.mask>
        <motion.circle
          cx="12"
          cy="12"
          fill={isDark ? 'currentColor' : 'transparent'}
          mask="url(#moon-mask)"
          initial={false}
          animate={{
            r: isDark ? 9 : 5,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        />
        <motion.g
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
      </motion.svg>
    </button>
  );
}
