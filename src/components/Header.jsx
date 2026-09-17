import { useEffect, useState } from 'react'

const links = [
  { to: '#home', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#projects', label: 'Projects' },
  { to: '#experience', label: 'Experience' },
  { to: '#skills', label: 'Skills' },
  { to: '#education', label: 'Education' },
  { to: '#contact', label: 'Contact' },
]

function readStoredTheme() {
  try {
    const stored = localStorage.getItem('theme')
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    return null
  }
}

function prefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  )
}

export default function Header() {
  const [theme, setTheme] = useState(readStoredTheme)

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
      try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [theme])

  function toggleTheme() {
    const current = theme ?? (prefersDark() ? 'dark' : 'light')
    setTheme(current === 'dark' ? 'light' : 'dark')
  }

  const isDark = theme ?? (typeof window !== 'undefined' && prefersDark() ? 'dark' : 'light')

  return (
    <header>
      <p className="brand">Apurv Vyas</p>
      <nav>
        {links.map(({ to, label }) => (
          <a key={to} href={to}>{label}</a>
        ))}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {isDark === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
    </header>
  )
}
