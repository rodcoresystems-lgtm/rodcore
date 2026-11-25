import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV, SITE, whatsappLink } from '../data/site';
import Button from './Button';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    // Fecha ao tocar fora dos itens do menu (na página ou no espaço vazio do painel)
    const onPointer = (e) => {
      if (!open) return;
      const t = e.target;
      if (t.closest('.menu-toggle') || t.closest('.nav a') || t.closest('.brand')) return;
      setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      document.body.classList.remove('no-scroll');
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="brand" onClick={close}>
          <span className="brand__name">{SITE.name}</span>
          <span className="brand__tag">{SITE.tagline}</span>
        </a>

        <nav id="menu" className={`nav${open ? ' nav--open' : ''}`} aria-label="Navegação principal">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>{item.label}</a>
              </li>
            ))}
          </ul>
          <Button href={whatsappLink()} whatsapp className="nav__cta-mobile">Agende seu horário</Button>
        </nav>

        <Button href={whatsappLink()} whatsapp className="header__cta">Agende seu horário</Button>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
