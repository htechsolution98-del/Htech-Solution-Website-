'use client';

import { useEffect } from 'react';
import styles from './Header.module.css';
import { useTheme } from '@/components/ThemeProvider';
import Magnetic from '@/components/Magnetic';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#technology', label: 'Technology' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const header = document.getElementById('site-header');
    const handleScroll = () => {
      header?.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    const navLinks = document.querySelector<HTMLElement>('.nav-links');
    if (!navLinks) return;
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.cssText = isOpen
      ? ''
      : 'display:flex; position:absolute; top:64px; left:20px; right:20px; background:rgba(6,9,16,0.97); flex-direction:column; padding:20px; border-radius:12px; border:1px solid var(--line); gap:18px; z-index:200;';
  };

  return (
    <header id="site-header" className={`${styles.header} glass`}>
      <div className="wrap">
        <nav className={styles.nav}>
          <a href="#top" className={styles.logo}>
            <Logo style={{ width: 48, height: 40 }} />
            Htech Solutions
          </a>
          <ul className={`${styles.navLinks} nav-links`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className={styles.navCta}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} className={styles.themeToggle} />
            <Magnetic>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ padding: '11px 22px', fontSize: '14px' }}
                data-hover="true"
              >
                Let&apos;s Talk
              </a>
            </Magnetic>
            <button
              className={styles.menuBtn}
              id="menuBtn"
              aria-label="Open menu"
              onClick={toggleMenu}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
