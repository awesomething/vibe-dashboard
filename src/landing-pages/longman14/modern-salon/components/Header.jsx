import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COLORS } from './constants';
import { scrollToId } from './utils';
import { Logo } from './Logo';
import { BookButton } from './BookButton';

export function Header() {
  const [open, setOpen] = useState(false);
  const navItem = (id, label) => (
    <button
      onClick={() => {
        scrollToId(id);
        setOpen(false);
      }}
      style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.ink, fontSize: "0.86rem" }}
      className="hover:opacity-60 transition-opacity"
    >
      {label}
    </button>
  );
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "rgba(250,246,240,0.94)", backdropFilter: "blur(8px)", borderBottom: `1px solid ${COLORS.border}` }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {navItem("services", "Services")}
          {navItem("about", "About Brandon")}
          {navItem("gallery", "Gallery")}
          {navItem("reviews", "Reviews")}
          {navItem("faq", "FAQ")}
        </nav>
        <div className="hidden md:block">
          <BookButton />
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} color={COLORS.ink} /> : <Menu size={22} color={COLORS.ink} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-4" style={{ borderTop: `1px solid ${COLORS.border}` }}>
          <div className="pt-4 flex flex-col gap-4">
            {navItem("services", "Services")}
            {navItem("about", "About Brandon")}
            {navItem("gallery", "Gallery")}
            {navItem("reviews", "Reviews")}
            {navItem("faq", "FAQ")}
          </div>
          <BookButton full size="lg" />
        </div>
      )}
    </header>
  );
}