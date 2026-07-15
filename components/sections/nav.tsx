"use client";

import { useState, useEffect } from "react";

import { Menu, X } from "@icons";
import { Button } from "@components/ui/button";
import { Logo } from "@components/ui/logo";
import { cn } from "@shared/utils/cn";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
] as const;

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on nav link click
  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#" aria-label="Charis Foundation — go to top">
          <Logo variant={scrolled ? "dark" : "light"} />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={cn(
                  "font-body text-sm font-medium transition-colors duration-200 hover:text-hot-pink",
                  scrolled ? "text-ink" : "text-white",
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop donate CTA */}
        <div className="hidden md:block">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              document
                .getElementById("donate")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Donate
          </Button>
        </div>

        {/* Mobile: Donate always visible + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              document
                .getElementById("donate")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Donate
          </Button>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={cn(
              "rounded-md p-1 transition-colors",
              scrolled ? "text-plum hover:text-hot-pink" : "text-white hover:text-soft-pink",
            )}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!menuOpen}
      >
        <ul
          className="flex flex-col gap-1 bg-white px-4 pb-6 pt-2"
          role="list"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleLinkClick}
                className="block rounded-md px-3 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-blush hover:text-hot-pink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
