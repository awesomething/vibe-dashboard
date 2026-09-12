"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { COLORS, scrollToId } from "./constants";
import { Logo } from "./logo";
import { BookButton } from "./book-button";

export function Header() {
  const [open, setOpen] = useState(false);
  const navItem = (id, label) => (
    <button
      onClick={() => {
        scrollToId(id);
        setOpen(false);
      }}
      style={{ fontFamily: "'Jost', sans-serif", color: COLORS.cream, fontSize: "0.86rem", letterSpacing: "0.03em" }}
      className="hover:opacity-70 transition-opacity"
    >
      {label.toUpperCase()}
    </button>
  );
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "rgba(27,23,18,0.92)", backdropFilter: "blur(8px)", borderBottom: `1px solid ${COLORS.line}` }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {navItem("services", "Services")}
          {navItem("gallery", "Gallery")}
          {navItem("reviews", "Reviews")}
          {navItem("faq", "FAQ")}
        </nav>
        <div className="hidden md:block">
          <BookButton />
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} color={COLORS.cream} /> : <Menu size={22} color={COLORS.cream} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-4" style={{ borderTop: `1px solid ${COLORS.line}` }}>
          <div className="pt-4 flex flex-col gap-4">
            {navItem("services", "Services")}
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
