import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0B0F0D]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#home" className="flex items-center text-sm font-semibold tracking-[0.28em] text-[#EAEAEA]">
          <img
            src="/favicon.png"
            alt="Sylva Auris logo"
            className="h-15 w-15 rounded-full mr-2 object-cover"
          />
          SYLVA AURIS
        </Link>
        <div className="hidden items-center gap-8 text-sm text-[#EAEAEA]/80 md:flex">
          <Link href="#home" className="transition-colors hover:text-[#EAEAEA]">
            Home
          </Link>
          <Link href="#about" className="transition-colors hover:text-[#EAEAEA]">
            About
          </Link>
          <Link href="#gallery" className="transition-colors hover:text-[#EAEAEA]">
            Gallery
          </Link>
          <Link href="#contact" className="transition-colors hover:text-[#EAEAEA]">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://care.sylvaauris.in"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#C6A85C]/40 bg-[#C6A85C]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#EAEAEA] transition-colors hover:bg-[#C6A85C]/20"
          >
            Open Care App
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

