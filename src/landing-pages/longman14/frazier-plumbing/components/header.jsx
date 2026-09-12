"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { COLORS } from "../../lib/utils";
import { CallButton } from "./call-button";
import { scrollToId } from "../../lib/utils";
import { Logo } from "./logo";


export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 24);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    const navItem = (id, label) => (
      <button
        onClick={() => {
          scrollToId(id);
          setOpen(false);
        }}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: "0.92rem",
          color: COLORS.inkSoft,
        }}
        className="hover:opacity-70 transition-opacity"
      >
        {label}
      </button>
    );
  
    return (
      <header
        className="sticky top-0 z-50 w-full"
        style={{
          backgroundColor: "rgba(250,250,248,0.94)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 transition-all"
          style={{ paddingTop: scrolled ? "0.6rem" : "1.05rem", paddingBottom: scrolled ? "0.6rem" : "1.05rem" }}
        >
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            {navItem("services", "Services")}
            {navItem("why-choose-us", "Why Choose Us")}
            {navItem("service-areas", "Service Areas")}
            {navItem("faq", "FAQ")}
          </nav>
          <div className="hidden md:block">
            <CallButton size="md" />
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} color={COLORS.ink} /> : <Menu size={24} color={COLORS.ink} />}
          </button>
        </div>
  
        {open && (
          <div
            className="md:hidden px-5 pb-5 flex flex-col gap-4"
            style={{ borderTop: `1px solid ${COLORS.border}` }}
          >
            <div className="pt-4 flex flex-col gap-4">
              {navItem("services", "Services")}
              {navItem("why-choose-us", "Why Choose Us")}
              {navItem("service-areas", "Service Areas")}
              {navItem("faq", "FAQ")}
            </div>
            <CallButton full size="lg" />
          </div>
        )}
      </header>
    );
  }