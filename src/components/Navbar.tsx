
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-4 mt-4 flex items-center justify-between rounded-full border border-white/5 bg-black/20 px-6 py-3 backdrop-blur-xl">
        <Link
          href="#home"
          className="flex items-center gap-3 text-sm font-medium tracking-[0.24em] text-[#EAEAEA]"
        >
          <Image
            src="/logo.png.png"
            alt="Sylva Auris logo"
            width={52}
            height={52}
            priority
            className="h-10 w-10 rounded-full object-cover"
          />

          <span className="block text-[10px] leading-none sm:text-sm">
            SYLVA AURIS
          </span>
        </Link>

        <div className="flex items-center gap-8 text-sm tracking-[0.08em]">
          <Link
            href="#home"
            className="hidden text-[#EAEAEA]/65 transition-all duration-300 hover:text-[#EAEAEA] md:block"
          >
            Home
          </Link>

          <Link
            href="#about"
            className="hidden text-[#EAEAEA]/65 transition-all duration-300 hover:text-[#EAEAEA] md:block"
          >
            About
          </Link>

          <Link
            href="/gallery"
            className="hidden text-[#EAEAEA]/65 transition-all duration-300 hover:text-[#EAEAEA] md:block"
          >
            Gallery
          </Link>

          <Link
            href="#contact"
            className="hidden text-[#EAEAEA]/65 transition-all duration-300 hover:text-[#EAEAEA] md:block"
          >
            Contact
          </Link>

          <Link
            href="https://care.sylvaauris.in"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#C6A85C]/30 bg-[#C6A85C]/8 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#EAEAEA] transition-all duration-300 hover:border-[#C6A85C]/50 hover:bg-[#C6A85C]/15"
          >
            Care App
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

