import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex w-full items-center justify-between bg-[#0B0F0D]/65 py-3.5 pr-6 backdrop-blur-sm">
        <Link href="#home" className="flex items-center gap-3 px-7 text-sm font-semibold tracking-[0.28em] text-[#EAEAEA]">
          <Image
            src="/logo.png.png"
            alt="Sylva Auris logo"
            width={52}
            height={52}
            priority
            className="h-10 w-10 rounded-full object-cover"
          />
          <span>SYLVA AURIS</span>
        </Link>
        <div className="ml-auto flex items-center gap-8 text-sm text-[#EAEAEA]/80">
          <Link href="#home" className="hidden transition-colors hover:text-[#EAEAEA] md:block">
            Home
          </Link>
          <Link href="#about" className="hidden transition-colors hover:text-[#EAEAEA] md:block">
            About
          </Link>
          <Link href="#gallery" className="hidden transition-colors hover:text-[#EAEAEA] md:block">
            Gallery
          </Link>
          <Link href="#contact" className="hidden transition-colors hover:text-[#EAEAEA] md:block">
            Contact
          </Link>
          <Link 
            href="https://care.sylvaauris.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury mr-3 rounded-full border border-[#C6A85C]/40 bg-[#C6A85C]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#EAEAEA] transition-colors hover:bg-[#C6A85C]/20"
          >
            Open Care App
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

