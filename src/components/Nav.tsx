import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'TECHNICAL STUDIES', href: '#projects' },
  { label: 'WRITING', href: '/writing' },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
    if (path === '/' || path === '') {
      const hash = window.location.hash.replace('#', '');
      if (hash) setActiveSection(hash);
    }
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      setActiveSection((e as CustomEvent<string>).detail);
    };
    window.addEventListener('sectionChange', handler);
    return () => window.removeEventListener('sectionChange', handler);
  }, []);

  const isOnIndex = currentPath === '' || currentPath === '/';
  const isWritingRoute = currentPath.startsWith('/writing');

  // Hash links get /#id when not on index so they navigate back to the right section.
  const resolveHref = (href: string) => {
    if (!href.startsWith('#') || isOnIndex) return href;
    return `/${href}`;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#') || !isOnIndex) return;
    e.preventDefault();
    setMobileOpen(false);
    window.dispatchEvent(new CustomEvent('navigateTo', { detail: href.replace('#', '') }));
  };

  const isActive = (href: string) => {
    if (href === '/writing') return isWritingRoute;
    if (isWritingRoute) return false;
    return activeSection === href.replace('#', '');
  };

  const linkCls = (href: string) =>
    `text-xs tracking-widest uppercase transition-colors duration-200 ${
      isActive(href)
        ? 'text-primary font-bold'
        : 'text-text-muted font-medium hover:text-text-primary'
    }`;

  const mobileLinkCls = (href: string) =>
    `text-sm tracking-widest uppercase transition-colors ${
      isActive(href) ? 'text-primary font-bold' : 'text-text-muted font-medium'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center gap-6">
        {/* Name */}
        <a
          href={resolveHref('#home')}
          onClick={(e) => handleClick(e, '#home')}
          className="font-serif text-lg font-medium tracking-tight text-text-primary hover:text-primary transition-colors duration-200 shrink-0"
        >
          Adrian Nie
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              onClick={(e) => handleClick(e, link.href)}
              className={linkCls(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="ml-auto md:hidden p-2 text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-bg border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                onClick={(e) => handleClick(e, link.href)}
                className={mobileLinkCls(link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
