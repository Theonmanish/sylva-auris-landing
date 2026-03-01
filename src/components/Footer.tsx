import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-[#EAEAEA]/60 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-[0.26em] text-[#EAEAEA]">
            SYLVA AURIS
          </p>
          <p className="max-w-sm">
            Handcrafted terrariums with an intelligent, seasonal care companion.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="space-y-1">
            <p className="font-medium text-[#EAEAEA]/80">Explore</p>
            <div className="space-y-1">
              <Link href="#home" className="block hover:text-[#C6A85C]">
                Home
              </Link>
              <Link href="#about" className="block hover:text-[#C6A85C]">
                About
              </Link>
              <Link href="/gallery" className="block hover:text-[#C6A85C]">
                Gallery
              </Link>
            </div>
          </div>
          <div className="space-y-1">
            <p className="font-medium text-[#EAEAEA]/80">Contact</p>
            <div className="space-y-1">
              <a href="mailto:hello@sylvaauris.studio" className="block hover:text-[#C6A85C]">
                Email
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-[#C6A85C]"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 pb-6 text-center text-sm text-[#EAEAEA]/40">
        © {new Date().getFullYear()} Sylva Auris. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

