import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { to: '/about', label: 'About', n: '01' },
  { to: '/skills', label: 'Skills', n: '02' },
  { to: '/projects', label: 'Projects', n: '03' },
  { to: '/contact', label: 'Contact', n: '04' },
  { to: '/resume', label: 'Resume', n: '05' },
]

const SunIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2.5M12 19v2.5M4.75 4.75l1.77 1.77M17.48 17.48l1.77 1.77M2.5 12H5M19 12h2.5M4.75 19.25l1.77-1.77M17.48 6.52l1.77-1.77" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
  </svg>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof document === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })
  const [themeHintDismissed, setThemeHintDismissed] = useState(() => {
    if (typeof window === 'undefined') return false
    try {
      return window.localStorage.getItem('theme-hint-dismissed-v2') === '1'
    } catch {
      return false
    }
  })
  const [themeHintReady, setThemeHintReady] = useState(false)

  const dismissThemeHint = () => {
    setThemeHintReady(false)
    setThemeHintDismissed(true)
    try {
      window.localStorage.setItem('theme-hint-dismissed-v2', '1')
    } catch {}
  }

  useEffect(() => {
    if (themeHintDismissed) return

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(
      () => setThemeHintReady(true),
      prefersReduced ? 0 : 800
    )

    return () => window.clearTimeout(timer)
  }, [themeHintDismissed])

  useEffect(() => {
    if (!themeHintReady) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') dismissThemeHint()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [themeHintReady])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const toggleTheme = (e) => {
    dismissThemeHint()
    const next = !dark
    const root = document.documentElement
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const applyTheme = () => {
      setDark(next)
      root.classList.toggle('dark', next)
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light')
      } catch {}
      const meta = document.querySelector('meta[name="theme-color"]')
      if (meta) meta.setAttribute('content', next ? '#111111' : '#fcfaf6')
    }

    if (!prefersReduced && typeof document.startViewTransition === 'function') {
      const rect = e?.currentTarget?.getBoundingClientRect()
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2
      const y = rect ? rect.top + rect.height / 2 : 0
      const maxX = Math.max(x, window.innerWidth - x)
      const maxY = Math.max(y, window.innerHeight - y)
      const r = Math.hypot(maxX, maxY)

      root.style.setProperty('--theme-x', `${x}px`)
      root.style.setProperty('--theme-y', `${y}px`)
      root.style.setProperty('--theme-r', `${r}px`)

      const transition = document.startViewTransition(applyTheme)
      transition.finished.finally(() => {
        root.style.removeProperty('--theme-x')
        root.style.removeProperty('--theme-y')
        root.style.removeProperty('--theme-r')
      })
    } else {
      applyTheme()
    }
  }

  const navClass = ({ isActive }) =>
    `nav-link text-ink/80 hover:text-ink ${isActive ? 'active text-ink' : ''}`

  const themeButton = (extra = '') => (
    <button
      type="button"
      onClick={(e) => toggleTheme(e)}
      className={`inline-flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-soft/60 ${extra}`}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  )

  return (
    <header className="fixed top-4 left-4 right-4 z-50 sm:top-5 sm:left-6 sm:right-6">
      <div
        className={`mx-auto max-w-[1360px] rounded-4xl border bg-paper/45 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors duration-300 ${
          scrolled || isOpen ? 'border-line' : 'border-line/70'
        }`}
      >
        <div className="flex h-[76px] items-center justify-between px-4 sm:px-6 md:h-[84px] md:px-8">
          <NavLink to="/" className="block text-[17px] font-normal leading-[1.05] uppercase tracking-[0.22em]">
            Manoj<span className="text-accent">.</span>H
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={navClass}>
                <sup className="mr-1.5 font-mono text-[9px] tracking-[0.05em] text-dim">{l.n}</sup>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              {themeButton('rounded-full')}

              <AnimatePresence>
                {themeHintReady && !themeHintDismissed && (
                  <motion.div
                    role="note"
                    aria-label="Dark mode tip"
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                    className="absolute right-0 top-[calc(100%+22px)] z-50 w-[min(19rem,calc(100vw-2.5rem))] border border-line bg-paper p-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:p-5"
                  >
                    {/* Curved arrow pointing back up to the theme toggle */}
                    <svg
                      viewBox="0 0 56 30"
                      className="pointer-events-none absolute -top-[27px] right-3 h-8 w-14 overflow-visible text-accent sm:right-5"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 29 C 18 30, 39 22, 47 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M39 6 L47 7 L46 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <button
                      type="button"
                      onClick={dismissThemeHint}
                      aria-label="Dismiss tip"
                      className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center text-dim transition-colors hover:text-ink"
                    >
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M3 3l10 10M13 3L3 13" />
                      </svg>
                    </button>

                    <p className="m !text-accent">Tip</p>
                    <p className="mt-2 pr-5 text-[15px] leading-[1.5]">
                      You can switch to {dark ? 'light' : 'dark'} mode
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact" className="pillb solid hidden md:inline-flex">
              Get in touch <span className="arr" />
            </NavLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="pillb !px-4 !py-2 md:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="border-t border-line px-4 pb-6 pt-2 sm:px-6 md:hidden">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-baseline gap-3 border-b border-line py-4 text-2xl font-light uppercase tracking-[0.02em] ${
                    isActive ? 'text-ink' : 'text-ink/80'
                  }`
                }
              >
                <sup className="font-mono text-[11px] tracking-[0.05em] text-accent">{l.n}</sup>
                {l.label}
              </NavLink>
            ))}
            <div className="mt-6 flex items-center gap-3">
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="pillb solid w-fit"
              >
                Get in touch <span className="arr" />
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar